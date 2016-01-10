'use strict';

angular.module('ui.menu.ctrl', [])
    .controller('MenuController', [
        '$scope',
        '$rootScope',
        'courseService',
        '$filter',
        'soundService', function ($scope,
                                  $rootScope,
                                  courseService,
                                  $filter,
                                  soundService) {

            var soundMuted = false;
            var soundSource;
            var currentPage;
            var playCssClass = "glyphicon glyphicon-play";
            var pauseCssClass = "glyphicon glyphicon-pause";
            var volumeUpCssClass = "glyphicon glyphicon-volume-up";
            var volumeMuteCssClass = "glyphicon glyphicon-volume-off";
            $scope.disablePreviousUrlButton = true;
            $rootScope.globalSoundMute = true;

            $rootScope.$on('onCourseLoaded', function () {

                $scope.fullLinksCollection = [];
                $scope.toplinks = courseService.getTopLinks();

                console.log($scope.toplinks);

                //GoToPrevious URL button
                if ($rootScope.getURLParameter().prevUrl !== null) {
                    if ($scope.toplinks.gotopreviousurl) {
                        $rootScope.sessionTime();
                        $scope.gotoPreviousUrlLabel = $scope.toplinks.gotopreviousurl.label;
                    }
                }
                //PreviousUrlButton Disable and Enable
                $scope.hidePreviousUrlButton = ($rootScope.getURLParameter().prevUrl === null) ? false : true;

                // Add the click function to the dictionary link
                if ($scope.toplinks.dictionary) {
                    $scope.toplinks.dictionary.click = $scope.dictionaryClicked;
                    $scope.fullLinksCollection.push($scope.toplinks.dictionary);
                }

                // Add the click function to the fullscreen link
                if ($rootScope.mobileLayout !== true) {
                    if ($scope.toplinks.fullscreen.visible == true) {
                        $scope.toplinks.fullscreen.click = $scope.onFullScreenClick;
                        $scope.fullLinksCollection.push($scope.toplinks.fullscreen);
                    }
                }

                // Add the click function to the popup link(s)
                if ($scope.toplinks.popuplinks) {
                    $scope.toplinks.popuplinks.forEach(function (popupLinksEach) {
                        popupLinksEach.click = $scope.linkClicked;
                        $scope.fullLinksCollection.push(popupLinksEach)
                    });
                }
            });
            $rootScope.$on('SetOfCurrentPage', function (event, args) {
                currentPage = args;
            });

            var shouldPlay = true;
            $rootScope.shouldPlayAutoPopupSound = true;
            $rootScope.$on('SoundShouldNoPlay', function (event, args) {
                shouldPlay = false;
            });

            //Resetting the navigation button on the correct position in case of windows resize
            //contentLoadedAfterAnimation event will be raised by course
            //navigation system after the animation of content over
            //and the property of sound control will be set accordingly
            $rootScope.$on('contentLoadedAfterAnimation', function (event, args) {
                currentPage = courseService.getCurrentPage();
                soundSource = null;
                $scope.showControls = courseService.getSoundControls();
                if (currentPage.sound !== undefined && currentPage.sound !== null) {
                    $scope.disableControl = false;

                    switch (currentPage.type) {
                        case 'endpage':
                            if (currentPage.complete.isComplete) {
                                soundSource = soundService.getSoundSource(
                                    currentPage.complete.sound.source_ogg,
                                    currentPage.complete.sound.source_mp3);
                                break;
                            }
                        default:
                            soundSource = soundService.getSoundSource(
                                currentPage.sound.source_ogg,
                                currentPage.sound.source_mp3);
                            break;
                    }
                    if (shouldPlay === true) {

                        //We are excluding IOS Autoplay Functionality
                        if ($rootScope.showingReturnToPagePopup !== true) {
                            if (!createjs.BrowserDetect.isIOS) {
                                if ($rootScope.currentPageIsKnowledgePage === true)
                                    return false;

                                soundService.playNew(
                                    soundSource,
                                    function () {
                                        $scope.playElementCssClass = pauseCssClass;
                                        $scope.applyChanges();
                                    }
                                    , function () {
                                        $scope.playElementCssClass = playCssClass;
                                        $scope.applyChanges();
                                    }
                                );
                            }
                            shouldPlay = false;
                        }
                    } else {
                        shouldPlay = true;
                    }
                } else {
                    setTimeout(function () {
                        $scope.disableControl = true;
                        $scope.playElementCssClass = playCssClass;
                        $scope.applyChanges();
                    }, 100);
                }
            });


            //This rootScope handles if any AutoSound plays the icon of play button changes accordingly
            $rootScope.$on('AutoSoundPlayed', function (event, args) {
                if ($rootScope.popupSoundPLayed === undefined) {
                    if (args === "play") {
                        $scope.playElementCssClass = pauseCssClass;
                        _.defer(function () {
                            $scope.applyChanges()
                        });
                    } else if (args === "complete") {
                        $scope.playElementCssClass = playCssClass;
                        _.defer(function () {
                            $scope.applyChanges()
                        });
                    }
                }
            });

            $rootScope.$on('onPopupOpened', function () {
                soundService.stop(
                    function () {
                        $scope.playElementCssClass = playCssClass;
                    });
            });

            //listen to the global mute event
            $rootScope.$on('onSoundMuteClick', function (event, mute) {
                soundService.mute(mute);
            });

            //Play Pause and Resume for Sound
            $scope.playSound = function () {
                if (soundSource !== undefined && soundSource !== null) {
                    hideMobileHeader();
                    soundService.playPauseOrResume(
                        soundSource,
                        function () {
                            $scope.playElementCssClass = pauseCssClass;
                            $scope.applyChanges()
                        },
                        function () {
                            $scope.playElementCssClass = playCssClass;

                            $scope.applyChanges()
                        },
                        function () {
                            $scope.playElementCssClass = playCssClass;
                            $scope.applyChanges();
                        });
                }
            };

            $rootScope.stopPlaySound = $scope.playSound;

            //Mute and Un-mute for volume
            $scope.muteSound = function () {
                hideMobileHeader();
                $scope.soundMuted = !$scope.soundMuted;
                $rootScope.globalSoundMute = !$scope.soundMuted;
                $scope.muteElementCssClass = ($scope.soundMuted === true) ? volumeMuteCssClass : volumeUpCssClass;
                $rootScope.$broadcast("onSoundMuteClick", !$scope.soundMuted);
            };

            //Rewind for sound
            $scope.rewindSound = function () {
                hideMobileHeader();
                createjs.Sound.removeAllSounds();
                soundService.playNew(
                    soundSource,
                    function () {
                        $scope.playElementCssClass = pauseCssClass;
                        $scope.applyChanges();
                    },
                    function () {
                        $scope.playElementCssClass = playCssClass;
                        $scope.applyChanges();
                    });
            };

            //FullScreen Implementation
            $scope.onFullScreenClick = function (link) {

                if (GetIEVersion() > 0) {
                    if (GetIEVersion() >= 11) {
                        screenfull.toggle();
                    } else {

                        $rootScope.currentPopup = link.fallback;
                        $rootScope.$broadcast('onShowPopup');
                    }
                } else {
                    screenfull.toggle();
                }
            };
            $rootScope.Ie = GetIEVersion();
            //Getting the Version of Browser
            function GetIEVersion() {
                var sAgent = window.navigator.userAgent;
                var Idx = sAgent.indexOf("MSIE");

                // If IE, return version number.
                if (Idx > 0) {
                    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
                }
                else if (!!navigator.userAgent.match(/Trident\/7\./)) {
                    // If IE 11 then look for Updated user agent string.
                    return 11;
                } else {
                    return 0; //It is not IE
                }
            }

            // Check if default sound should be played
            function IsDefaultSoundPlayed(currentPageObj) {

                var playDefaultSound = true;
                if (currentPageObj.openPopup !== undefined && currentPageObj.openPopup !== null && currentPageObj.popups !== undefined && currentPageObj.popups !== null) {
                    if (currentPageObj.popups.length > 0) {
                        $(currentPageObj.popups).each(function (index, popupObj) {
                            if (currentPageObj.openPopup.id === popupObj.id && popupObj.sound !== undefined && popupObj.sound !== null) {
                                playDefaultSound = false;
                            }
                        });
                    }
                }
                return playDefaultSound;
            }

            //Popup Link click Implementation
            $scope.linkClicked = function (link) {
                hideMobileHeader();
                $scope.abc = "active";

                console.log(link);
                if (link.targetpage && link.targetpage !== "") {
                    $rootScope.$broadcast('onDisableNavigation', false);
                    $rootScope.$broadcast("onGoToParticularPage", link.targetpage);
                } else {
                    $rootScope.currentPopup = link.popup;
                    $rootScope.$broadcast('onShowPopup');
                }
            };

            $scope.dictionaryClicked = function (link) {
                hideMobileHeader();
                $rootScope.hideDictionary = false;
                window.scrollTo(0, 0);
                $(window).trigger("resize");
            };

            $scope.gotoPreviousUrl = function () {
                window.location = $rootScope.getURLParameter().prevUrl;
            };

            $scope.applyChanges = function () {
                if ($scope.applyChangesTimer !== null) {
                    clearTimeout($scope.applyChangesTimer);
                }

                $scope.applyChangesTimer = setTimeout(function () {
                    $scope.$apply();
                }, 1);
            };

            //Initializing the sound control
            $scope.init = function () {
                $scope.playElementCssClass = playCssClass;
                $scope.muteElementCssClass = volumeUpCssClass;
                $scope.showFullScreen = false;
                //console.log("YYYYYYYY", $rootScope.getURLParameter());
            };

            function hideMobileHeader() {
                if ($rootScope.mobileLayout === true) {
                    $rootScope.$broadcast('OnHideMobileHeader');
                }
            }

            $scope.init();
        }]);

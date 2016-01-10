'use strict';

angular.module('ui.footer.ctrl', [])
    .controller('FooterController', ['$scope', '$rootScope', 'courseService', 'scormService', 'navigationService', 'navigationHandlerService', 'soundService', '$window',
        function ($scope, $rootScope, courseService, scorm, navigationService, navigationHandlerService, soundService, $window) {

            var sameEvent = false;
            $scope.navigation = [];
            $scope.nonMobile = true;
            var chaptersList = [];
            var currentChapter;
            $scope.currentChapterPageCollection = [];
            $scope.showFooterNavigation = !courseService.getCurrentPage().hideFooterNavigation;
            $scope.moreContectCheck = true;
            var moreContentIndicator = courseService.getMoreContent().showGradient;

            function moreContentDetect() {
                angular.element($window)
                    .bind(
                    "scroll",
                    function () {

                        var windowBottom = $rootScope.body().windowHeight + window.pageYOffset;
                        if (windowBottom >= $rootScope.body().docHeight) {
                            $scope.moreContectCheck = true;
                        } else {
                            $scope.moreContectCheck = false;
                        }
                    });
            }

            $rootScope.$on('onCourseLoaded', function () {
                $scope.navigation = navigationService.getNavigationObject();
                $rootScope.$broadcast('onsetProgress');

                //This will go to header mobile controller
                $rootScope.navigationMobile = $scope.navigation;
            });

            $rootScope.$on('onDisableNavigation', function (event, args) {
                $scope.disableFooter = args === true ? true : false;
            });

            $rootScope.$on('onDisableFooter', function (event, args) {
                console.log("onDisableFooter");
                $scope.disableFooter = true;
            });

            $scope.gradientIcon = courseService.getMoreContent().icon;


            $rootScope.$on('contentLoadedAfterAnimation', function (event, args) {
                if (moreContentIndicator) {
                    $scope.moreContectCheck = true;
                    if ($rootScope.body().windowHeight !== $rootScope.body().docHeight) {
                        $scope.moreContectCheck = false;
                        moreContentDetect();
                    }
                }

                //Report course progress on page visit
                scorm.reportCourseProgress((navigationService.getNavigationObject().getProgress()).toFixed(2));
            });

            $rootScope.$on('onPageChanged', function (event, args, addedProgress) {
                $rootScope.stopVideo = function () {
                    return false;
                };
                $scope.showFooterNavigation = !courseService.getCurrentPage().hideFooterNavigation;

                if ($rootScope.oneChapterNavigation) {
                    //One Chapter Navigation Footer Changes
                    $scope.currentPageId = navigationService.getCurrentPageId();
                    $scope.currentChapterPageCollection = navigationService.getNavigationObject().getCurrentChapter();
                }

                if ($rootScope.currentPageIsKnowledgePage === true)
                    return;

                var pageFound = false;
                var completedPageId = courseService.getCurrentPage().id;
                $rootScope.pageVisitedForFirstTime = false;

                function setProgress(page) {
                    if (event.targetScope.currentPageIsKnowledgePage != true || event.targetScope.knowledgeTestCompleted === true) {

                        //Locking the page
                        if ($rootScope.lockNavigation && $rootScope.forceInteraction) {
                            page.autoReportProgress = false;
                            if (page.progress === 1) {
                                $rootScope.lockNavigationFooter = false;
                                $rootScope.lockNavigation = false;
                            }
                        }

                        if (!$rootScope.forceInteraction) {
                            if (page.notRequired) {
                                page.progress = 0;
                            }
                        }

                        if (page.getProgress() === 0) {
                            $rootScope.pageVisitedForFirstTime = true;
                        }

                        page.setAsCurrentPage();

                        if (args !== "progressByButtonClick") {
                            if (page.autoReportProgress === true) {
                                page.setAsFinished();
                                pageFound = true;
                            }
                        } else {
                            page.addProgress(addedProgress);
                            pageFound = true;
                            $scope.applyChanges();
                        }
                    }
                }

                //$scope.navigation.resetCurrentPage();

                setTimeout(function () {

                    //Setting the specified page progress as completed
                    $($scope.navigation.chapters).each(function (chapterIndex, chapter) {
                        $(chapter.pages).each(function (pageIndex, page) {

                            if (page.id.length < 1) {
                                if (page.pageid === courseService.getCurrentPage().pageid) {
                                    setProgress(page);
                                }
                            } else {
                                if (page.id === completedPageId) {
                                    setProgress(page);
                                }
                            }
                        });

                        // Verify if all pages of currently selected chapter is completed then mark chapter as completed
                        // please use getProgress on chapter stamp.
                        var allPageOfChapterCompleted = true;
                        $(chapter.pages).each(function (pageIndex, page) {
                            if (page.getProgress() === 0) {
                                allPageOfChapterCompleted = false;
                            }
                        });

                        if ((allPageOfChapterCompleted === true ) && (pageFound === true)) {
                            if (chapter.setAsFinished !== undefined && chapter.setAsFinished !== null) {
                                chapter.setAsFinished();
                            }
                        }
                    });

                    $rootScope.$broadcast('updatedProgress');

                }, 100);

            });


            var lockPage = function (element) {
                if ($rootScope.forceInteraction) {
                    if ($(element.target).attr("data-progressStatus") == 0) {
                        return true;
                    }

                    if ($(element.target).attr("data-progressStatus") == 1) {
                        return false;
                    }
                } else {
                    return false;
                }
            };


            $scope.onPageClick = function ($event) {

                $rootScope.currentPageIsKnowledgePage = false;
                $rootScope.hideFooterNavigationForKnowledgePage = false;
                $scope.applyChanges();

                setTimeout(function () {
                    sameEvent = false;
                }, 200);

                if (sameEvent === false) {
                    $rootScope.$broadcast('SoundShouldNoPlay', false);
                    $rootScope.shouldPlayAutoPopupSound = false;
                    setTimeout(function () {
                        if (lockPage($event) === false) {
                            $rootScope.$broadcast('OnHideMobileHeader');
                            $rootScope.$broadcast("onJumpEnablePreviousLink", $($event.target).attr("data-id"));
                            $rootScope.$broadcast("onGoToParticularPage", $($event.target).attr("data-page-id"));
                            var page = courseService.getCurrentPage();
                            $rootScope.prevPageId = page.id;
                            $rootScope.playSoundForPage(page.pageid);
                            sameEvent = true;
                        }
                    }, 100);
                }
            };

            $scope.hidePageTitleToolTip = function () {
                footerTooltipDestroy();
            };

            $scope.pageClick = function (event, args) {

                if ($rootScope.prevPageId !== $(event.target).attr("data-id")) {
                    if ($scope.nonMobile == true) {
                        $scope.onPageClick(event);
                    }
                }
            };

            $scope.pageTitleTooltip = function (event, args) {
                footerTooltipDestroy();
                var counter = 0;
                $($scope.navigation.chapters).each(function (chapterIndex, chapter) {
                    chaptersList[counter] = chapter.chapterid;
                    counter++;
                });
                currentChapter = $(event.target).attr("data-chapter-id");
                if ($scope.nonMobile == true) {
                    buildTooltipFooterTitle($(event.target).children("div"), $(event.target).attr("data-page-title"));
                }
            };

            function footerTooltipDestroy() {
                $(".pageInnner").each(function () {
                    $(this).children('div').tooltip('destroy');
                });
            }

            function buildTooltipFooterTitle(element, content) {
                $(element).tooltip({
                    placement: 'top',
                    title: content,
                    html: true,
                    trigger: 'manual'
                }).on('shown.bs.tooltip', function () {

                    var elem = $(element).parent();
                    var tooltip = $(".tooltip");
                    var tooltipArrow = $(".tooltip-arrow");
                    var tooltipLeftValue = 0;
                    tooltipLeftValue = tooltip.css("left").split('p')[0];
                    var tooltipWidth = tooltip.width();
                    var tooltipPosition;
                    if (chaptersList[0] === currentChapter) {
                        tooltipPosition = tooltipLeftValue - (-(tooltipWidth / 2) + 15);
                        tooltip.css({"left": tooltipPosition + "px"});
                        tooltipArrow.removeAttr("style");
                        tooltipArrow.addClass("tooltip-arrowLeft");
                    } else if (chaptersList[chaptersList.length - 1] === currentChapter) {
                        tooltipPosition = tooltipLeftValue - (+(tooltipWidth / 2) - 15);
                        tooltip.css({"left": tooltipPosition + "px"});
                        tooltipArrow.removeAttr("style");
                        var arrowPosition = tooltipWidth - 16;
                        tooltipArrow.css({"left": arrowPosition + "px"});
                    }
                    if ($rootScope.Ie !== 9) {
                        tooltip.css({"visibility": "visible"});
                    }
                });
                setTimeout(function () {
                    $(element).tooltip('show');
                    if ($rootScope.Ie !== 9) {
                        $(".tooltip").css({"visibility": "hidden"});
                    }
                }, 200);
            };

            $scope.applyChanges = function () {
                if ($scope.applyChangesTimer !== null) {
                    clearTimeout($scope.applyChangesTimer);
                }

                $scope.applyChangesTimer = setTimeout(function () {
                    $scope.$apply();
                }, 500);
            };
        }])
;
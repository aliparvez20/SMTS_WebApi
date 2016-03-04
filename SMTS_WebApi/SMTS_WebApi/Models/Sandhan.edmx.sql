
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 03/04/2016 16:23:34
-- Generated from EDMX file: D:\PERSONAL PRACTICE\Final ANGULAR Practice\SMTS_WebApi\SMTS_WebApi\SMTS_WebApi\Models\Sandhan.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [NewSandhan];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_JobLocation]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Jobs] DROP CONSTRAINT [FK_JobLocation];
GO
IF OBJECT_ID(N'[dbo].[FK_JobProcess]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Jobs] DROP CONSTRAINT [FK_JobProcess];
GO
IF OBJECT_ID(N'[dbo].[FK_JobQualification]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Jobs] DROP CONSTRAINT [FK_JobQualification];
GO
IF OBJECT_ID(N'[dbo].[FK_JobUser]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Jobs] DROP CONSTRAINT [FK_JobUser];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Jobs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Jobs];
GO
IF OBJECT_ID(N'[dbo].[Locations]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Locations];
GO
IF OBJECT_ID(N'[dbo].[Processes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Processes];
GO
IF OBJECT_ID(N'[dbo].[Qualifications]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Qualifications];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Processes'
CREATE TABLE [dbo].[Processes] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ProcessName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Locations'
CREATE TABLE [dbo].[Locations] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [LocationName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Qualifications'
CREATE TABLE [dbo].[Qualifications] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [QualificationName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserName] nvarchar(max)  NOT NULL,
    [UserEmail] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [Mobile] nvarchar(max)  NOT NULL,
    [IsAdmin] bit  NOT NULL
);
GO

-- Creating table 'Jobs'
CREATE TABLE [dbo].[Jobs] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Title] nvarchar(max)  NOT NULL,
    [CompanyName] nvarchar(max)  NOT NULL,
    [RequiredYearExperience] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NOT NULL,
    [LastDate] datetime  NOT NULL,
    [KeySkills] nvarchar(max)  NOT NULL,
    [Salary] nvarchar(max)  NOT NULL,
    [Industry] nvarchar(max)  NOT NULL,
    [FunctionalArea] nvarchar(max)  NOT NULL,
    [Role] nvarchar(max)  NOT NULL,
    [CompanyProfile] nvarchar(max)  NOT NULL,
    [PostedDate] datetime  NOT NULL,
    [CompanyImage] nvarchar(max)  NOT NULL,
    [LocationId] int  NOT NULL,
    [ProcessId] int  NOT NULL,
    [QualificationId] int  NOT NULL,
    [UserId] int  NOT NULL
);
GO

-- Creating table 'Messages'
CREATE TABLE [dbo].[Messages] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [messageName] nvarchar(max)  NOT NULL,
    [messageEmail] nvarchar(max)  NOT NULL,
    [messageBody] nvarchar(max)  NOT NULL,
    [messageDate] datetime  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Processes'
ALTER TABLE [dbo].[Processes]
ADD CONSTRAINT [PK_Processes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Locations'
ALTER TABLE [dbo].[Locations]
ADD CONSTRAINT [PK_Locations]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Qualifications'
ALTER TABLE [dbo].[Qualifications]
ADD CONSTRAINT [PK_Qualifications]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Jobs'
ALTER TABLE [dbo].[Jobs]
ADD CONSTRAINT [PK_Jobs]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Messages'
ALTER TABLE [dbo].[Messages]
ADD CONSTRAINT [PK_Messages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [LocationId] in table 'Jobs'
ALTER TABLE [dbo].[Jobs]
ADD CONSTRAINT [FK_JobLocation]
    FOREIGN KEY ([LocationId])
    REFERENCES [dbo].[Locations]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_JobLocation'
CREATE INDEX [IX_FK_JobLocation]
ON [dbo].[Jobs]
    ([LocationId]);
GO

-- Creating foreign key on [ProcessId] in table 'Jobs'
ALTER TABLE [dbo].[Jobs]
ADD CONSTRAINT [FK_JobProcess]
    FOREIGN KEY ([ProcessId])
    REFERENCES [dbo].[Processes]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_JobProcess'
CREATE INDEX [IX_FK_JobProcess]
ON [dbo].[Jobs]
    ([ProcessId]);
GO

-- Creating foreign key on [QualificationId] in table 'Jobs'
ALTER TABLE [dbo].[Jobs]
ADD CONSTRAINT [FK_JobQualification]
    FOREIGN KEY ([QualificationId])
    REFERENCES [dbo].[Qualifications]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_JobQualification'
CREATE INDEX [IX_FK_JobQualification]
ON [dbo].[Jobs]
    ([QualificationId]);
GO

-- Creating foreign key on [UserId] in table 'Jobs'
ALTER TABLE [dbo].[Jobs]
ADD CONSTRAINT [FK_JobUser]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_JobUser'
CREATE INDEX [IX_FK_JobUser]
ON [dbo].[Jobs]
    ([UserId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
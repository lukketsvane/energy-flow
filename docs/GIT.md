# Introduction to Git for Our Project

# intro

Welcome to our project! As you'll be contributing to our project's codebase, it's important to familiarize yourself with Git, a version control system that allows multiple people to work on a project at the same time without overwriting each other's changes. This guide will provide a basic introduction to using Git in our project.

## What is Git?

Git is a distributed version control system that tracks changes to our project's files over time. It allows you to experiment with different versions of our project, and when you're ready, you can share your changes with the rest of the team.

## Installing Git

For our project, you can use either 'GIT SCM' or 'GIT Desktop' (which has a user interface). You can download the installer [here for GIT Desktop](https://desktop.github.com/) or [here for GIT SCM](https://git-scm.com/downloads).

## Cloning the Repository

To get a copy of our project on your local machine, you'll need to clone our repository. Use the following command in your terminal:

```
git clone <https://github.com/lukketsvane/energy-flow.git>

```

## Creating a Branch

Before you start making changes, it's good practice to create a new branch. This keeps your changes separate from the main project while you work. To create a new branch, use the command:

```
git checkout -b YourBranchName

```

Replace `YourBranchName` with a name that describes the feature or fix you're working on.

## Making Changes and Committing Them

Once you've made some changes, you'll want to commit them. First, check which files you've changed with:

```
git status

```

Then, add the changes you want to commit:

```
git add .

```

Or, to add a specific file, replace `.` with the path to the file.

Next, commit the changes and include a brief message describing what you've done:

```
git commit -m "YourCommitMessage"

```

## Pushing Changes

Once you've committed your changes, you can share them with the team by pushing them to the remote repository:

```
git push origin YourBranchName

```

Replace `YourBranchName` with the name of the branch you're working on.

## Pull Requests

After pushing your changes, you'll want to merge them into the main project. To do this, you can create a pull request on GitHub. This lets the team review your changes and, if everything looks good, merge them into the main project.

To get started with pull requests, you can follow GitHub's [guide on creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
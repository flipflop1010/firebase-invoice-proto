# Git flow operation for development using private repository

## Pre-requisites for using Git

1. Install git

2. Create an account to github

3. Configure Git with same user name and password

   Its a good practise to give same user name and password in git and github account

   > git config --global user.name "Your git username"

   > git config --global user.email "you@example.com"

   In case of any mistake, remove or reset username or email with

   > git config --global --unset user.name "the_name_to_remove"

   > git config --global --unset user.email "the_email_to_remove"

   Check git setup

   > git config --list

4. Change the default branch name globally as "main" instead of "master"

   > git config --global init.defaultBranch main

## Common git operations at developer point - Initate development and adding a Feature

1. Development initiation

   - developer will be made a collaborator

   - accept the invitation as a collaborator

2. Clone the project given

   Clone the main branch of development repository ( used for pre-production )

   > git clone -b main https://github.com/sktechlab/indusplat.git

   Alternatively

   > git clone -b main https://your_username@github.com/path/to/private/repo.git ( Check it )
   > Check all branches
   > git branch -a

   To clone a specific branch ( in case you are told to do so )

   > git clone -b <branchname> <remote-repo-url>

   - git will be automatically initiated in working dir,
   - a link to the remote repository will be generated automatically
   - you can access it as origin (default)

3. Wait for the start order (Requirement will be given )

4. Suppose a feature is to be added to the project
   Coding starts after understanding requirement

5. Immediately before coding, from local branch main, pull the remote main to the working directory - do all these from VSCode terminal

   From terminal go to local working directory of the project ( created at the time of clone )

   > code . ( Starts VSCode )

   Check your initial git status at VSCode Terminal

   > git status

   > git pull origin main ( will fetch and merge any work done by others after your clone )

   If you have done it mistakenly undo it from the relevant branch

   > git reset --hard

6. create a new local feature branch from main and make it working branch

   > git checkout -b fbr-featurename

7. code and make all changes in feature branch

? pull or rebase from main

8. add files in staging areas and commit changes

   > git add .

   > git commit -m "Feature-Branch-Name Specific work in this commit"

   To uncommit the recent commit in case of any mistake

   > git reset --hard Head~1

   - This command says to minus the most recent commit.
   - This will also unstage it, deleting commit history
   - It will also delete all the recent changes that were in last commit from working directory

9. create and push to a new remote feature branch in remote repo with same feature branch name

   > git push -u origin fbr-featurename

   If your feature requires lot of integration then rebase before push

   > git pull --rebase origin main

10. inform dev-op to check your work
    ( give your remote branch link )
	git checkout main
	
	git pull origin main

    delete local feature branch 

	git branch -d branchname

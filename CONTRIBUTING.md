#Contributing to meteor-mentor

##About
This doc provides a set of rules for user contributions like bug reports, pull requests etc.
We're happy for every contribution, but when following these guidelines it's easier to merge pull requests and answer to issues.

##Submitting Bugs
Before submitting a bug, please do the following:
* Do local troubleshooting. Check if you are on the newest version. Try older versions.
* Check if there's already an issue/bug report in the issue list.
* If it's a question and not a bug, please contact the slack channel instead.

What to put in your bug report
Give us all the information you have.
* Version
* Operating System
* How to recreate
* Stacktrace


##Contributing
Always make a new branch for your work - no matter how small.   
Use different branches/pull requests for different topics - don't submit one messy commit.
By contributing, you accept the MIT licencing of your work.

Where to base your branch:
* If it's a bugfix base it one the branch the bug was introduced, so we can merge it forward in all branches.
* If it's sth. new base it on master.

##Code formatting
Activate eslint in your editor and fix all the issues it lints.

[//]: # (add a section on ci, as soon as it's ready)

##Documentation
This is a cumminity applications.   
That means there will hopefully be a lot of different people developing on it over the time.
Please document your code so someone else has a slight chance to
1. understand what you did
2. understand why it doesn't work

##Tests

[//]: # (add a section about testing as soon as we know what testing we're gonna use)

##Full example
###Preparing the fork
1. Hit 'fork' on github
2. Clone your project: git clone git@github.com:yourname/theproject
3. Create a branch: cd theproject; git checkout -b my-feature
 
###Making your Changes
1. Run Tests
2. Write Tests for your changes
3. Code your changes
4. Make sure all tests pass
5. Commit your changes: git commit -m "Foo the bars"

###Creating Pull Requests

1. Push your commit to get it back up to your fork: git push origin HEAD
2. Visit Github, click “Pull request” button.
3. In the description field, write down issue number (if submitting code fixing an existing issue) or describe the issue + your fix (if submitting a wholly new bugfix).
4. Hit ‘submit’!


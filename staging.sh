#!/bin/bash
#
# A script to remember the workflow
#

git push origin develop
git checkout staging
git merge develop
git push origin staging
git push staging-heroku staging:master

git checkout master
git merge staging
git push origin master # I added this
git push production-heroku master:master

git checkout develop #Back to develop

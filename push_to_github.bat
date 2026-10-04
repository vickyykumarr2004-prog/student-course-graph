@echo off
echo Pushing to GitHub...

git init
git add .
git commit -m "Initial commit - Course Management System"
git branch -M main
git remote add origin https://github.com/kl2400031441/review_1_fsd.git
git push -u origin main

echo Done!
pause

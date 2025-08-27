@echo off
echo Building ResumeBoost for Production...

echo.
echo Step 1: Installing dependencies...
call npm ci

echo.
echo Step 2: Building Next.js application...
call npm run build

echo.
echo Step 3: Build completed successfully!
echo.
echo Build artifacts are located in the .next folder
echo To start the production server, run: npm start
echo.
pause
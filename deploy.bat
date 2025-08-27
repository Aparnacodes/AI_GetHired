@echo off
echo Deploying ResumeBoost to Production...

echo.
echo Step 1: Setting up production environment...
if exist .env.production (
    copy .env.production .env.local
    echo Production environment variables loaded
) else (
    echo Warning: .env.production not found. Please create it with your production values.
    pause
    exit /b 1
)

echo.
echo Step 2: Installing production dependencies...
call npm ci --only=production

echo.
echo Step 3: Building application for production...
call npm run build

echo.
echo Step 4: Starting production server...
echo Production server will start on http://localhost:3000
call npm start
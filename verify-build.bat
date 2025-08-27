@echo off
echo Verifying ResumeBoost Build...

echo.
echo Checking build artifacts...

if exist ".next" (
    echo ✅ .next folder exists
) else (
    echo ❌ .next folder missing - run build first
    pause
    exit /b 1
)

if exist ".next\server" (
    echo ✅ Server files present
) else (
    echo ❌ Server files missing
)

if exist ".next\static" (
    echo ✅ Static assets present
) else (
    echo ❌ Static assets missing
)

echo.
echo Checking configuration files...

if exist "package.json" (
    echo ✅ package.json exists
) else (
    echo ❌ package.json missing
)

if exist ".env.local" (
    echo ✅ Environment variables configured
) else (
    echo ⚠️  Environment variables not configured
)

echo.
echo Build verification complete!
echo To start production server: npm start
echo.
pause
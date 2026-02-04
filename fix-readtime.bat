@echo off
echo.
echo ============================================
echo   Fixing readTime format in all MD files
echo ============================================
echo.

cd /d "%~dp0src\content"

echo Processing careers folder...
powershell -Command "Get-ChildItem -Path 'careers' -Filter '*.md' | ForEach-Object { (Get-Content $_.FullName -Raw) -replace 'readTime:\s*\"(\d+)\s*min\s*read\"', 'readTime: $1' | Set-Content $_.FullName -NoNewline }"

echo Processing learn folder...
powershell -Command "Get-ChildItem -Path 'learn' -Filter '*.md' | ForEach-Object { (Get-Content $_.FullName -Raw) -replace 'readTime:\s*\"(\d+)\s*min\s*read\"', 'readTime: $1' | Set-Content $_.FullName -NoNewline }"

echo Processing money folder...
powershell -Command "Get-ChildItem -Path 'money' -Filter '*.md' | ForEach-Object { (Get-Content $_.FullName -Raw) -replace 'readTime:\s*\"(\d+)\s*min\s*read\"', 'readTime: $1' | Set-Content $_.FullName -NoNewline }"

echo Processing rights folder...
powershell -Command "Get-ChildItem -Path 'rights' -Filter '*.md' | ForEach-Object { (Get-Content $_.FullName -Raw) -replace 'readTime:\s*\"(\d+)\s*min\s*read\"', 'readTime: $1' | Set-Content $_.FullName -NoNewline }"

echo Processing tools folder...
powershell -Command "Get-ChildItem -Path 'tools' -Filter '*.md' | ForEach-Object { (Get-Content $_.FullName -Raw) -replace 'readTime:\s*\"(\d+)\s*min\s*read\"', 'readTime: $1' | Set-Content $_.FullName -NoNewline }"

echo.
echo ============================================
echo   DONE! All readTime fields fixed.
echo ============================================
echo.
echo Next steps:
echo   1. Check one file to verify the fix
echo   2. Open GitHub Desktop
echo   3. Commit: "Fix: Convert readTime to number"
echo   4. Push to origin
echo   5. Wait 2 min for Netlify rebuild
echo.
pause

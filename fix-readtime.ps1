# PowerShell script to fix readTime format in all markdown files
$contentPath = "C:\Users\sailo\Documents\GitHub\sailorsuccess-astro\src\content"

Write-Host "Fixing readTime format in all markdown files..." -ForegroundColor Cyan
Write-Host ""

$count = 0
Get-ChildItem -Path $contentPath -Filter "*.md" -Recurse | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content $file -Raw
    
    # Replace readTime: "X min read" with readTime: X
    $updated = $content -replace 'readTime:\s*"(\d+)\s*min\s*read"', 'readTime: $1'
    
    if ($content -ne $updated) {
        Set-Content -Path $file -Value $updated -NoNewline
        Write-Host "✓ Fixed: $($_.Name)" -ForegroundColor Green
        $count++
    }
}

Write-Host ""
Write-Host "Done! Fixed $count files." -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Verify one file manually"
Write-Host "2. Commit: 'Fix: Convert readTime from string to number'"
Write-Host "3. Push to GitHub"
Write-Host "4. Netlify will auto-rebuild"

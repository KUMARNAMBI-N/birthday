$ErrorActionPreference = "Stop"
$destDir = "$env:LOCALAPPDATA\Programs\nodejs"
$zipPath = "$env:TEMP\node.zip"
$tempDir = "$env:TEMP"

Write-Host "Checking if node.zip exists..."
if (-not (Test-Path $zipPath) -or ((Get-Item $zipPath).Length -lt 10000000)) {
    Write-Host "Downloading node.zip..."
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $client = New-Object System.Net.WebClient
    $client.DownloadFile("https://nodejs.org/dist/v20.18.0/node-v20.18.0-win-x64.zip", $zipPath)
}

Write-Host "Extracting node.zip with tar..."
& tar.exe -xf $zipPath -C $tempDir

if (-not (Test-Path $destDir)) { 
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null 
}

Write-Host "Copying to $destDir..."
Copy-Item -Path "$tempDir\node-v20.18.0-win-x64\*" -Destination $destDir -Recurse -Force

Write-Host "Configuring user PATH..."
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$destDir*") {
    [Environment]::SetEnvironmentVariable("Path", "$destDir;$userPath", "User")
}

Write-Host "Cleaning up temp files..."
Remove-Item -Path "$tempDir\node-v20.18.0-win-x64" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path $zipPath -Force -ErrorAction SilentlyContinue

Write-Host "Node version:"
& "$destDir\node.exe" -v
Write-Host "NPM version:"
& "$destDir\npm.cmd" -v
Write-Host "SUCCESS"

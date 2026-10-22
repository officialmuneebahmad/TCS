Add-Type -AssemblyName System.Drawing

function Create-CircularBitmap {
    param(
        [System.Drawing.Bitmap]$source,
        [int]$size
    )

    $dest = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.Clear([System.Drawing.Color]::Transparent)

    # Circular clip path with slight inset for perfectly smooth edges
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0.5, 0.5, $size - 1.0, $size - 1.0)
    $g.SetClip($path)

    # Draw the source image scaled to size
    $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $g.DrawImage($source, $rect, 0, 0, $source.Width, $source.Height, [System.Drawing.GraphicsUnit]::Pixel)

    $g.ResetClip()
    $path.Dispose()
    $g.Dispose()

    return $dest
}

# Load master favicon
$srcPath = Resolve-Path "favicon.png"
$sourceImg = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Output "Processing circular favicon from source: $($sourceImg.Width)x$($sourceImg.Height)"

# 1. 2048x2048 circular master
$circ2048 = Create-CircularBitmap -source $sourceImg -size 2048
$circ2048.Save("scripts/favicon-2048-circ.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 2. Generate standard sizes
$sizes = @(
    @{ Name = "favicon-512x512.png"; Size = 512 },
    @{ Name = "favicon-192x192.png"; Size = 192 },
    @{ Name = "apple-touch-icon.png"; Size = 192 },
    @{ Name = "favicon-32x32.png"; Size = 32 },
    @{ Name = "scripts/favicon-48x48.png"; Size = 48 },
    @{ Name = "scripts/favicon-16x16.png"; Size = 16 }
)

foreach ($s in $sizes) {
    $bmp = Create-CircularBitmap -source $circ2048 -size $s.Size
    $destFile = $s.Name
    if (Test-Path $destFile) { Remove-Item $destFile -Force }
    $bmp.Save($destFile, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved circular $($s.Name) ($($s.Size)x$($s.Size))"
}

$sourceImg.Dispose()

# Now overwrite master favicon.png with circular version
Remove-Item "favicon.png" -Force
$circ2048.Save("favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$circ2048.Dispose()
Write-Output "Updated favicon.png with circular 2048x2048 format"


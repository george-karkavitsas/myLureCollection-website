$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$projectRoot = Split-Path -Parent $PSScriptRoot
$imageDirectory = Join-Path $projectRoot 'assets\images'
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
foreach ($name in @('coastal-rocks', 'fishing-boats')) {
    $source = [System.Drawing.Image]::FromFile((Join-Path $imageDirectory ($name + '.jpg')))
    try {
        $width = 2560
        $height = [int][Math]::Round($source.Height * $width / $source.Width)
        $bitmap = New-Object System.Drawing.Bitmap($width, $height)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
        try {
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.DrawImage($source, 0, 0, $width, $height)
            $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]90)
            $bitmap.Save((Join-Path $imageDirectory ($name + '-web.jpg')), $encoder, $parameters)
        } finally { $parameters.Dispose(); $graphics.Dispose(); $bitmap.Dispose() }
    } finally { $source.Dispose() }
}

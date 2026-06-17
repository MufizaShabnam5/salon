param (
    [string]$InputPath,
    [string]$OutputPath,
    [int]$Threshold = 230
)

try {
    Add-Type -AssemblyName System.Drawing
    
    $srcBmp = New-Object System.Drawing.Bitmap($InputPath)
    $width = $srcBmp.Width
    $height = $srcBmp.Height
    
    $destBmp = New-Object System.Drawing.Bitmap($width, $height)
    
    for ($x = 0; $x -lt $width; $x++) {
        for ($y = 0; $y -lt $height; $y++) {
            $pixel = $srcBmp.GetPixel($x, $y)
            $r = $pixel.R
            $g = $pixel.G
            $b = $pixel.B
            
            # Simple thresholding: if R, G, B are all high, it's white
            if ($r -gt $Threshold -and $g -gt $Threshold -and $b -gt $Threshold) {
                # Transparent
                $newColor = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
            } else {
                $newColor = [System.Drawing.Color]::FromArgb($pixel.A, $r, $g, $b)
            }
            
            $destBmp.SetPixel($x, $y, $newColor)
        }
    }
    
    $destBmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $srcBmp.Dispose()
    $destBmp.Dispose()
    Write-Output "Success: White background made transparent."
} catch {
    Write-Error $_.Exception.Message
}

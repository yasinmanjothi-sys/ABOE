import AVFoundation
import Foundation
import CoreImage

let arguments = CommandLine.arguments
if arguments.count < 3 {
    print("Usage: extract.swift <video_path> <output_dir>")
    exit(1)
}

let videoPath = arguments[1]
let outputDir = arguments[2]

let url = URL(fileURLWithPath: videoPath)
let asset = AVURLAsset(url: url)
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true

// Since we are loading properties synchronously, we can just do:
let duration = CMTimeGetSeconds(asset.duration)

if duration.isNaN {
    print("Could not determine duration")
    exit(1)
}

// Extract 10 frames
let numFrames = 10
let step = duration / Double(numFrames)

for i in 0..<numFrames {
    let time = CMTime(seconds: Double(i) * step, preferredTimescale: 600)
    do {
        let cgImage = try generator.copyCGImage(at: time, actualTime: nil)
        let context = CIContext()
        let ciImage = CIImage(cgImage: cgImage)
        
        // Save as jpeg
        if let colorSpace = cgImage.colorSpace {
            let outURL = URL(fileURLWithPath: "\(outputDir)/frame_\(i).jpg")
            try context.writeJPEGRepresentation(of: ciImage, to: outURL, colorSpace: colorSpace, options: [:])
            print("Extracted frame_\(i).jpg")
        }
    } catch {
        print("Error extracting frame \(i): \(error)")
    }
}

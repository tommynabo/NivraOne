import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '../lib/utils';

interface DriveVideoPlayerProps {
    videoId: string;
    thumbnailUrl?: string;
    className?: string;
}

export const DriveVideoPlayer: React.FC<DriveVideoPlayerProps> = ({
    videoId,
    thumbnailUrl,
    className
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // If no thumbnail provided, use specific placeholder logic or default
    // For VSL: /vsl-thumbnail.png
    // For others: picsum or passed prop
    const finalThumbnail = thumbnailUrl || "/vsl-thumbnail.png";

    const handleMouseEnter = () => {
        if (!isPlaying) {
            setIsHovered(true);
        }
    };

    return (
        <div
            className={cn("relative w-full h-full bg-slate-900 overflow-hidden", className)}
            onMouseEnter={handleMouseEnter}
        >
            {/* Thumbnail & Play Stickiness */}
            <div
                className={cn(
                    "absolute inset-0 z-10 w-full h-full transition-opacity duration-500",
                    isPlaying ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer group"
                )}
                onClick={() => setIsPlaying(true)}
            >
                <img
                    src={finalThumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl animate-pulse"></div>
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Iframe (Preloaded on hover, revealed on click) */}
            {(isHovered || isPlaying) && (
                <iframe
                    src={`https://drive.google.com/file/d/${videoId}/preview?autoplay=1`}
                    className={cn(
                        "absolute inset-0 w-full h-full border-0 transition-opacity duration-500",
                        isPlaying ? "z-20 opacity-100" : "z-0 opacity-0"
                    )}
                    allow="autoplay; fullscreen"
                    title="Video Player"
                ></iframe>
            )}
        </div>
    );
};

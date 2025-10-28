// components/VideoModal.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { HiX } from "react-icons/hi";

export default function VideoModal({ open, onClose, poster, sources = [] }) {
  const videoRef = useRef(null);
  const [quality, setQuality] = useState(() => (sources && sources[0]?.label) || "");
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Keep quality in sync when sources change
  useEffect(() => {
    setQuality((sources && sources[0]?.label) || "");
  }, [sources]);

  // Main video initialization effect
  useEffect(() => {
    if (!open) return;
    
    const video = videoRef.current;
    if (!video) return;
    if (!sources || sources.length === 0) return;

    // Reset error state
    setHasError(false);

    const selected = sources.find((s) => s.label === quality) || sources[0];
    
    // Only load video when modal opens (lazy loading)
    video.src = selected.src;
    video.load();

    // Event handlers
    const onWaiting = () => setIsBuffering(true);
    const onCanPlay = () => setIsBuffering(false);
    const onPlaying = () => setIsBuffering(false);
    const onError = (e) => {
      console.error("Video error:", e);
      setHasError(true);
      setIsBuffering(false);
    };

    // Add event listeners
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("error", onError);

    // Attempt autoplay after user interaction (modal open)
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Autoplay blocked - user needs to click play
        console.warn("Autoplay prevented:", err.message);
      });
    }

    return () => {
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("error", onError);
    };
  }, [open, sources, quality]);

  const handleQualityChange = (q) => {
    const video = videoRef.current;
    const selected = (sources || []).find((s) => s.label === q);
    if (!video || !selected) return;

    const currentTime = video.currentTime || 0;
    const wasPlaying = !video.paused;

    setQuality(q);
    video.pause();
    video.src = selected.src;
    video.load();

    // Restore playback position
    video.addEventListener("loadedmetadata", function onLoaded() {
      try {
        video.currentTime = Math.max(0, currentTime - 0.5);
        if (wasPlaying) {
          video.play().catch(() => {});
        }
      } catch (err) {
        console.warn("Could not restore playback position:", err);
      }
      video.removeEventListener("loadedmetadata", onLoaded);
    });
  };

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"  aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-label="Close modal"/>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-xl mx-4 aspect-square">
        <div className="bg-[#0b0b0b] overflow-hidden shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <strong className="text-white text-sm">Quality:</strong>
              <select
                value={quality}
                onChange={(e) => handleQualityChange(e.target.value)}
                className="bg-black text-white px-3 py-1.5 border border-neutral-700 hover:border-neutral-600 focus:outline-none focus:border-neutral-500 cursor-pointer"
                aria-label="Select video quality"
              >
                {(sources || []).map((s) => (
                  <option key={s.label} value={s.label}>
                    {s.label}p
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={onClose}
              className="text-white p-1.5 hover:bg-white/10 transition-colors"
              aria-label="Close video modal"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              controls
              poster={poster}
              className="w-full h-auto max-h-[75vh] bg-black"
              playsInline
              preload="metadata" // Only load metadata initially
              controlsList="nodownload" // Optional: prevent download
            >
              {/* Sources are loaded dynamically via src attribute for better performance */}
              Your browser does not support the video tag.
            </video>

            {/* Buffering Indicator */}
            {isBuffering && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="text-white text-sm">Buffering...</span>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="text-center px-4">
                  <p className="text-white text-lg mb-2">Unable to load video</p>
                  <p className="text-gray-400 text-sm mb-4">Please try a different quality or refresh the page</p>
                  <button
                    onClick={() => {
                      setHasError(false);
                      const video = videoRef.current;
                      if (video) {
                        video.load();
                      }
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
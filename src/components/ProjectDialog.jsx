"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectDialog = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState("h-[400px]");
  const [imageLoaded, setImageLoaded] = useState(false); // Added loading state

  const nextImage = () => {
    setImageLoaded(false); // Reset loading state
    setCurrentImageIndex(
      (prev) => (prev + 1) % (project?.screenshots?.length || 1)
    );
  };

  const prevImage = () => {
    setImageLoaded(false); // Reset loading state
    const totalImages = project?.screenshots?.length || 1;
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleImageLoad = (e) => {
    const img = e.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    if (aspectRatio < 0.8) {
      setImageHeight("h-[500px] md:h-[600px]");
    } else if (aspectRatio > 1.5) {
      setImageHeight("h-[300px] md:h-[400px]");
    } else {
      setImageHeight("h-[400px] md:h-[450px]");
    }

    setImageLoaded(true); // Mark as loaded
  };

  // Reset states when image changes
  useEffect(() => {
    setImageHeight("h-[400px]");
    setImageLoaded(false); // Reset loading state
  }, [currentImageIndex]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setImageLoaded(false); // Reset loading state
  }, [project]);

  // Disable body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!project) return null;

  const images = project.screenshots || [project.image];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // Faster transition
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 mt-16"
            onClick={onClose}
          >
            {/* Dialog */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} // Reduced initial scale for smoother animation
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }} // Simplified easing
              className="bg-tertiary rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>

              {/* Project Title */}
              <h2 className="text-white font-bold text-3xl mb-6 pr-12">
                {project.name}
              </h2>

              <div className="relative mb-6">
                <div
                  className={`relative ${imageHeight} rounded-2xl overflow-hidden transition-all duration-300 ease-in-out bg-gray-900/20`}
                >
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                  )}

                  <img
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                    className={`w-full h-full object-contain rounded-2xl transition-opacity duration-200 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={handleImageLoad}
                    loading="eager" // Load dialog images immediately
                  />

                  {/* Navigation Arrows - only show when image is loaded */}
                  {images.length > 1 && imageLoaded && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Previous image"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Next image"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {images.length > 1 && imageLoaded && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-3">
                  Description
                </h3>
                <p className="text-secondary text-[16px] leading-7">
                  {project.detailedDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

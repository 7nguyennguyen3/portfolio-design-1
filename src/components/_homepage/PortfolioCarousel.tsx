"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useId,
  useMemo, // Ensure useMemo is imported
} from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  MapPin,
  Trophy,
} from "lucide-react";

// --- Interfaces ---
interface PortfolioImage {
  id: string | number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PortfolioCarouselProps {
  items?: PortfolioImage[];
  numVisibleItems?: number;
  itemGapRem?: number;
  showNavigationButtons?: boolean;
  dragEnabled?: boolean;
  imageHeightClass?: string;
  emptyStateContent?: React.ReactNode;
  emptyStateMessage?: string;
  animationConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  carouselLabel?: string;
  loop?: boolean;
  responsiveItemsConfig?: {
    sm: number;
    md: number;
  };
  carouselTitle?: string;
  CarouselIcon?: React.ElementType;
}

// --- Default Values ---
const EXAMPLE_PORTFOLIO_ITEMS: PortfolioImage[] = [
  {
    id: "item1",
    src: "/grand-canyon.jpg",
    alt: "A breathtaking view of the Grand Canyon's vast landscape at sunset.",

    description:
      "Visited the Grand Canyon, and the views were absolutely breathtaking. It was a lot of fun exploring.",
  },
  {
    id: "item2",
    src: "/singapore.jpg",
    alt: "The modern skyline of Singapore featuring the iconic Marina Bay Sands.",
    description:
      "Singapore was so clean and modern. The food at the hawker centers was a highlight, definitely a fun visit.",
  },
  {
    id: "item3",
    src: "/bangkok.jpg",
    alt: "Ornate golden temples of Bangkok shining under a clear blue sky.",
    description:
      "Exploring Bangkok was an adventure. The temples were beautiful and the city had so much energy. Really enjoyed it!",
  },
  {
    id: "item4",
    src: "/vietnam.jpg",
    alt: "Lush green rice paddies terraced along the hillsides of Vietnam.",
    description:
      "I visited Vietnam and the street food was incredible! Such a fun trip with amazing culture.",
  },
  {
    id: "item5",
    src: "/tokyo.jpg",
    alt: "The iconic Shibuya Crossing in Tokyo bustling with pedestrians at night.",
    description:
      "Loved my visit to Tokyo! The mix of old and new is fascinating, and the sushi was out of this world. So much fun.",
  },
];

const DEFAULT_NUM_VISIBLE_ITEMS = 3;
const DEFAULT_ITEM_GAP_REM = 1.5;
const DEFAULT_ANIMATION_CONFIG = { stiffness: 300, damping: 30, mass: 1 };
const DEFAULT_CAROUSEL_LABEL = "Portfolio Highlights";
const DEFAULT_EMPTY_STATE_MESSAGE =
  "No portfolio items to display at the moment.";
const DEFAULT_IMAGE_HEIGHT_CLASS = "h-56 md:h-64";
const DEFAULT_RESPONSIVE_ITEMS_CONFIG = {
  sm: 1,
  md: 2,
};
const DEFAULT_CAROUSEL_TITLE = "Places I've Been To";
const DefaultCarouselIconComponent = MapPin; // Default Icon

// --- Component ---
const PortfolioCarousel: React.FC<PortfolioCarouselProps> = (props) => {
  const {
    items = EXAMPLE_PORTFOLIO_ITEMS,
    numVisibleItems = DEFAULT_NUM_VISIBLE_ITEMS,
    itemGapRem = DEFAULT_ITEM_GAP_REM,
    showNavigationButtons = true,
    dragEnabled = true,
    imageHeightClass = DEFAULT_IMAGE_HEIGHT_CLASS,
    emptyStateContent,
    emptyStateMessage = DEFAULT_EMPTY_STATE_MESSAGE,
    animationConfig: propAnimationConfig, // Renamed to avoid conflict
    carouselLabel = DEFAULT_CAROUSEL_LABEL,
    loop = true,
    responsiveItemsConfig = DEFAULT_RESPONSIVE_ITEMS_CONFIG,
    carouselTitle = DEFAULT_CAROUSEL_TITLE,
    CarouselIcon = DefaultCarouselIconComponent,
  } = props;

  // Memoize animationSettings to prevent re-creation on every render
  const animationSettings = useMemo(() => {
    return {
      ...DEFAULT_ANIMATION_CONFIG,
      ...propAnimationConfig, // Spread any custom animation config from props
    };
  }, [propAnimationConfig]); // Dependency: only re-calculate if propAnimationConfig changes

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [gapInPx, setGapInPx] = useState(0);
  // State for the actual number of visible items based on screen size
  const [currentActualNumVisibleItems, setCurrentActualNumVisibleItems] =
    useState(numVisibleItems);

  const carouselViewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); // Motion value for controlling the horizontal position
  const componentId = useId(); // Generate a unique ID for ARIA attributes
  const stripId = `${componentId}-strip`; // Unique ID for the motion div (slide strip)

  // Effect to handle responsive number of visible items
  useEffect(() => {
    const getResponsiveNumItems = () => {
      if (typeof window !== "undefined") {
        const screenWidth = window.innerWidth;
        const maxItems = items.length > 0 ? items.length : 1;

        if (screenWidth < 768) {
          // Small screens (e.g., mobile)
          return Math.min(responsiveItemsConfig.sm, maxItems);
        }
        if (screenWidth < 1024) {
          // Medium screens (e.g., tablet)
          // Use the smaller of responsive.md, prop numVisibleItems, or actual items.length
          return Math.min(responsiveItemsConfig.md, numVisibleItems, maxItems);
        }
      }
      // Default to numVisibleItems prop for larger screens or if window is undefined
      return Math.min(numVisibleItems, items.length > 0 ? items.length : 1);
    };

    const handleResize = () => {
      setCurrentActualNumVisibleItems(getResponsiveNumItems());
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150); // Debounce resize handling
    };

    handleResize(); // Initial call
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, [numVisibleItems, responsiveItemsConfig, items.length]); // Re-run if these props change

  // Effect to calculate item width and gap in pixels when visible items or gap changes
  useEffect(() => {
    const viewport = carouselViewportRef.current;
    // Ensure currentActualNumVisibleItems is at least 1 to avoid division by zero
    const safeNumVisible = Math.max(1, currentActualNumVisibleItems);

    if (!viewport || !document.documentElement || safeNumVisible === 0) return;

    const calculateDimensions = () => {
      // Get root font size to convert rem to px
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const calculatedGapInPx = itemGapRem * rootFontSize;
      setGapInPx(calculatedGapInPx);

      const containerClientWidth = viewport.clientWidth;
      // Calculate total space taken by gaps
      const totalGapSpace = Math.max(0, safeNumVisible - 1) * calculatedGapInPx;
      // Calculate width per item
      const widthPerItem = Math.max(
        0,
        (containerClientWidth - totalGapSpace) / safeNumVisible
      );
      setItemWidth(widthPerItem);
    };

    calculateDimensions(); // Initial calculation
    // Optional: could add a resize observer here for more precise updates if viewport itself resizes independent of window
  }, [currentActualNumVisibleItems, itemGapRem, items]); // Re-run if visible items, gap, or items list change

  // Determine the effective number of visible items, ensuring it's not more than available items
  const effectiveNumVisible =
    items.length > 0 ? Math.min(currentActualNumVisibleItems, items.length) : 1;
  // Calculate the maximum possible index based on items and visible count
  const maxIndex =
    items.length > 0 ? Math.max(0, items.length - effectiveNumVisible) : 0;
  // Actual last index of the items array
  const lastItemActualIndex = items.length - 1;

  // Effect to animate the carousel to the current index
  useEffect(() => {
    if (itemWidth > 0 && items.length > 0 && effectiveNumVisible > 0) {
      let targetX = -currentIndex * (itemWidth + gapInPx);
      let newCurrentIndex = currentIndex;

      // If current index is out of bounds (e.g., after resize makes fewer items visible), adjust it
      if (currentIndex > maxIndex) {
        newCurrentIndex = maxIndex;
        setCurrentIndex(maxIndex); // Adjust state
        targetX = -newCurrentIndex * (itemWidth + gapInPx); // Recalculate targetX for animation
      }
      // Animate the x motion value
      animate(x, targetX, { type: "spring", ...animationSettings });
    } else if (items.length === 0) {
      // If no items, reset position to 0
      animate(x, 0, { type: "spring", ...animationSettings });
    }
  }, [
    currentIndex,
    itemWidth,
    gapInPx,
    x,
    animationSettings, // Now a memoized, stable dependency
    items.length,
    maxIndex,
    effectiveNumVisible,
  ]);

  // Callback for handling previous button click
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        // If looping, go to the last possible page from the beginning
        return prev === 0
          ? Math.max(0, lastItemActualIndex - effectiveNumVisible + 1) // Calculate last page start index
          : prev - 1;
      }
      // If not looping, just go to previous or stay at 0
      return Math.max(0, prev - 1);
    });
  }, [loop, lastItemActualIndex, effectiveNumVisible]);

  // Callback for handling next button click
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        // If looping, go to the first page from the end
        return prev >= maxIndex ? 0 : prev + 1;
      }
      // If not looping, just go to next or stay at maxIndex
      return Math.min(maxIndex, prev + 1);
    });
  }, [loop, maxIndex]);

  // Callback for drag end event
  const onDragEndMotion = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo // PanInfo contains offset and velocity
  ) => {
    if (
      !dragEnabled ||
      itemWidth === 0 ||
      items.length === 0 ||
      (!loop && items.length <= effectiveNumVisible) // No drag if not enough items and not looping
    )
      return;

    const effectiveItemWidthWithGap = itemWidth + gapInPx;
    if (effectiveItemWidthWithGap === 0) return; // Avoid division by zero

    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipeThreshold = effectiveItemWidthWithGap / 2; // Threshold to trigger a swipe
    // Project offset based on velocity to make swipes feel more natural
    const projectedOffset = offset + velocity * 0.15;
    let movedByItems = 0;

    // Determine how many items to move based on swipe distance
    if (Math.abs(projectedOffset) > swipeThreshold) {
      movedByItems =
        -Math.sign(projectedOffset) * // Direction of swipe
        Math.max(
          1, // Move at least 1 item
          Math.round(Math.abs(projectedOffset) / effectiveItemWidthWithGap) // Number of items based on distance
        );
    }

    let newIndex = currentIndex + movedByItems;

    if (loop) {
      if (movedByItems !== 0) {
        // Only adjust index if there was a swipe
        if (newIndex < 0) {
          // Handle looping backwards
          newIndex = (items.length + (newIndex % items.length)) % items.length;
          // Ensure it doesn't go beyond the last "page" when looping from start
          newIndex = Math.min(
            newIndex,
            Math.max(0, lastItemActualIndex - effectiveNumVisible + 1)
          );
          if (items.length <= effectiveNumVisible) newIndex = 0; // If all items visible, stay at 0
        } else if (
          newIndex >= items.length || // Swiped past the end
          (newIndex > maxIndex && movedByItems > 0) // Swiped past maxIndex while moving forward
        ) {
          // Handle looping forwards
          newIndex = newIndex % items.length;
          if (newIndex > maxIndex && items.length > effectiveNumVisible)
            newIndex = 0; // Loop to start
          else if (items.length <= effectiveNumVisible) newIndex = 0; // If all items visible, stay at 0
        }
        // Final clamp if looping but still within a "page" concept
        if (newIndex > maxIndex && items.length > effectiveNumVisible)
          newIndex = maxIndex;
      } else {
        // If no swipe, animate back to current position
        const targetX = -currentIndex * (itemWidth + gapInPx);
        animate(x, targetX, { type: "spring", ...animationSettings });
        return;
      }
    } else {
      // If not looping, clamp the new index within bounds
      newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    }
    setCurrentIndex(newIndex);
  };

  // Callback for keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!loop && items.length <= effectiveNumVisible) return; // No keyboard nav if not enough items and not looping

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext, items.length, effectiveNumVisible, loop]
  );

  // Callback for dot indicator click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Determine if navigation controls (buttons, dots) should be shown
  const canShowControls = loop || items.length > effectiveNumVisible;
  const displayPrevButton =
    showNavigationButtons && canShowControls && (loop || currentIndex > 0);
  const displayNextButton =
    showNavigationButtons &&
    canShowControls &&
    (loop || currentIndex < maxIndex);

  const numDots = maxIndex + 1; // Number of dots for pagination

  // --- Render Empty State ---
  if (items.length === 0) {
    return emptyStateContent !== undefined ? (
      <>{emptyStateContent}</> // Custom empty state
    ) : (
      // Default empty state
      <section className="bg-white dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200 selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            {carouselTitle && (
              <h2 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2.5">
                {CarouselIcon && (
                  <CarouselIcon
                    size={28}
                    className="text-blue-600 dark:text-blue-400 shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span>{carouselTitle}</span>
              </h2>
            )}
          </div>
          <div
            className="flex flex-col items-center justify-center h-72 md:h-80 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8"
            role="region"
            aria-label={carouselLabel} // Label for the empty state region
          >
            <ImageIcon
              size={40}
              className="text-gray-400 dark:text-gray-500 mb-4"
              aria-hidden="true"
            />
            <p className="text-gray-600 dark:text-gray-400 font-light text-lg">
              {emptyStateMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // --- Render Carousel ---
  return (
    <section
      className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 font-sans text-gray-800 dark:text-gray-200 selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200 py-16 md:py-20"
      role="region" // ARIA role for the section
      aria-roledescription="carousel" // Describes the role of this region
      aria-label={carouselLabel} // Accessible name for the carousel
      onKeyDown={canShowControls ? handleKeyDown : undefined} // Enable keyboard nav if controls are shown
      tabIndex={canShowControls ? 0 : -1} // Make carousel container focusable for keyboard navigation
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Carousel Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <CarouselIcon
              size={32}
              className="text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {carouselTitle} {/* Use the prop for title */}
          </h2>
          {/* Optional: Add a subtitle here if needed */}
        </div>

        {/* Carousel Body */}
        <div className="relative group">
          {" "}
          {/* Group for button visibility on hover */}
          <div ref={carouselViewportRef} className="overflow-hidden">
            <motion.div
              id={stripId} // ID for ARIA controls
              className="flex" // Flex container for items
              style={{
                x, // Bind to motion value
                cursor: dragEnabled && canShowControls ? "grab" : "default",
                gap: `${itemGapRem}rem`, // Set gap between items
              }}
              drag={dragEnabled && canShowControls ? "x" : false} // Enable dragging only if conditions met
              dragConstraints={
                canShowControls && !loop
                  ? {
                      // Constrain drag if not looping
                      left: -maxIndex * (itemWidth + gapInPx),
                      right: 0,
                    }
                  : canShowControls && loop // Allow free drag if looping (logic handles wrap)
                  ? undefined // No constraints for free looping drag
                  : { left: 0, right: 0 } // No drag if not enough items or drag disabled
              }
              onDragEnd={onDragEndMotion}
              whileTap={
                dragEnabled && canShowControls ? { cursor: "grabbing" } : {}
              }
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id || index} // Unique key for each item
                  role="group" // Each item is a slide group
                  aria-roledescription="slide"
                  aria-label={item.title || `Portfolio Item ${index + 1}`} // Accessible label for slide
                  className="flex-shrink-0" // Prevent items from shrinking
                  style={{
                    width:
                      itemWidth > 0
                        ? itemWidth // Calculated item width
                        : `calc(100% / ${Math.max(1, effectiveNumVisible)})`, // Fallback width
                  }}
                >
                  {/* Card styling applied here */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`relative w-full ${imageHeightClass} overflow-hidden group/imglink`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover/imglink:scale-105"
                        loading="lazy" // Lazy load images
                        onError={(e) => {
                          // Basic image error handling
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/600x400/e2e8f0/94a3b8?text=Not+Found`; // Placeholder
                          target.alt = "Image not found";
                        }}
                      />
                    </div>
                    {(item.title || item.description) && ( // Show content area if title or description exists
                      <div className="p-4 flex-grow flex flex-col">
                        {item.title && (
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1.5 truncate">
                            {item.title}
                          </h3>
                        )}
                        {item.description && (
                          <p className="text-sm font-light text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 sm:line-clamp-4">
                            {item.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Navigation Buttons */}
          {displayPrevButton && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-500 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 ml-2 sm:ml-3 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Previous slide"
              aria-controls={stripId} // Controls the motion div
            >
              <ChevronLeft
                size={20}
                className="text-gray-600 dark:text-gray-300"
              />
            </button>
          )}
          {displayNextButton && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-500 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 mr-2 sm:mr-3 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Next slide"
              aria-controls={stripId} // Controls the motion div
            >
              <ChevronRight
                size={20}
                className="text-gray-600 dark:text-gray-300"
              />
            </button>
          )}
        </div>

        {/* Dot Indicators */}
        {canShowControls &&
          items.length > 0 &&
          numDots > 1 && ( // Only show dots if more than one page/slide
            <div
              className="flex justify-center items-center space-x-2 mt-8 md:mt-10"
              role="tablist" // ARIA role for dot container
              aria-label="Carousel slide indicators"
            >
              {Array.from({ length: numDots }).map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-blue-500 ${
                    currentIndex === index
                      ? "bg-blue-600 dark:bg-blue-400 scale-110" // Active dot
                      : "bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400" // Inactive dot
                  }`}
                  aria-selected={currentIndex === index} // Indicates active dot
                  aria-label={`Go to slide ${index + 1}`}
                  role="tab" // ARIA role for each dot
                  aria-controls={stripId} // Controls the motion div
                />
              ))}
            </div>
          )}
      </div>
    </section>
  );
};

export default PortfolioCarousel;

"use client";

import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function AnimateOnScroll({ children, delay = 0, className = "" }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isMobile = globalThis.window.matchMedia('(max-width: 767px)').matches;

        if (isMobile) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
          return;
        }

        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`section-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

AnimateOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
};

export default AnimateOnScroll;

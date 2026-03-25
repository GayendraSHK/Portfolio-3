"use client";

import { useEffect, useRef } from "react";

export default function MousePointerEffect() {
  const coreRef = useRef(null);
  const trailRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const core = coreRef.current;
    const trail = trailRef.current;
    const aura = auraRef.current;

    if (!core || !trail || !aura) {
      return undefined;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;
    let auraX = mouseX;
    let auraY = mouseY;
    let velocityX = 0;
    let velocityY = 0;
    let frameId = 0;
    let visible = false;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const trailFollow = reducedMotion ? 1 : 0.24;
    const auraFollow = reducedMotion ? 1 : 0.11;

    const animate = () => {
      const prevTrailX = trailX;
      const prevTrailY = trailY;

      trailX += (mouseX - trailX) * trailFollow;
      trailY += (mouseY - trailY) * trailFollow;
      auraX += (mouseX - auraX) * auraFollow;
      auraY += (mouseY - auraY) * auraFollow;

      velocityX = trailX - prevTrailX;
      velocityY = trailY - prevTrailY;
      const stretch = Math.min(Math.hypot(velocityX, velocityY) * 1.6, 1.8);
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      core.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${1 + stretch}, ${1 - Math.min(stretch * 0.28, 0.35)})`;
      aura.style.transform = `translate3d(${auraX}px, ${auraY}px, 0) translate(-50%, -50%)`;

      const opacity = visible ? "1" : "0";
      core.style.opacity = opacity;
      trail.style.opacity = opacity;
      aura.style.opacity = opacity;

      frameId = window.requestAnimationFrame(animate);
    };

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      visible = true;
    };

    const hide = () => {
      visible = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <>
      <div
        ref={auraRef}
        className="pointer-events-none fixed left-0 top-0 z-[68] h-16 w-16 rounded-full opacity-0 transition-opacity duration-300 bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(45,212,191,0.08)_45%,rgba(56,189,248,0)_72%)]"
      />
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[69] h-3.5 w-3.5 rounded-full bg-sky-300/70 opacity-0 shadow-[0_0_26px_rgba(56,189,248,0.65)] transition-opacity duration-200"
      />
      <div
        ref={coreRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-2.5 w-2.5 rounded-full bg-teal-200 opacity-0 shadow-[0_0_16px_rgba(45,212,191,0.95)] transition-opacity duration-150"
      />
    </>
  );
}

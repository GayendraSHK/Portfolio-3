'use client';

import { useEffect, useState } from 'react';

export function RotatingText({ roles }) {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = `I'm ${roles[currentRole]}.`;
    const speed = isDeleting ? 50 : 100; // Faster deletion

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next role
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, roles]);

  return (
    <span className="block text-sky-300">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

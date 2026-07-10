'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export function RotatingText({ roles }) {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[currentRole] ?? '';
    const speed = isDeleting ? 50 : 100; // Faster deletion
    let timerId;
    let pauseTimerId;

    if (isDeleting) {
      if (displayedRole.length > 0) {
        timerId = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, speed);
      } else {
        timerId = setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsDeleting(false);
        }, speed);
      }
    } else if (displayedRole.length < fullRole.length) {
      timerId = setTimeout(() => {
        setDisplayedRole(fullRole.slice(0, displayedRole.length + 1));
      }, speed);
    } else {
      pauseTimerId = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }

      if (pauseTimerId) {
        clearTimeout(pauseTimerId);
      }
    };
  }, [displayedRole, isDeleting, currentRole, roles]);

  return (
    <span className="block text-sky-300">
      I&apos;m {displayedRole}
      <span className="animate-pulse">|</span>
    </span>
  );
}

RotatingText.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

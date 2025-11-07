import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// A custom developer-themed cursor with a glow ring and a small core dot.
// Hides on touch devices and when the pointer leaves the window.
const DevCursor = () => {
  const [visible, setVisible] = useState(true);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smooth springy follow for ring; dot sticks a bit closer.
  const ringX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });
  const dotX = useSpring(x, { stiffness: 500, damping: 30, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 500, damping: 30, mass: 0.2 });

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) {
      setVisible(false);
      return;
    }

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);
    const handleDown = () => setIsPointerDown(true);
    const handleUp = () => setIsPointerDown(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerenter', handleEnter);
    window.addEventListener('pointerleave', handleLeave);
    window.addEventListener('pointerdown', handleDown);
    window.addEventListener('pointerup', handleUp);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerenter', handleEnter);
      window.removeEventListener('pointerleave', handleLeave);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen">
      {/* Glow ring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ left: ringX, top: ringY }}
        animate={{
          boxShadow: isPointerDown
            ? '0 0 40px rgba(56,189,248,0.55), 0 0 80px rgba(168,85,247,0.35)'
            : '0 0 24px rgba(56,189,248,0.45), 0 0 48px rgba(168,85,247,0.25)'
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div
          className={`h-12 w-12 rounded-full border ${
            isPointerDown ? 'border-cyan-300/70' : 'border-cyan-300/40'
          } bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10 backdrop-blur-[2px]`}
        />
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: dotX, top: dotY }}
      >
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            isPointerDown ? 'bg-cyan-300' : 'bg-cyan-200'
          } shadow-[0_0_12px_rgba(34,211,238,0.8)]`}
        />
      </motion.div>
    </div>
  );
};

export default DevCursor;

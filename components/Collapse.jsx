import React, { forwardRef } from 'react';
import AnimateHeight from 'react-animate-height';

const Collapse = forwardRef(
  (
    {
      isOpen,
      animateOpacity = true,
      onAnimationStart,
      onAnimationEnd,
      duration,
      easing = 'ease',
      startingHeight = 0,
      endingHeight = 'auto',
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <AnimateHeight
        duration={duration}
        easing={easing}
        animateOpacity={animateOpacity}
        height={isOpen ? endingHeight : startingHeight}
        applyInlineTransitions={false}
        onAnimationStart={onAnimationStart}
        onAnimationEnd={onAnimationEnd}
        style={{
          transition: 'height .3s ease,opacity .3s ease-in-out,transform .3s ease-in-out',
          backfaceVisibility: 'hidden',
        }}
      >
        <div ref={ref} {...rest}>
          {children}
        </div>
      </AnimateHeight>
    );
  },
);

export default Collapse;
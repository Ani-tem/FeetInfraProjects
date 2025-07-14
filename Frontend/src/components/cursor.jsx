import React, { useEffect } from 'react';

const FuturisticCursor = () => {
  useEffect(() => {
    // Apply custom cursor to body when component mounts
    document.body.style.cursor = 'url(http://www.rw-designer.com/cursor-extern.php?id=20546), auto';

    // Optional cleanup: reset cursor when component unmounts
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return null; // No visual element needed
};

export default FuturisticCursor;

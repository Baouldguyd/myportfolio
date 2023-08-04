import React, { useState } from 'react';
import './HideShowText.css'; // Import CSS file for animation (create this file separately)

const HideShowText = () => {
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Text</button>
      {isShown && (
        <p className={`hide-show-text ${isShown ? 'slide-down' : ''}`}>
          Your text goes here
        </p>
      )}
    </div>
  );
};

export default HideShowText;

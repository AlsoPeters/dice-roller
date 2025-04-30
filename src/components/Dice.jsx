import React, {useState} from 'react';


const Dice = ({ value = 1 }) => {

  
  const renderDots = (value) => {
    const dots = [];
    
    const dotPositions = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [25, 75], [75, 25], [75, 75]],
      5: [[25, 25], [25, 75], [50, 50], [75, 25], [75, 75]],
      6: [[25, 25], [25, 50], [25, 75], [75, 25], [75, 50], [75, 75]],
    };

    (dotPositions[value] || []).forEach(([cx, cy]) => {
      dots.push(<circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8" fill="black" />);
    });
    return dots;
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="white" stroke="black" strokeWidth="5">
      <rect width="100" height="100" rx="15" ry="15" fill="white" />
      {renderDots(value)}
    </svg>
  );
};

export default Dice;

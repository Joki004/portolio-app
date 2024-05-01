import React from 'react';
import './progressBar.css'; 
import { useElements } from "../../../utils/functions/context";
export const ProgressBar = ({ progress,color,level }) => {

  const { mainColor} = useElements();
  const fillerStyles = {
    width: `${progress}%`,
    backgroundColor: color, 
    height: '100%',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out', 
  };
  const labelStyles = {
    width: '100%',
    textAlign: 'center',
  };

  

  return (
    <div className="progress-bar" >
      <div className="progress-bar-filler" style={fillerStyles}>
        <span className="progress-bar-label" style={labelStyles}>{`${level}`}</span>
      </div>
    </div>
  );
};



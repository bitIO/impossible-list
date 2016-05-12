import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const ItemProgress = ({ percentage }) => {
  return (<div>
    <div>Progess: {percentage}% completed</div>
    <ProgressBar type="linear" mode="determinate" value={percentage}/>
  </div>);
};

export default ItemProgress;

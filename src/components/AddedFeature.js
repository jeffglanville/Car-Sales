import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>I do not want this feature</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

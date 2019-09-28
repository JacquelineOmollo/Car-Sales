import React from "react";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.feature} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     name: state.name,
//     buyItem: state.buyItem,
//     price: state.price
//   };
// };

export default AdditionalFeature;

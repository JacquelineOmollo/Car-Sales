import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "./components/actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const removeItem = item => {
    // dispatch an action here to remove an item
    return props.removeItem(item);
  };

  const buyItem = item => {
    /// dispatch an action here to add an item
    return props.buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "./components/actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const { state, addItem, removeItem } = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addItem={addItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(App);

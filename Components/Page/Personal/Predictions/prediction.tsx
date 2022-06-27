import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
function Prediction() {
  const { data, isLoading, error } = useSelector((state: RootState) => {
    return {
      isLoading: state.personal.isLoading,
      error: state.personal.error,
      data: state.personal.data,
    };
  });
  return <div>prediction</div>;
}

export default Prediction;

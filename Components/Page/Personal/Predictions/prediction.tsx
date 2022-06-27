import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import usePrediction from "../../../../Hooks/usePrediction";
function Prediction() {
  const { data, isLoading, error } = useSelector((state: RootState) => {
    return {
      isLoading: state.personal.isLoading,
      error: state.personal.error,
      data: state.personal.data,
    };
  });
  const {Predict}=usePrediction();
  useEffect(() => {
    if(data != null){
      Predict(data)
    }
  }, [isLoading])
  
  return <div>prediction</div>;
}

export default Prediction;

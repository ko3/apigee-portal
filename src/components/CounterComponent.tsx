import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter, setData } from "../store/Counter/CounterActions";
import { AppState } from "../store/Types";

const CouterComponent = () => {

    const count = useSelector((state: AppState) => state.counter.count);

    const dispatch = useDispatch();
    const incrementCounter = () => ()=>{
      dispatch(increaseCounter());
    };

    const decrementCounter = () => () => {
      dispatch(decreaseCounter());
    }
    
    const [data, setLocalData] = useState("");
    const udpateData = () => (e: React.ChangeEvent<HTMLInputElement>) => setLocalData(e.currentTarget.value);

    const dataState = useSelector((state: AppState) => state.counter.data);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(setData(data))
      setLocalData("");
    }

    return(
      <div>
          <div>Count: {count}</div>
          <button onClick={incrementCounter()}>Increase Count</button>
          <button onClick={decrementCounter()}>Decrease Count</button>
          <div>Form data: {dataState}</div>
          <form onSubmit={handleSubmit}>
              <input
                  placeholder="Enter here"
                  value={data}
                  onChange={udpateData()}
              />
          <button>Set</button>
          </form>
      </div>
    );
}

export default CouterComponent;
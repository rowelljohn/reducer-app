import "./styles.css";
import { useReducer } from "react";

export default function App() {
  //setup initial states
  const initialState = {
    count: 0
  };

  //create reducer()
  //where the logic to interact with states happens
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: action.payload };
      default:
        return 0;
    }
  };

  // console.log(useReducer());
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET", payload: 99 })}>
        RESET
      </button>
    </div>
  );
}

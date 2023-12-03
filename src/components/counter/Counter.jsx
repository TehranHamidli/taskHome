import { useReducer } from "react";
import Button from "react-bootstrap/Button";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    
      case 'decrement':
        return {count: state.count > 0 ? state.count - 1 : 0 }
  }
}

const initialCount = { count: 0 };

function Counter() {
  const [state, distpach] = useReducer(reducer, initialCount);
  return (
    <>
      <div className="d-flex justify-content-center mt-3 gap-5">
        <Button
          variant="outline-primary"
          onClick={() => distpach({ type: "increment" })}
        >
          +
        </Button>

        <h2>Counter: {state.count}</h2>
        <Button variant="outline-primary" onClick={()=> distpach({type:"decrement"})}>-</Button>
      </div>
    </>
  );
}

export default Counter;

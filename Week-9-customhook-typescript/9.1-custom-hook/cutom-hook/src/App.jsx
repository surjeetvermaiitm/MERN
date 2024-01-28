import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 3000);
  }, []);
  return (
    <>
      <MyComponentFunctional />
      <MyComponentClass />
      {render ? <MyComponentFuncionLifecycle /> : <div></div>}
    </>
  );
}

function MyComponentFuncionLifecycle() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("component mounted");
    console.error("component ounte");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted");
    };
  }, []);

  // Render UI
  return <div>Function life cycle</div>;
}

function MyComponentFunctional() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

class MyComponentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default App;

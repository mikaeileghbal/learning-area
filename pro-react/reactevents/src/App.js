import React, { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [message, setMessage] = useState("Ready");
  const [theme, setTheme] = useState("primary");

  const eventHandler = (event, theme) => {
    setMessage(`Event: ${event.type}`);
    setTheme(theme);
  };

  const mouseHandler = (event) => {
    if (event.type === "mousedown") {
      setMessage(`Down`);
    } else {
      setMessage(`Up`);
    }
  };

  useEffect(() => {
    console.log(message, " changed");
  }, [message]);

  return (
    <div className="m-2">
      <div className={`h4 bg-${theme} text-white text-center p-2`}>
        {message}
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={(e) => eventHandler(e, "primary")}
          onMouseDown={mouseHandler}
          onMouseUp={mouseHandler}
        >
          Normal
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={(e) => eventHandler(e, "danger")}
        >
          Danger
        </button>
      </div>
    </div>
  );
}

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Ready",
//     };

//     this.eventHandler = this.eventHandler.bind(this);
//   }

//   eventHandler() {
//     this.setState({ message: "Clicked!" });
//   }

//   render() {
//     return (
//       <div className="m-2">
//         <div className="h4 bg-primary text-white text-center p-2">
//           {this.state.message}
//         </div>
//         <div className="text-center">
//           <button
//             className="btn btn-primary"
//             //onClick={() => this.setState({ message: "Clicked!" })}
//             onClick={this.eventHandler}
//           >
//             Click Me
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

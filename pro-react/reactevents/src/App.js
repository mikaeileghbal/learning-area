import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [message, setMessage] = useState("Ready");

  const eventHandler = () => {
    setMessage("Clicked!");
  };

  return (
    <div className="m-2">
      <div className="h4 bg-primary text-white text-center p-2">{message}</div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          // onClick={() => setMessage("Clicked")}
          onClick={eventHandler}
        >
          Click Me
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
//             onClick={() => this.setState({ message: "Clicked!" })}
//           >
//             Click Me
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

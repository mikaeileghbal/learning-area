import "./App.css";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello react</h1>
      </header>
      <main className="app-main">
        <div className="component-container">
          <Welcome name="Sara" />
          <Welcome name="Joe" />
          <Welcome name="Smith" />
        </div>
        <div className="component-container">
          <Comment
            author={{ name: "Michael", avatarurl: "./images/male.png" }}
            text="new commen"
            date="2022"
          />
        </div>
      </main>
    </div>
  );
}

function Welcome(props) {
  return <h2>Hello, {props.name} </h2>;
}

export default App;

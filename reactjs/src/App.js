import "./App.css";
import Comment from "./components/Comment";
import ProductList from "./components/up-vote/ProductList";
import TimerDashboard from "./components/time-tracker/TimerDashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components</h1>
      </header>
      <main className="app-main">
        <div className="component-container">
          <h2 className="underline">Simple Hello</h2>
          <Welcome name="Sara" />
          <Welcome name="Joe" />
          <Welcome name="Smith" />
        </div>
        <div className="component-container">
          <h2 className="underline">Comment</h2>
          <Comment />
        </div>
        <div className="component-container">
          <h2 className="underline">Popular Products</h2>
          <div className="content">
            <ProductList />
          </div>
        </div>
        <div className="component-container">
          <h2 className="underline">Timer Tracker</h2>
          <TimerDashboard />
        </div>
      </main>
    </div>
  );
}

function Welcome(props) {
  return <h2>Hello, {props.name} </h2>;
}

export default App;

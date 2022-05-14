import "./App.css";
import React from "react";
import Comment from "./components/Comment";
import ProductList from "./components/up-vote/ProductList";
import TimerDashboard from "./components/time-tracker/TimerDashboard";
import BasicButtos from "./components/forms/BasicButtons";
import GitHubUser from "./components/fetch/GitHubUser";
import RenderProps from "./components/RenderProps/RenderProps";
import SignUp from "./components/forms/SignUp";
import Query from "./graphql/query";

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
        <div className="component-container">
          <h2 className="underline">Incorporating Data</h2>
          {/* <GetData login="mikaeieghbal" /> */}
        </div>
        <div className="component-container">
          <h2 className="underline">Render props</h2>
          <RenderProps />
        </div>
        <div className="component-container">
          <h2 className="underline">Basic Form</h2>
          <BasicButtos />
        </div>
        <div className="component-container">
          <h2 className="underline">Text Input</h2>
          <SignUp />
        </div>
        <div className="component-container">
          <h2 className="underline">Text Input</h2>
          <GitHubUser login="mikaeileghbal" />
        </div>
        <div className="component-container">
          <h2 className="underline">GraphQL</h2>
          <Query />
        </div>
      </main>
    </div>
  );
}

function Welcome(props) {
  return <h2>Hello, {props.name} </h2>;
}

export default App;

export function timesTwo() {}

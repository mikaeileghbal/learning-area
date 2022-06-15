import React, {
  Children,
  cloneElement,
  Component,
  createContext,
  useState,
} from "react";

const ProList = ProFeature(SpecializedList);
const ProListStatefull = ProConroller(SpecializedList);

const ProModeContext = createContext({ proMode: true });

export default function Composition() {
  const [counter, setCounter] = useState(0);
  const [proMode, setProMode] = useState(false);

  const names = ["Zoe", "Bob", "Alice", "Dora", "Joe"];
  const cities = ["London", "New York", "Paris", "Milan", "Boston"];

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const changeProMode = (e) => {
    setProMode(!proMode);
    console.log(proMode);
  };

  return (
    <div className="container text-center">
      <h1 className="bg-primary text-center text-white">Composition</h1>
      <div className="m-2 text-center">
        <ThemeSelector>
          <Message theme="primary" message={`Counter: ${counter}`} />
          <ActionButton
            text="Increment"
            theme="secondary"
            callback={incrementCounter}
          />
        </ThemeSelector>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 p-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={proMode}
                  onChange={changeProMode}
                />
                <label className="form-check-label">
                  Pro Mode with context
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <GeneralList list={names} theme="primary" />
            </div>
            <div className="col-3">
              <ProList pro={proMode} list={names} />
            </div>
            <div className="col-3">
              <SpecializedList list={names} />
            </div>
            <div className="col-3">
              <ProModeContext.Provider value={{ proMode }}>
                <ProListStatefull list={cities} />
              </ProModeContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ text, theme, callback }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (e) => {
    setClickCount(clickCount + 1);
    callback();
  };

  const getClasses = (proMode) => {
    let col = proMode ? theme : "danger";
    return `btn btn-${col} m-2`;
  };
  return (
    <ProModeContext.Consumer>
      {(contextData) => {
        if (clickCount > 1) {
          throw new Error("Click counter error");
        }
        return (
          <button
            className={getClasses(contextData.proMode)}
            onClick={handleClick}
            disabled={!contextData.proMode}
          >
            {text}
          </button>
        );
      }}
    </ProModeContext.Consumer>
  );
}

function Message({ theme, message }) {
  return <div className={`h5 bg-${theme} text-white p-2`}>{message}</div>;
}

function ThemeSelector({ children }) {
  const [theme, setTheme] = useState("primary");
  const [reverseChildren, setReverseChildren] = useState(false);

  const themes = ["primary", "secondary", "success", "warning", "dark"];

  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  const changeOrder = () => {
    setReverseChildren(!reverseChildren);
  };

  let modChildren = Children.map(children, (c) => {
    return cloneElement(c, { theme: theme });
  });

  if (reverseChildren) {
    modChildren.reverse();
  }

  return (
    <div className="bg-dark p-2">
      <button className={` btn btn-${theme}`} onClick={changeOrder}>
        Reverse
      </button>
      <div>
        <label>Theme:</label>
        <select value={theme} onChange={changeTheme}>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-info p-2">{modChildren}</div>
    </div>
  );
}

function GeneralList({ list, theme }) {
  return (
    <div className={`bg-${theme} text-white p-2`}>
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

function SpecializedList({ list }) {
  const [sort, setSort] = useState(false);

  const getList = () => {
    return sort ? list.sort() : list;
  };

  const toggleSort = () => {
    setSort(!sort);
  };

  return (
    <div>
      <ErrorBoundry>
        <h1>Error Handling</h1>
        <GeneralList theme="info" list={getList()} />
        <ActionButton theme="primary" text="Sort" callback={toggleSort} />
      </ErrorBoundry>
    </div>
  );
}

function ProFeature(FeatureComponent) {
  return function (props) {
    if (props.pro) {
      let { pro, ...childProps } = props;
      return <FeatureComponent {...childProps} />;
    } else {
      return (
        <h5 className="bg-warning text-white text-center">
          This is a pro feature
        </h5>
      );
    }
  };
}

function ProConroller(FeatureComponent) {
  const ProtectedFeature = ProFeature(FeatureComponent);

  return function Test(props) {
    const [proMode, setProMode] = useState(false);

    const toggleProMode = () => {
      setProMode(!proMode);
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={proMode}
                onChange={toggleProMode}
              />
              <label className="form-check-label">Pro Mode</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProtectedFeature {...props} pro={proMode} />
          </div>
        </div>
      </div>
    );
  };
}

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorThrown: false,
    };

    console.log("error boundry");
  }

  componentDidCatch = (error, info) => {
    console.log("catch");
    this.setState({
      errorThrown: true,
    });
  };

  render() {
    return (
      <>
        {this.state.errorThrown && (
          <h3 className="bg-danger text-white text-center m-2 p-2">
            Error Detected
          </h3>
        )}
        {this.props.children}
      </>
    );
  }
}

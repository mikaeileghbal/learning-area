import { connect } from "react-redux";
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// const ConnectedComponent = connectToStore(Component);

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

function Component() {
  return (
    <div>
      <h1>React Redux</h1>
    </div>
  );
}

export default ConnectedComponent;

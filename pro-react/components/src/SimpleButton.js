import React, { Component } from "react";

// export default function SimpleButton({ text, className, onClick }) {
//   return (
//     <button onClick={onClick} className={className}>
//       {text}
//     </button>
//   );
// }

export default class SimpleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      hasButtonBinClicked: false,
    };
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.props.className}>
        {this.props.text} {this.state.counter}
        {this.state.hasButtonBinClicked && <div>Clicked</div>}
      </button>
    );
  }

  handleClick = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        this.setState({ hasButtonBinClicked: this.state.counter > 0 });
      }
    );
    this.props.onPromote();
    this.props.onIncrement(1);
  };
}

import { Component } from "react";

export class ErrorMessage extends Component<{
  message: string;
  show: boolean;
}> {
  render() {
    const { message, show } = this.props;
    return show ? <div className="error-message">{message}</div> : <div></div>;
  }
}

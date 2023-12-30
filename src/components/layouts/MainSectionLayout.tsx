import { Component, ReactNode } from "react";

export class MainSectionLayout extends Component<{ children: ReactNode }> {
  render() {
    const { children } = this.props;
    return <main className="container-lg">{children}</main>;
  }
}

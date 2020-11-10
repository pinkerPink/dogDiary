import React from "react";

export default class Deworming extends React.Component {
  state = {
    deworm: "16.10.2020"
  }

  render() {
    return (
      <p>Ближайшая дегельминтизация {this.state.deworm}</p>
    )
  }
}
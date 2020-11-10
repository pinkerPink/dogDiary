import React from "react";

export default class Feeding extends React.Component {
	state = {
		nextFeed: "22:00",
	};

	render() {
		return <p>Ближайшее кормление в {this.state.nextFeed}</p>;
	}
}

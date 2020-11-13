import React from "react";

export default class Feeding extends React.Component {
	render() {
		return <p>Ближайшее кормление в {this.props.nextFeed}</p>;
	}
}

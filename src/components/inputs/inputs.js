import React from "react";

import Input from "./input";

export default class Inputs extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputsAdd = this.handleInputsAdd.bind(this);
		this.handleInputs = this.handleInputs.bind(this);
	}

	state = {
		inputs: [
			{ time: "07:00", count: "35 грамм" },
			{ time: "10:45", count: "35 грамм" },
			{ time: "14:30", count: "40 грамм" },
			{ time: "18:15", count: "40 грамм" },
			{ time: "22:00", count: "40 грамм" },
		],
	};

	handleInputsAdd(input) {
		const inputs = [...this.state.inputs, input];
		this.setState({
			inputs: inputs,
		});
	}

	handleInputs(e) {
		this.props.onFeedAdd(this.state.inputs);
		// this.props.onInputAdd(this.state.inputs);
		e.preventDefault();
	}

	render() {
		return (
			<Input onInputAdd={this.props.onFeedAdd} count={this.props.count} />
		);
	}
}

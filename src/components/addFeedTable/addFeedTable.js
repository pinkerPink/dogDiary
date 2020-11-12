import React from "react";

import Inputs from "../inputs/inputs";

export default class AddFeedTable extends React.Component {
	constructor(props) {
		super(props);
		this.addInput = this.addInput.bind(this);
		this.handleInputsAdd = this.handleInputsAdd.bind(this);
		// this.handleAdd = this.handleAdd.bind(this);
	}

	state = {
		inputCount: "",
		inputs: [],
	};

	addInput(e) {
		this.setState({
			inputCount: e.target.value,
		});
	}

	handleInputsAdd(inputs) {
		this.setState({
			inputs: inputs,
		});
	}

	// handleAdd(e) {
	// 	this.props.onFeedAdd(this.state.inputs);
	// 	e.preventDefault();
	// }

	render() {
		return (
			<>
				<input type="text" placeholder="Количесво кормлений" value={this.state.inputCount} onChange={this.addInput} />
				<Inputs count={this.state.inputCount} onInputsAdd={this.handleInputsAdd} onFeedAdd={this.props.onFeedAdd} />
			</>
		);
	}
}

import React from "react";

import Inputs from "../inputs/input";

export default class AddFeedTable extends React.Component {
	constructor(props) {
		super(props);
		this.addInput = this.addInput.bind(this);
	}

	state = {
		inputCount: "",
	};

	addInput(e) {
		this.setState({
			inputCount: e.target.value,
		});
	}

	render() {
		return (
			<>
				<input type="text" placeholder="Количесво кормлений" value={this.state.inputCount} onChange={this.addInput} />
				<Inputs count={this.state.inputCount} onInputAdd={this.props.onFeedAdd} />
			</>
		);
	}
}

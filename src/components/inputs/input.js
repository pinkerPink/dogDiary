import React from "react";

function Inputs(props) {
	return (
		<div>
			<input onChange={props.onTimeChange} placeholder="Время" />
			<input onChange={props.onCountChange} placeholder="Количество" />
		</div>
	);
}

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleCountChange = this.handleCountChange.bind(this);
		this.handleInputs = this.handleInputs.bind(this);
	}

	state = {
		input: {
			time: "",
			count: "",
		},
		array: [],
	};

	handleTimeChange(e) {
		const input = {
			time: e.target.value,
			count: this.state.input.count,
		};
		this.setState({
			input: input,
		});
	}

	async handleCountChange(e) {
		const input = {
			time: this.state.input.time,
			count: e.target.value,
		};
		await this.setState({
			input: input,
    });
    
    const arr = [...this.state.array, this.state.input];
		await this.setState({
			array: arr,
		});
	}

	handleInputs(e) {
		this.props.onInputAdd(this.state.array);
		e.preventDefault();
	}

	render() {
		const inputss = [];
		for (let i = 0; i < this.props.count; i++) {
			inputss.push(<Inputs onTimeChange={this.handleTimeChange} onCountChange={this.handleCountChange} />);
		}

		return (
			<form onSubmit={this.handleInputs}>
				{inputss}
				<input />
				<button type="submit">Добавить</button>
			</form>
		);
	}
}

import React from "react";

export default class AddWeight extends React.Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleChangeDate = this.handleChangeDate.bind(this);
		this.handleChangeWeight = this.handleChangeWeight.bind(this);
	}

	state = {
		date: "",
		weight: "",
	};

	handleChangeDate(e) {
		this.setState({
			date: e.target.value,
		});
	}

	handleChangeWeight(e) {
		this.setState({
			weight: e.target.value,
		});
	}

	handleAdd(e) {
		const obj = { date: this.state.date, weight: this.state.weight };
		this.props.onWeightAdd(obj);
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleAdd}>
				<input onChange={this.handleChangeDate} type="text" placeholder="Дата" />
				<input onChange={this.handleChangeWeight} type="text" placeholder="Вес" />
				<button type="submit">Добавить</button>
			</form>
		);
	}
}

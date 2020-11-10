import React from "react";

import "./dogCard.css";

export default class DogCard extends React.Component {
	render() {
		const { breed, gender, weight, nickname, age } = this.props.dogInfo;

		return (
			<div>
				<h2>Кличка: {nickname}</h2>
				<span>Порода: {breed}</span>
				<span>Пол: {gender}</span>
				<span>Возраст: {age}</span>
				<span>Вес: {weight}</span>
			</div>
		);
	}
}

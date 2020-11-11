import React from "react";

import DogCard from "./components/dogCard/dogCard";
import Feeding from "./components/feeding/feeding";
import WeightTable from "./components/weightTable/weightTable";
import FeedingTable from "./components/feedingTable/feedingTable";
import AddWeight from "./components/addWeight/addWeight";
// import Deworming from "./components/deworming/deworming";

import "./App.css";

const DOGINFO = {
	breed: "Корги-пемброк",
	gender: "муж",
	weight: "4,8",
	age: "3 месяца",
	nickname: "Юки",
};

const WEIGHT = [
	{ date: "09.11.2020", weight: "4.7" },
	{ date: "10.11.2020", weight: "4.8" },
	{ date: "11.11.2020", weight: "4.9" },
];

const FEED = [
	{ time: "07:00", count: "40 грамм" },
	{ time: "10:45", count: "40 грамм" },
	{ time: "14:30", count: "40 грамм" },
	{ time: "18:15", count: "40 грамм" },
	{ time: "22:00", count: "40 грамм" },
];

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleWeightAdd = this.handleWeightAdd.bind(this);
	}
	
	state = {
		lastWeight: WEIGHT[WEIGHT.length - 1].weight,
	};

	handleWeightAdd(newWeight) {
		WEIGHT.push(newWeight);
		this.setState({
			lastWeight: newWeight.weight,
		});
	}

	render() {
		return (
			<div className="App">
				<DogCard dogInfo={DOGINFO} lastWeight={this.state.lastWeight} />
				<Feeding />
				<WeightTable weightTable={WEIGHT} />
				<AddWeight onWeightAdd={this.handleWeightAdd} />
				<FeedingTable feedTable={FEED} />
				{/* <Deworming/> */}
			</div>
		);
	}
}

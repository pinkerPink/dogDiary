import DogCard from "./components/dogCard/dogCard";
import Feeding from "./components/feeding/feeding";
import WeightTable from "./components/weightTable/weightTable";
import FeedingTable from "./components/feedingTable/feedingTable";
// import Deworming from "./components/deworming/deworming";

import "./app.css";

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

function App() {
	return (
		<div className="App">
			<DogCard dogInfo={DOGINFO} />
			<Feeding />
			<WeightTable weightTable={WEIGHT} />
			<FeedingTable feedTable={FEED} />
			{/* <Deworming/> */}
		</div>
	);
}

export default App;

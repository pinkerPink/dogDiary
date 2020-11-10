import DogCard from "./components/dogCard/dogCard";
import Feeding from "./components/feeding/feeding";
import Deworming from "./components/deworming/deworming";

import "./app.css";

const DOGINFO = {
	breed: "Корги-пемброк",
	gender: "муж",
	weight: "4,8",
	age: "3 месяца",
	nickname: "Юки",
}

function App() {
	return <div className="App">
		<DogCard dogInfo={DOGINFO}/>
		<Feeding/>
		<Deworming/>
	</div>;
}

export default App;
import GenericDropdown from "./components/dropdown";
import GenericTable from "./components/dataTable";

import data from "./components/data";
import GenericInstructions from "./components/GenericInstructions";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "../src/styles/app.css";

function App() {
	const [workoutDay, setWorkoutDay] = useState("");
	const handleSelectChange = (value: any) => {
		setWorkoutDay(value.name);
		console.log(workoutDay);
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px", // Added margin for spacing
				}}>
				<h2>Create Program</h2>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px", // Added margin for spacing
				}}>
				<GenericDropdown placeHolder={"Biceps"} exercises={data.biceps} />
				<GenericDropdown placeHolder={"Triceps"} exercises={data.triceps} />
				<GenericDropdown placeHolder={"Back"} exercises={data.back} />
				<GenericDropdown placeHolder={"Chest"} exercises={data.chest} />
				<GenericDropdown placeHolder={"Legs"} exercises={data.legs} />
				<GenericDropdown placeHolder={"Shoulders"} exercises={data.shoulders} />
				<GenericDropdown placeHolder={"Abs"} exercises={data.abs} />
				<GenericDropdown placeHolder={"Traps"} exercises={data.traps} />
			</div>

			<br />
			<GenericInstructions />
			<br />

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px", // Added margin for spacing
				}}>
				<Dropdown
					value={workoutDay}
					options={data.days}
					onChange={(e) => handleSelectChange(e.value)}
					optionLabel="name"
					placeholder="Workout Days"
					filter
					className="w-full m-4"
					style={{ width: "150px" }}
				/>
			</div>

			<GenericTable />
		</>
	);
}

export default App;

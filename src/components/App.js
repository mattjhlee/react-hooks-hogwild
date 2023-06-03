import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import Sort from "./Sort";
import hogs from "../porkers_data";

function App() {
	const [selectedSort, setSelectedSort] = useState("original")
	const [filterGreased, setFilterGreased] = useState(false)

	return (
		<div className="App">
			<Nav />
			<Sort onSortChange={setSelectedSort}/>
			<Filter filterGreased={filterGreased} onfilterGreased={setFilterGreased}/>
			<HogList hogs={hogs} filterGreased={filterGreased} selectedSort={selectedSort}/>
		</div>
	);
}

export default App;

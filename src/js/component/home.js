import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let TaskList = props => {
	const [items, setItems] = useState([
		{ id: 1, name: "task 1" },
		{ id: 2, name: "task 2" }
	]);

	return (
		<div>
			<ul>
				{items.map((item, index) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

//create your first component
export function Home() {
	let [inputValue, setInputValue] = useState("");

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<input value={inputValue} placeholder={"Fill with the new task"} />

			<TaskList name={"Angel"} />
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let TaskList = props => {
	const [items, setItems] = useState([]);
	let [inputValue, setInputValue] = useState("");

	useEffect(
		function(element) {
			if (inputValue != "") {
				setItems(items.concat(inputValue));
			}
		},
		[inputValue]
	);

	return (
		<div>
			<input
				value={inputValue}
				placeholder={"Fill with the new task"}
				onChange={e => setInputValue(e.target.value)}
			/>
			<ul>
				{items.map((item, index) => (
					<li key={index.id}>{item}</li>
				))}
			</ul>
		</div>
	);
};

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>

			<TaskList />
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
TaskList.propTypes = {
	newElement: PropTypes.string
};

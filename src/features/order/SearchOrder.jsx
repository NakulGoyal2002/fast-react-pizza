import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		if (!query) return;
		navigate(`/order/${query}`);
		setQuery("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Search Order #'
				value={query}
				onChange={ ( e ) => setQuery( e.target.value ) }
				className="text-sm px-4 py-2 rounded-full bg-yellow-100 w-28 placeholder:text-stone-400 sm:w-64 sm:focus:w-72 transition-all focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
			></input>
		</form>
	);
}

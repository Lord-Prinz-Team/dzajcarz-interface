const Input = (props) => {
	const updateContent = (text) => {
		props.onType(text);
	};

	return (
		<input
			type="text"
			placeholder="Enter message..."
			className="bottom-bar-input"
			onInput={(e) => {
				updateContent(e.target.value);
			}}
			value={props.value}
		/>
	);
};

export default Input;

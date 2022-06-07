const Divider = ({ timestamp }) => {
	const months = [
		"stycznia",
		"lutego",
		"marca",
		"kwietnia",
		"maja",
		"czerwca",
		"lipca",
		"sierpnia",
		"października",
		"listopada",
		"grudnia",
	];

	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month =
		date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

	const monthName = months[month - 1];

	return (
		<div className="w-[calc(100%-8rem)] h-0.5 bg-gray-600 relative my-4">
			<span className="absolute top-0 text-xs -translate-y-1.5 left-1/2 -translate-x-1/2 px-2 text-gray-500 font-semibold bg-gray-700">
				{day} {monthName} {year}
			</span>
		</div>
	);
};

export default Divider;

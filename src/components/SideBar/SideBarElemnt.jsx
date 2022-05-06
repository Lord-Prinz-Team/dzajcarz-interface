import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SideBarElement = ({ img, text, icon, active, onClick, url }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (active) {
			navigate(url);
		}
	}, []);

	return (
		<Link
			to={url ?? ""}
			className={`sidebar-icon group active:translate-y-0.5 ${
				text ? "" : "rounded-xl"
			} select-none rounded-xl after:bg-white after:h-full after:scale-y-0 after:-left-4 after:top-1/2 after:-translate-y-1/2 after:w-1/6 after:absolute after:rounded-xl after:transition-transform  ${
				active
					? "after:animate-grow1 rounded-xl after:scale-y-100 hover:after:scale-y-100 after:transition-transform dark:bg-green-600 text-white"
					: "hover:after:scale-y-50 rounded-3xl hover:after:transition-transform"
			} hover:bg-green-600`}
			onClick={onClick}
		>
			{img && (
				<img
					src={
						img.includes("null.webp")
							? "https://media.discordapp.net/attachments/657658801863917568/971879142310182982/default.png"
							: img
					}
					alt={`${text} profile picture`}
					className={`sidebar-icon  ${text ? "" : "rounded-xl"} hover:bg-green-600 ${
						active ? "rounded-xl" : ""
					}`}
				/>
			)}
			{icon && icon}
			{text && (
				<div className="sidebar-tooltip group-hover:scale-100 text-sm">
					<div className="after:w-2 after:h-2 after:bg-gray-900 after:-left-4 after:translate-y-full after:rotate-45 after:absolute relative">
						{text}
					</div>
				</div>
			)}
		</Link>
	);
};

export default SideBarElement;

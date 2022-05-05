import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SideBarElement = ({ img, text, icon, active, onClick, url }) => {

	const navigate = useNavigate()

	useEffect(() => {
		if(active) {
			navigate(url)
		}
	}, [])

	return (
		<Link to={url ?? ""} className={`sidebar-icon group ${text ? "" : "rounded-xl"} select-none rounded-xl after:bg-white after:-left-4 after:top-1/2 after:-translate-y-1/2 after:w-1/6 after:absolute after:rounded-xl ${active ? "after:animate-grow1 rounded-xl" : "hover:after:animate-grow2 rounded-3xl"} transition-all duration-100 ease-in-out`} onClick={onClick} >
			{img && (
				<img
					src={img}
					alt={`${text} profile picture`}
					className={`sidebar-icon  ${text ? "" : "rounded-xl"}  ${active ? "rounded-xl" : ""}`}
				/>
			)}
			{icon && icon}

			{text && <span className="sidebar-tooltip group-hover:scale-100">{text}</span>}
		</Link>
	);
};

export default SideBarElement;

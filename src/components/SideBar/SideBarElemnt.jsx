const SideBarElement = ({ img, text, icon }) => {
	return (
		<div className={`sidebar-icon group ${text ? "" : "rounded-xl"} select-none`}>
			{img && (
				<img
					src={img}
					alt={`${text} profile picture`}
					className={`sidebar-icon  ${text ? "" : "rounded-xl"}`}
				/>
			)}
			{icon && icon}

			{text && <span className="sidebar-tooltip group-hover:scale-100">{text}</span>}
		</div>
	);
};

export default SideBarElement;

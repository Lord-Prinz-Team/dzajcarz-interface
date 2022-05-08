import TopNavigation from "../TopNavigation/TopNavigation";
import BottomBar from "./BottomBar";
import Chat from "./Chat";

const ContentContainer = () => {
	return (
		<div className="content-container">
			<TopNavigation />
			<Chat />
			<BottomBar />
		</div>
	);
};

export default ContentContainer;

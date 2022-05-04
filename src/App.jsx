import Channelbar from "./components/ChannelBar/ChannelBar";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import SideBar from "./components/SideBar/SideBar";

function App() {
	return (
		<div className="flex">
			<SideBar />
			<ContentContainer />
		</div>
	);
}

export default App;

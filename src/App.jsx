import { Route, Routes } from "react-router-dom";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";
import NewConversation from "./components/SideBar/NewConversation";
import useDarkMode from "./hooks/useDarkMode";
import { useEffect } from "react";

function App() {
	const [darkTheme, setDarkTheme] = useDarkMode();

	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, [window.matchMedia("(prefers-color-scheme: dark)")]);

	return (
		<div className="flex min-h-screen">
			<SideBar />
			<div className="w-18"></div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="new" element={<NewConversation />} />
				<Route path="chat">
					<Route path=":chatId" element={<ContentContainer />} />
				</Route>
				<Route path="settings" element={<Settings />} />
			</Routes>
		</div>
	);
}

export default App;

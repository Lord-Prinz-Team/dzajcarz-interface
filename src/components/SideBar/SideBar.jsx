import { BsGearFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import SlideBarElement from "./SideBarElemnt";
import logo from "./../../logo2.png";

const SideBar = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			return fetch("http://localhost:4761/contacts");
		};

		fetchData()
			.then((response) => response.json())
			.then((data) => {
				if (data.status !== "success") {
					return;
				}
				setContacts(data.data.contacts);
			});
	}, []);

	return (
		<div
			className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
		>
			<SlideBarElement img={logo} />
			<Divider />
			{contacts.map((contact) => {
				return (
					<SlideBarElement
						img={contact.avatar}
						text={contact.tag.split("#")[0]}
						key={contact._id}
					/>
				);
			})}
			<Divider />
			<SlideBarElement icon={<BsGearFill size="22" />} text="Ustawienia" />{" "}
		</div>
	);
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;

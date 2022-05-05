import { BsGearFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import SlideBarElement from "./SideBarElemnt";
import logo from "./../../logo2.png";

const SideBar = () => {
	const [contacts, setContacts] = useState([]);
	const [active, setActive] = useState(0);

	const changeActiveChat = (index) => {
		setActive(index);
	}
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
				console.log(data);
				setContacts(data.data.contacts.reverse());
			});
	}, []);

	return (
		<div
			className="fixed top-0 left-0 h-screen w-18 flex flex-col
            bg-white dark:bg-gray-900 shadow-lg overflow-y"
		>
			<SlideBarElement img={logo} />
			<Divider />
			{contacts.map((contact, index) => {
				return (
					<SlideBarElement
						url={`/chat/${contact.id}`}
						img={contact.avatar}
						text={contact.username}
						key={contact.id}
						active={active === index}
						onClick={changeActiveChat.bind(null, index)}
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

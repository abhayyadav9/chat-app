import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='sidebar border-r border-slate-500 p-2 flex flex-col'>
			<SearchInput />
			<div className='divider px-4'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
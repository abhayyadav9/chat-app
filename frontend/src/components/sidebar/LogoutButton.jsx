import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className=' h-6 '>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer'style={{ hover: "logout" }} onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
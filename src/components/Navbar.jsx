import { Link, NavLink } from "react-router";
import CategoryDropdown from "./CategoryDropdown";

const Navbar = () => {
	return (
		<div className='navbar  bg-base-100 shadow-sm'>
			<div className='flex-1'>
				<Link to={"/"}>
					<a className=' text-xl'>Rafi Blog</a>
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<CategoryDropdown />
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

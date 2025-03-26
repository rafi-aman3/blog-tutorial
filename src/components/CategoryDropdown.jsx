import { Link } from "react-router";
import useCategories from "../hooks/useCategories";

const CategoryDropdown = () => {
	const { categories } = useCategories();

	return (
		<li className='dropdown dropdown-bottom dropdown-end'>
			<div tabIndex={0} role='button' className='btn m-1'>
				Categories
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
			>
				{categories?.map((category) => (
					<li onClick={() => document.activeElement.blur()} key={category.id}>
						<Link to={`/categories/${category.id}`}>{category.name}</Link>
					</li>
				))}
			</ul>
		</li>
	);
};

export default CategoryDropdown;

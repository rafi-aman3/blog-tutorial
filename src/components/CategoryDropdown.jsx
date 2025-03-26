import useCategories from "../hooks/useCategories";

const CategoryDropdown = () => {
	const { categories } = useCategories();

	return (
		<li>
			<details>
				<summary>Categories</summary>
				<ul className='w-[300px] right-0 z-[100] bg-base-100 rounded-t-none shadow-md p-2'>
					{categories?.map((category) => {
						return (
							<li key={category.id}>
								<a href={`/categories/${category.id}`}>{category.name}</a>
							</li>
						);
					})}
				</ul>
			</details>
		</li>
	);
};

export default CategoryDropdown;

import React from "react";
import useCategories from "../hooks/useCategories";
import CategoryCard from "./CategoryCard";

const HomeCategorySection = () => {
	const { categories } = useCategories();

	if (categories.length == 0) return;

	return (
		<div className='space-y-8'>
			<h3 className=' text-2xl font-bold text-black text-center'>Categories</h3>
			<div className='flex flex-wrap gap-8 justify-center items-center'>
				{categories?.map((item) => (
					<CategoryCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default HomeCategorySection;

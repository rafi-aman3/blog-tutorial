import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ item }) => {
	return (
		<Link
			to={`/categories/${item.id}`}
			className=' w-[350px] p-8 text-center bg-white text-xl font-bold shadow-lg rounded-lg border border-gray-400'
		>
			{item?.name}
		</Link>
	);
};

export default CategoryCard;

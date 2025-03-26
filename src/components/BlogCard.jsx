import React from "react";
import { Link } from "react-router";

const BlogCard = ({ item }) => {
	return (
		<Link
			to={`/blogs/${item.id}`}
			className='bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden'
		>
			<img
				src={item.img}
				alt={item.title}
				className='w-full h-48 object-cover'
			/>
			<div className='p-4'>
				<h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
			</div>
		</Link>
	);
};

export default BlogCard;

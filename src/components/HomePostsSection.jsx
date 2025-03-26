import React from "react";
import Loader from "./Loader";
import { useNewestPosts } from "../hooks/useNewestPosts";
import BlogCard from "./BlogCard";

const HomePostsSection = () => {
	const { newestPosts: posts } = useNewestPosts();
	return (
		<>
			{posts?.length == 0 ? (
				<Loader />
			) : (
				<div className='grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{posts?.slice(0, 8).map((item) => (
						<BlogCard key={item.id} item={item} />
					))}
				</div>
			)}
		</>
	);
};

export default HomePostsSection;

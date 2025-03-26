import React, { useState } from "react";
import { useNewestPosts } from "../hooks/useNewestPosts";
import HomeCategorySection from "./HomeCategorySection";
import { Link } from "react-router";
import Loader from "./Loader";

const HomeNewsetSection = () => {
	const { newestPosts } = useNewestPosts();
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<div className='space-y-12'>
			<h3 className=' text-2xl font-bold mb-12 text-center'>Newest</h3>

			<div className='carousel w-full'>
				{newestPosts.length == 0 ? (
					<Loader />
				) : (
					newestPosts?.slice(0, 3).map((item) => (
						<Link
							to={`/blogs/${item.id}`}
							id={`item-${item.id}`}
							className='carousel-item w-full'
						>
							<div className='flex flex-col lg:flex-row items-center  gap-12  w-full bg-white p-2 rounded-md border border-gray-300 shadow-md'>
								<img
									src={item.img}
									className='w-full lg:w-auto aspect-video h-[385px] object-cover'
								/>
								<div>
									<h1 className=' text-3xl font-bold'>{item.title}</h1>
								</div>
							</div>
						</Link>
					))
				)}
			</div>
			<div className='flex  w-full justify-center gap-2 py-2'>
				{newestPosts?.slice(0, 3).map((item, index) => (
					<a
						onClick={() => setActiveSlide(index)}
						href={`#item-${item.id}`}
						className={`size-2 rounded-full transition-colors duration-300 ${
							activeSlide === index ? "bg-black" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default HomeNewsetSection;

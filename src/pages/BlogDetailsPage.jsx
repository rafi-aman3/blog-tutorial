import React from "react";
import { useParams } from "react-router";
import usePostDetails from "../hooks/usePostDetails";

const BlogDetailsPage = () => {
	const { id } = useParams();
	const { post } = usePostDetails(id);
	const { postDetails } = post || {};

	return (
		<div className='w-full flex flex-col rounded-md border border-gray-500 shadow-lg justify-center items-center'>
			<img className=' w-full' src={postDetails?.img} />

			<div className='bg-white space-y-12  p-10 '>
				<p className=' text-base text-gray-500'>{postDetails?.content}</p>
			</div>
		</div>
	);
};

export default BlogDetailsPage;

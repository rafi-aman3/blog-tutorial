import axios from "axios";
import toast from "react-hot-toast";

export const getNewestPosts = async () => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_BLOG_API_BASE_URL}post-newest`
		);

		return res.data;
	} catch (error) {
		console.error("Error fetching newest posts:", error);
		toast.error(error.message || "Failed to fetch newests posts");

		return [];
	}
};

export const getPostsByCategory = async (id) => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_BLOG_API_BASE_URL}post-list/${id}`
		);

		return res.data;
	} catch (error) {
		console.error("Error fetching posts:", error);
		toast.error(error.message || "Failed to fetch  posts");

		return [];
	}
};

export const getPostDetailsByID = async (id) => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_BLOG_API_BASE_URL}post-details/${id}`
		);

		return res.data;
	} catch (error) {
		console.error("Error fetching post details:", error);
		toast.error(error.message || "Failed to fetch post details");

		return [];
	}
};

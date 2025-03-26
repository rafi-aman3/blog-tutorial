import axios from "axios";
import toast from "react-hot-toast";

export const getCategories = async () => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_BLOG_API_BASE_URL}post-categories`
		);

		return res.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		toast.error(error.message || "Failed to fetch categories");

		return [];
	}
};

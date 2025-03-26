import { useEffect, useState } from "react";
import { getNewestPosts } from "../api/posts";

export const useNewestPosts = () => {
	const [newestPosts, setNewestPosts] = useState([]);

	useEffect(() => {
		getNewestPosts().then((data) => {
			setNewestPosts(data);
		});
	}, []);

	return { newestPosts };
};

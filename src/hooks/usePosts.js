import { useEffect, useState } from "react";
import { getPostsByCategory } from "../api/posts";

export const usePosts = (id) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPostsByCategory(id).then((data) => {
			setPosts(data);
		});
	}, [id]);

	return { posts };
};

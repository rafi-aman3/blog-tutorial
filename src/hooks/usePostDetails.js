import { useEffect, useState } from "react";
import { getPostDetailsByID } from "../api/posts";

const usePostDetails = (id) => {
	const [post, setPost] = useState(null);

	useEffect(() => {
		getPostDetailsByID(id).then((data) => {
			setPost(data);
		});
	}, [id]);

	return { post };
};

export default usePostDetails;

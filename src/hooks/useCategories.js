import { useEffect, useState } from "react";
import { getCategories } from "../api/categories";

const useCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => {
			setCategories(data);
		});
	}, []);
	return { categories };
};

export default useCategories;

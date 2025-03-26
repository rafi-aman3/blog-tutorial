import { useParams } from "react-router";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/Loader";
import useCategories from "../hooks/useCategories";
import BlogCard from "../components/BlogCard";

const BlogCategorySpecificPage = () => {
	const { id } = useParams();
	const { posts } = usePosts(id);
	const { categories } = useCategories();
	const categoryTitle = categories?.find((category) => category.id == id)?.name;

	if (posts.length == 0) return <Loader />;

	return (
		<div>
			<h1 className='text-3xl font-bold text-center mb-12'>{categoryTitle}</h1>
			<div className='grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{posts.map((item) => (
					<BlogCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default BlogCategorySpecificPage;

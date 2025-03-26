import HomeCategorySection from "../components/HomeCategorySection";
import HomeNewsetSection from "../components/HomeNewsetSection";
import HomePostsSection from "../components/HomePostsSection";

const HomePage = () => {
	return (
		<div className=' space-y-12'>
			<h1 className='text-3xl font-bold text-center mb-12'>
				Welcome to the Blog
			</h1>

			<HomeNewsetSection />
			<HomeCategorySection />
			<HomePostsSection />
		</div>
	);
};

export default HomePage;

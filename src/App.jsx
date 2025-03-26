import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BlogCategoriesPage from "./pages/BlogCategoriesPage";
import BlogListingPage from "./pages/BlogListingPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import BlogCategorySpecificPage from "./pages/BlogCategorySpecificPage";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path='categories'>
							<Route path=':id' element={<BlogCategorySpecificPage />} />
						</Route>
						<Route path='blogs'>
							<Route path=':id' element={<BlogDetailsPage />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Toaster
				position='top-right'
				toastOptions={{
					success: {
						style: {
							background: "green",
							color: "white",
						},
					},
					error: {
						style: {
							background: "red",
							color: "white",
						},
					},
				}}
			/>
		</>
	);
}

export default App;

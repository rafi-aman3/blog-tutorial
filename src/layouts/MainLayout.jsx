import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className=' flex flex-col min-h-screen'>
			<Navbar />
			<main className='container mx-auto my-10 w-full flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;

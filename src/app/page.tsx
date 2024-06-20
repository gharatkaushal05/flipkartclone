// pages/index.tsx

import Image from "next/image";
import Header from "@/components/Header";
import Cards from "@/components/Card";
import Footer from "@/components/Footer";
import HomePage from "@/components/Homepage";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-start">
        <HomePage />
      </main>
      <Cards /> {/* Assuming Cards component renders product cards */}
      <Footer />
    </div>
  );
};

export default Home;

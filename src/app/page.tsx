'use client';

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Carousel from "@/components/Carousel";
import ProblemSolution from "@/components/ProblemSolution";
import Footer from "@/components/Footer"; 

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar /> 

      <main className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left order-2 md:order-1 space-y-4">
          <h1 className="text-4xl font-bold mb-2 text-black">UrbanCare</h1>
          <p className="text-lg mb-4 text-black font-semibold">Semua dalam Satu</p>
          <p className="text-lg mb-6 text-black font-normal">
            Report your city's infrastructure deficiencies and needs so we can make repairs quickly and quickly
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 relative">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#EBF4F6] px-4 py-3 rounded-3xl w-64 focus:outline-none border-none text-black placeholder-gray-700"
            />
            <button className="bg-[#37B7C3] text-white font-semibold px-6 py-3 rounded-3xl hover:bg-[#37b7c3d0] transition-colors transform -translate-x-14">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0">
          <Image
            src="/image-lp.png" 
            alt="UrbanCare" 
            width={800} 
            height={600} 
            className="w-full max-w-md" 
            priority 
          />
        </div>
      </main>

      <section className="mt-10 px-8 md:px-16">
        <Carousel />
      </section>

      <section className="mt-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">About</h2>
          <p className="text-lg text-black font-normal">
            Platform inovatif berbasis website yang didedikasikan untuk membantu pengguna dalam mengelola sampah secara efisien dan mendukung program daur ulang. Dengan berbagai fitur yang intuitif dan berorientasi pada pengguna, UrbanCare tidak hanya bertujuan untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan, tetapi juga untuk memberdayakan masyarakat dalam upaya pengelolaan sampah.
          </p>
        </div>
      </section>

      <ProblemSolution />
      
      <Footer />
    </div>
  );
};

export default Home;
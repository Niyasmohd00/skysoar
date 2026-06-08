"use client";

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import TrendingPackages from "@/components/TrendingPackages";
import BestDestinations from "@/components/BestDestinations";
import TopCities from "@/components/TopCities";
import CustomTripModal from "@/components/CustomTripModal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="page-root">
      <Navbar />
      <main className="main-content">
        <HeroSlider />
        <TrendingPackages />
        <BestDestinations />
        <TopCities />
        <CustomTripModal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

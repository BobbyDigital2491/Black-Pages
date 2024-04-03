
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Trial from "@/components/Trial";
import CTA2 from "@/components/CTA2";
import Parnterships from "@/components/Parnterships";
import Table from "@/components/Table";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import { createClient } from "@/utils/supabase/server";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";

export default async function Map() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="bg-black">
      <div className="flex-1 mx-auto flex flex-col gap-20 ">
      <nav className="w-full flex justify-center  h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Navbar/>
        </div>
      </nav>
      
      <div>
        <br/>
        <Hero/>
        <Parnterships/>
        <br/>
        <CTA/>
        <CTA2/>
        <Categories/>
        <br/>
        <Blog/>
        
        <Trial/>
        <Footer/>
      </div>
      </div>
    </div>
  );
}

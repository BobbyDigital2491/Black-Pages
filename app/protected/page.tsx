
import AuthButton from "../../components/AuthButton";
import { createClient } from "../../utils/supabase/server";


import { redirect } from "next/navigation";
import SupabaseLogo from "../../components/SupabaseLogo";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import Navbar from "@/components/Navbar";
import AuthHero from "@/components/AuthHero";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

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
        <AuthHero/>
        <Categories/>
      </div>
      </div>
    </div>
  );
}

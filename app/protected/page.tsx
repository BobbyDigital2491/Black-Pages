
import AuthButton from "../../components/AuthButton";
import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import SupabaseLogo from "../../components/SupabaseLogo";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import Navbar2 from "@/components/Navbar2";
import AuthHero from "@/components/AuthHero";
import Table from "@/components/Table";
import TableHeading from "@/components/TableHeading";
import List from "@/components/List";
import Footer from "@/components/Footer";


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
          <Navbar2/>
        </div>
      </nav>
      
      <div>
        <br/>
        <AuthHero/>
        <br/><br/><br/><br/>
        <TableHeading/>
        <List />
        <Footer/>
      </div>
      </div>
    </div>
  );
}

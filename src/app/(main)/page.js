import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";
import { redirect } from "next/navigation";


const default_category_id = "01"


export default async function Home() {
    redirect(`/category/${default_category_id}`)
}

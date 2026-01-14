import Mainhome from "@/components/pages/home/Index";
import MainLayout from "@/components/templates/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <MainLayout>
      <Mainhome/>
    </MainLayout>
   </div>
  );
}

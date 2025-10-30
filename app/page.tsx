import Header from "@/components/mainlayout/Header";
import NavigationMenu from "@/components/mainlayout/NavigationMenu";
import LeftContent from "@/components/mainlayout/LeftContent";
import MainContent from "@/components/mainlayout/MainContent";
import RightContent from "@/components/mainlayout/RightContent";
import Footer from "@/components/mainlayout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <NavigationMenu />
      <main className="flex flex-1 gap-4 p-4">
        <LeftContent />
        <MainContent />
        <RightContent />
      </main>
      <Footer />
    </div>
  );
}

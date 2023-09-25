import Header from "../components/header";
import LeftSidebar from "../components/leftSidebar";
import Feed from "./feed";

export default function App() {
  return (
    <div className="font-Raleway bg-[#F9F9F9] h-full w-full">
      <div className="sticky top-0 z-10 w-full">
        <Header />
      </div>
      <div className="flex mx-8 mt-4 justify-between">
        <div className="hidden sticky top-20 left-0 h-screen w-[400px] overflow-y-auto lg:block">
          <LeftSidebar />
        </div>
        <Feed />
      </div>
    </div>
  );
}

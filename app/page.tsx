import SocialIcons from "@/components/SocialIcons";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-800">
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="m-4 p-4 rounded-xl text-white bg-cyan-800 md:w-1/2 lg:w-1/3">
            <Top />
            <SocialIcons />
            <Bottom />
          </div>
        </div>
      </div>
    </main>
  );
}

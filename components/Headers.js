import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Headers() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="/image.jfif"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-40 w-40 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to METAVERSE!!!</h1>
          <h2 className="text-4xl font-bold truncate">
            {user.get("username")}
          </h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Headers;

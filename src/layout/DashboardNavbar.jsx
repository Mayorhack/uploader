import Image from "next/image";
import { useRouter } from "next/router";
import loginman from "@/assets/login_man.svg";
const DashboardNavbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between w-full bg-white shadow-lg px-4 py-2 rounded-2xl items-center">
      <h2 className="uppercase text-2xl font-medium">
        {router.pathname.split("/")[2]}
      </h2>
      <div className="flex flex-col items-center">
        <Image
          src={loginman}
          alt="profile photo"
          className="rounded-full w-8 h-8"
        />
        <p>User Name</p>
      </div>
    </div>
  );
};

export default DashboardNavbar;

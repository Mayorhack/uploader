import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
const Logo = ({ className }) => {
  return (
    <Link href={"/"}>
      <div className={`flex items-center absolute left-0 ${className}`}>
        <Image src={logo} alt="logo" className="w-20 h-16" />
        <h3 className="text-highlight text-xl font-extrabold">O.B.A GROUP</h3>
      </div>
    </Link>
  );
};

export default Logo;

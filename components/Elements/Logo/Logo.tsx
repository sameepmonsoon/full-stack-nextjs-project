import Link from "next/link";
import { SiWeb3Dotjs } from "react-icons/si";
const Logo = ({ to, title }: { to: string; title: string }) => {
  return (
    <Link
      className=" h-[4rem] w-auto max-w-[10rem] flex justify-start px-5 rounded-sm items-center gap-3 "
      href={to}>
      <SiWeb3Dotjs size={25} />

      <span className="capitalize font-bold text-lg text-900">{title}</span>
    </Link>
  );
};

export default Logo;

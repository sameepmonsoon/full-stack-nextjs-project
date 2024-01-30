import Link from "next/link";
import { MdAutoGraph } from "react-icons/md";

const Logo = ({ to, title }: { to: string; title?: string }) => {
  return (
    <Link
      className=" h-[4rem] w-auto max-w-[10rem] flex justify-start px-0 rounded-sm items-center gap-3"
      href={to}>
      <MdAutoGraph size={25} className="fill-green-400"/>

      {title && (
        <span className="capitalize font-bold text-lg text-900">{title}</span>
      )}
    </Link>
  );
};

export default Logo;

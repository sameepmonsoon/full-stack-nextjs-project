import Logo from "../Logo/Logo";
import { NavMenu } from "../NavMenu/NavMenu";
import { PiList } from "react-icons/pi";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input";
import UserIconContainer from "../UserIconContainer/UserIconContainer";
// import { UserIcon } from "lucide-react";

function AdminNav() {
  return (
    <div className="flex w-auto h-[4.5rem] justify-start items-center px-3 pt-0 pb-0 border-0 gap-5 border-b-[1px]">
      <div className="w-[15rem] flex justify-between items-center">
        <Logo to="/" title="Admin" />
        <span className="cursor-pointer   hover:text-[#EDE7F6] text-[#5E35B1] hover:bg-[#5E35B1] h-10 w-10  flex justify-center items-center rounded-[5px]">
          <PiList size={22} />
        </span>
      </div>
      <div>
        <Input type="text" placeholder="Search" />
      </div>
      {/* <NavMenu /> */}
      <div className="h-full w-auto flex justify-center items-center">
        <Button variant={"text"} size={"md"}>
          Login
        </Button>
        <UserIconContainer userIconTitle="Lorem Name And the " />
      </div>
    </div>
  );
}

export default AdminNav;

import Logo from "../Logo/Logo";
import { NavMenu } from "../NavMenu/NavMenu";
import { Button } from "../../ui/button";

function NavBar() {
  return (
    <div className="flex w-auto h-[7rem]  justify-between items-center p-20 pt-0 pb-0 border-0">
      <Logo to="/" title="School" />
      <div className="flex justify-center gap-0 items-center flex-1 h-full">
        <NavMenu />
        <div className="h-full w-auto flex justify-center items-center">
          <Button variant={"text"} size={"md"}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

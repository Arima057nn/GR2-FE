"use client";

import { UserContext } from "@/app/contexts/UserContext";
import { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
const Header = () => {
  const { user, dispatch } = useContext(UserContext);
  const router = useRouter();

  const hanldeLogout = () => {
    dispatch && dispatch({ type: "LOGOUT" });
    router.push("/login");
  };
  return (
    <div className="w-full bg-white p-4 shadow-md flex justify-around">
      <p className="text-2xl font-semibold">Request Gate</p>
      <div className="flex w-80 justify-between">
        {user && <p>Hello, {user.email} !</p>}
        <div className="cursor-pointer" onClick={hanldeLogout}>
          Logout {""}
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;

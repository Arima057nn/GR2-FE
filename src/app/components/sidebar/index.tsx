"use client";

import { UserContext } from "@/app/contexts/UserContext";
import Link from "next/link";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
const Sidebar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center w-full h-screen bg-[#3887BE]">
      <div className="mt-6">
        <div className="flex flex-col text-zinc-100">
          {user.role === 3 && (
            <>
              <div className="flex py-1">
                <AddIcon sx={{ marginRight: 1 }} />
                <Link href="/create">Create New Request</Link>
              </div>
              <div className="flex py-1">
                <HomeIcon sx={{ marginRight: 1 }} />
                <Link href="/list">My Request</Link>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col text-zinc-100">
          {user.role === 2 && (
            <>
              <div className="flex py-1">
                <HomeIcon sx={{ marginRight: 1 }} />
                <Link href="/manager/list">New Requests</Link>
              </div>
              <div className="flex py-1">
                <ArticleIcon sx={{ marginRight: 1 }} />
                <Link href="/manager/accept">Request Accepted</Link>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col text-zinc-100">
          {user.role === 1 && (
            <>
              <div className="flex py-1">
                <HomeIcon sx={{ marginRight: 1 }} />
                <Link href="/admin/list">New Requests</Link>
              </div>
              <div className="flex py-1">
                <ArticleIcon sx={{ marginRight: 1 }} />
                <Link href="/admin/processing">Request Processing</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

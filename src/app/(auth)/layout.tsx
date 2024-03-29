import type { Metadata } from "next";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/assets/images/bg.jpg')] h-screen bg-cover">
      <div className="flex w-full h-full justify-center items-center">
        {children}
      </div>
    </div>
  );
}

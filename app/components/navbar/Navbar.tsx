"use client";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";
import { usePathname, useRouter } from "next/navigation";
const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      {pathname === "/" && <Categories />}
    </div>
  );
};

export default Navbar;

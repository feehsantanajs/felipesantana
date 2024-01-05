import Link from "next/link";
import { usePathname } from "next/navigation";
interface HeaderLinkProps {
  path: string;
  name: string;
}

export function HeaderLink({ path, name }: HeaderLinkProps) {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <li
        className={`${
          pathname === path ? "text-white" : "text-slate-500"
        } cursor-pointer  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900`}
      >
        {name}
      </li>
    </Link>
  );
}

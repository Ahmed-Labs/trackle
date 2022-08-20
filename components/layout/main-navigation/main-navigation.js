import Link from "next/link";
import Button from "../../ui/button/main-button";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();

  return (
    <div className="items-center text-center bg-white h-screen flex flex-col w-[200px] border-r-2 pt-10">
      <Link href="/dashboard">
        <a>
          <h1 className="text-2xl font-bold mb-24 pt-6 hover">Trackle</h1>
        </a>
      </Link>
      <ul className="pt-6 w-full text-slate-500">
        <li
          className={`py-2 ${
            router.pathname === "/dashboard" &&
            "border-r-4 border-blue-600 text-black"
          }`}
        >
          <Link href="/dashboard">
            <a className="py-2.5 px-12 rounded hover:bg-slate-200 hover:text-black ease-in-out duration-300">
              Tracking
            </a>
          </Link>
        </li>

        <li
          className={`mt-4 py-2 ${
            router.pathname === "/dashboard/settings" &&
            "border-r-4 border-blue-600 text-black"
          }`}
        >
          <Link href="/dashboard/settings">
            <a className="py-2.5 px-12 rounded hover:bg-slate-200 hover:text-black ease-in-out duration-300">
              Settings
            </a>
          </Link>
        </li>
      </ul>
      <div className="mt-auto pb-8">
        <Button text="Logout" direct="/dashboard" />
      </div>
    </div>
  );
}

export default MainNavigation;

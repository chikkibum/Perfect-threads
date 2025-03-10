import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AuthButtons from "./AuthButtons";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  // test
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            perfect<span className="text-orange-500">Threads</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <AuthButtons user={user || null} isAdmin={isAdmin} />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

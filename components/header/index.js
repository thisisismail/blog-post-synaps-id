import Link from "next/link";

export default function HeaderSection() {
  return (
    <div className="header border-0 bg-grey-400 fixed top-0 w-full z-50 h-8 flex items-center rounded-b-lg">
      <div style={{ maxWidth: 1400 }} className="w-full border-0 mx-auto">
        <ul className="flex justify-between px-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function HeaderSection() {
  return (
    <div className="header border-2 bg-green-200 sticky top-0 w-full z-50">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}

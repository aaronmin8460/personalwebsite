import Link from "next/link";
import { JSX } from "react";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
  {/* Dark background overlay */}
  <div
    className={`fixed inset-0 bg-black transition-opacity duration-300 z-10 ${
      isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
  />

  {/* Sidebar content */}
  <div
    className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-20 transition-all duration-300"
    style={{
      opacity: isOpen ? "1" : "0",
      top: isOpen ? "0" : "-100%",
    }}
  >
<button className="absolute right-0 p-5 text-black" onClick={toggle}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    className="fill-black"  // explicitly set SVG fill
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
    />
  </svg>
</button>

    <ul className="sidebar-nav text-center leading-relaxed text-xl">
      <li><Link href="/about" onClick={toggle}>About Me</Link></li>
      <li><Link href="/blog" onClick={toggle}>Post</Link></li>
      <li><Link href="/leet" onClick={toggle}>Leet Code</Link></li>
      <li><Link href="/contacts" onClick={toggle}>Contacts</Link></li>
    </ul>
  </div>
</>

  );
};

export default Sidebar;
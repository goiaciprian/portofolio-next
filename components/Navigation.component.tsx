import links from "@/components/utils/links.navigation";

export function Navigation() {
  return (
    <div
      className="h-[10vh] hidden md:flex xl:flex 2xl:flex w-full fixed top-0 left-0 justify-end"
    >
      <div
        className="flex-row items-center justify-evenly h-full flex"
      >
        {links}
      </div>
    </div>
  );
}

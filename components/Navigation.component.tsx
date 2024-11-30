import links from "@/components/utils/links.navigation";

export function Navigation() {
  return (
    <div
      className="h-[10vh] w-full fixed top-0 left-0 flex justify-end"
    >
      <div
        className="flex-row items-center justify-evenly h-full flex"
      >
        {links}
      </div>
    </div>
  );
}

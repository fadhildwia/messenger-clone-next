import DesktopSidebar from "./DesktopSidebar";

async function Sidebar({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      {children}
    </div>
  )
}

export default Sidebar;

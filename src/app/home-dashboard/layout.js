import SidebarHome from "@/components/multiLavelSidebar";

const Homelayout = ({ children }) => {
  return (
    <div>
      <div className="flex h-screen w-full bg-gray-100">
        <SidebarHome />
        <div className="flex flex-col w-full h-full ml-64 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Homelayout;

import SideBar from "@/app/components/Dashboard/SideBar";

export default function layout({ children }) {
  
  return (
    <>  
      <div className="flex h-[100vh] pt-[10vh]">
        <SideBar/>
        <div>{children}</div>
      </div>
    </>
  );
}
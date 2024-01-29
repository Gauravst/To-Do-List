import SideBar from "@/app/components/Dashboard/SideBar";

export default function layout({ children }) {
  
  return (
    <>  
      <div className="flex h-[90vh]">
        <SideBar/>
        <div>{children}</div>
      </div>
    </>
  );
}
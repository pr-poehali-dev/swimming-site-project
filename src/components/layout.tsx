
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

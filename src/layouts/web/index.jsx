import { Outlet } from "react-router-dom";
import Header from "~/components/header";
const WebLayout = () => {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WebLayout;

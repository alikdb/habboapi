import NavbatItem from "./item";
import Container from "../container";
import { useBreakpoint } from "~/hooks/use-breakpoint";
import { Menu } from "lucide-react";
import { Drawer } from "vaul";
import { NAVBAR } from "~/utils/constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const { breakpoint } = useBreakpoint();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = (s) => {
    setOpenDrawer(s);
  };
  useEffect(() => {
    handleOpenDrawer(false);
  }, [location]);

  return (
    <div className="h-14 bg-cyan-950">
      <Container>
        {breakpoint !== "mobile" && (
          <div className="h-14 flex justify-between items-center ">
            <div className="flex gap-x-3">
              {NAVBAR.map((item, index) => {
                if (item.hidden) return null;
                return (
                  <NavbatItem key={index} name={item.name} path={item.path} />
                );
              })}
            </div>
            <div>
              <NavbatItem name="API" path="/api" />
            </div>
          </div>
        )}

        {breakpoint === "mobile" && (
          <div className="h-14 flex justify-end items-center">
            <button
              className="text-zinc-400 border-2 border-zinc-600 p-2 rounded shadow"
              onClick={() => handleOpenDrawer(!openDrawer)}
            >
              <Menu />
            </button>
            <Drawer.Root open={openDrawer} shouldScaleBackground>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Title> </Drawer.Title>
                <Drawer.Description> </Drawer.Description>
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                  <div className="p-4 bg-white rounded-t-[10px] flex-1">
                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />

                    <ul className="flex flex-col items-center text-xl gap-y-3">
                      {NAVBAR.map((item, index) => {
                        if (item.hidden) return null;

                        return (
                          <li key={"mobile-" + index}>
                            <Link to={item.path}>{item.name}</Link>
                          </li>
                        );
                      })}
                      <li>
                        <Link to="/api">API</Link>
                      </li>
                    </ul>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;

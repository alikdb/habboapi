import NavbatItem from "./item";
const Navbar = () => {
  return (
    <div className="h-14 flex gap-x-3 justify-center items-center bg-cyan-950">
      <NavbatItem name="Home" path="/" />
      <NavbatItem name="Badges" path="/badges" />
      <NavbatItem name="Furnis" path="/furnis" />
    </div>
  );
};

export default Navbar;

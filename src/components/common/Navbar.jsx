import collixy_logo from "../../assets/collixy-logo.svg";
import get_icon from "../../assets/get_started.png";

const Navbar = () => {
  return (
    <header className="w-screen h-fit fixed top-0 left-0 z-50 bg-white shadow-sm">
      <nav className="h-fit bg-amber-100 flex items-center justify-between px-8 py-0">
        {/* Logo */}
        <div className="flex items-center">
          <img src={collixy_logo} alt="Collixy Logo" className="h-50 w-auto" />
        </div>

        {/* Right Menu */}
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <h3 className="text-xl font-bold text-black cursor-pointer">
            About Us
          </h3>

          <button className="px-6 py-2 rounded-xl bg-[#0F2854] text-white text-lg font-primary">
            Login
          </button>

          <button className="flex items-center gap-2 px-5 py-2 rounded-xl font-primary bg-[#0a84ff3f] text-blue-700 text-lg">
            <img src={get_icon} alt="Get started" className="h-5 w-5" />
            <span>Get started</span>
          </button>

          <button className="text-sm font-medium">Toggle</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

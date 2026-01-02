import collixy_logo from "../../assets/collixy-logo.svg";
import get_icon from "../../assets/get_started.png";

const Navbar = () => {
  return (
    <div className="h-screen w-auto flex justify-between items-center">
      <div className="bg-amber-400 max-h-fit max-w-fit">
        <img className="h-40 w-auto" src={collixy_logo} alt="Collixy Logo" />
      </div>
      <div className="h-auto w-fit flex flex-row gap-5 bg-amber-500 align-middle justify-center">
          <div className='text-3xl text-black font-bold align-middle justify-center'>
            <h3>About Us</h3>
          </div>
          <div>
            <button className='px-13 py-4 rounded-2xl bg-[#0F2854] text-3xl text-white font-primary '>
                Login
            </button>
          </div>
          <div className='overflow-hidden flex flex-row'>
            <button className='px-2 py- overflow-hidden flex flex-row font-bold text bg-[#0a84ff71] text-blue-700'>
                <img src={get_icon} alt="" className='h-10 w-10'/>
                Get started
            </button>
          </div>
          <div>
            <button>
                toggle
            </button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;

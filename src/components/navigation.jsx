import Shoelogo from "/logo.svg";
import cartImage from "/icon-cart.svg";
import avatar from "/image-avatar.png";
import { useState } from "react";

// const cartContent = document.getElementById("cartContent");
// const cart = document.getElementById("cart");

// cartContent.addEventListener("click", () => {
//   cart.classList.toggle("cart");
// });

function Nav() {
  const [cartHidden, setCartHidden] = useState(false);

  function toggleCart() {
    setCartHidden(!cartHidden);
  }

  return (
    <>
      <div className=" flex justify-between items-center">
        <div className=" flex">
          <a className=" pr-12" href="#">
            <img src={Shoelogo} alt="" />
          </a>
          <nav>
            <ul className="flex gap-4 text-neutral-700">
              <li className=" border-white border-[2.5px] border-transparent hover:border-[2.5px] hover:text-black hover:border-b-custom pb-[3rem]">
                <a className=" hover:font-medium" href="#">
                  Collections
                </a>
              </li>
              <li className=" border-white border-[2.5px] border-transparent hover:border-[2.5px] hover:text-black hover:border-b-custom pb-[3rem]">
                <a href="#">Men</a>
              </li>
              <li className=" border-white border-[2.5px] border-transparent hover:border-[2.5px] hover:text-black hover:border-b-custom pb-[3rem]">
                <a href="#">Women</a>
              </li>
              <li className=" border-white border-[2.5px] border-transparent hover:border-[2.5px] hover:text-black hover:border-b-custom pb-[3rem]">
                <a href="#">About</a>
              </li>
              <li className=" border-white border-[2.5px] border-transparent hover:border-[2.5px] hover:text-black hover:border-b-custom pb-[3rem]">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={toggleCart} id="cart" className=" mr-4 w-10 ">
            <img src={cartImage} alt="" />
          </button>
          <div
            id="cartContent"
            className={`${
              cartHidden ? "" : "hidden"
            } absolute top-0 right-0 w-[320px] h-[270px] mt-[95px] mr-[92px] bg-white shadow-xl rounded-md`}
          >
            <h1 className=" font-bold text-[17px] mx-4 mt-4 mb-6">Cart</h1>
            <div class=" mb-[3rem] text-black border-[1.5px] "></div>
            <h1 className=" text-center text-[22px] text-slate-600 ">
              Your cart is empty
            </h1>
          </div>

          <button className=" w-10 hover: border-2  hover:border-custom transition rounded-full duration-300">
            <img src={avatar} alt="" />
          </button>
        </div>
      </div>
      <div className=" mb-[3rem] text-black border-[1.5px] "></div>
    </>
  );
}
export default Nav;

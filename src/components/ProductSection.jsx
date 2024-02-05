import ImageProduct from "/image-product-1.jpg";
import Imagedone from "/image-product-1-thumbnail.jpg";
import Imagedtwo from "/image-product-2-thumbnail.jpg";
import Imagedthree from "/image-product-3-thumbnail.jpg";
import Imagedfour from "/image-product-4-thumbnail.jpg";
import cartImage from "/icon-cart.svg";
import { useState } from "react";

function ProductSection() {
  const [num, addNum] = useState(1);
  const addNumber = () => {
    addNum(num + 1);
  };
  const reduceNumber = () => {
    if (num > 0) {
      addNum(num - 1);
    }
  };

  const [selectedImage, setSelectedImage] = useState(ImageProduct);

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <div className=" mr-36">
          <img
            className=" w-[33rem] h-[33rem] border-[3px] border-custom rounded-[30px]"
            src={selectedImage}
            alt=""
          />
          <div className="flex mt-5 justify-between w-[33rem] ">
            <img
              className="border-transparent w-[7rem] h-[7rem] hover:border-[3px] hover:opacity-30 active:border-custom transition rounded-xl"
              src={Imagedone}
              alt=""
              onClick={() => handleImageClick(Imagedone)}
            />
            <img
              className="border-transparent w-[7rem] h-[7rem] hover:border-[3px]  hover:opacity-30  active:border-custom transition rounded-xl "
              src={Imagedtwo}
              alt=""
              onClick={() => handleImageClick(Imagedtwo)}
            />
            <img
              className="border-transparent w-[7rem] h-[7rem] hover:border-[3px] hover:opacity-30 active:border-custom transition rounded-xl"
              src={Imagedthree}
              alt=""
              onClick={() => handleImageClick(Imagedthree)}
            />
            <img
              className="border-transparent w-[7rem] h-[7rem] hover:border-[3px] hover:opacity-30 active:border-custom transition rounded-xl"
              src={Imagedfour}
              alt=""
              onClick={() => handleImageClick(Imagedfour)}
            />
          </div>
        </div>
        <div className="rgt">
          <p className=" uppercase text-[12px] font-semibold mb-3 tracking-[2px] text-custom">
            Sneaker Company
          </p>
          <h1 className="text-[38px] leading-9 tracking-[2px] font-bold w-[25rem] mb-7 text-black">
            Fall Limited Edition Sneakers
          </h1>
          <p className=" text-gray-600 w-[26rem]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className=" mt-5 flex gap-[20px] items-center">
            <h1 className=" font-bold text-3xl"> $125.00</h1>
            <p className="bg-custom2 px-4 py-1 rounded-lg text-custom">50%</p>
          </div>
          <p className=" stroke-slate-700 line-through mt-2">$250.00</p>

          <div className="mt-16 flex justify-between gap-5 items-center">
            <div className=" py-3 px-[4rem] rounded-md bg-custom3 flex gap-6">
              <button>
                <h1 className="text-custom text-[20px]" onClick={addNumber}>
                  +
                </h1>
              </button>
              <div className="text-[20px] font-bold">{num}</div>
              <button className="">
                <h1 className="text-custom text-[20px]" onClick={reduceNumber}>
                  -
                </h1>
              </button>
            </div>
            <button
              className=" bg-custom text-white px-[4rem] py-3 rounded-md flex items-center justify-center gap-4 hover:shadow-yellow
             hover:bg-orange-300"
            >
              <img
                className="white"
                src={cartImage}
                style={{ color: "white" }}
                alt=""
              />
              <h1 className="text-[20px]">Add to Cart</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;

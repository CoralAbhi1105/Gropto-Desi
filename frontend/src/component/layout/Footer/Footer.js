import React, { useEffect } from "react";
import { clearErrors, getAccessories } from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
// import "./Footer.css";

const Footer = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const { error, categories } = useSelector((state) => state.accessories);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAccessories());
  }, [dispatch, error, alert]);


  return (

    <footer className="w-10/12 mx-auto">
      <div className="flex">
        <div className="w-1/2">
          <div className="py-5"><span className="font-bold text-lg font-mono">Categories</span> <span
            className="ml-2 text-green-700 cursor-pointer">see all</span></div>
          <div className="grid grid-cols-2 text-sm text-gray-600 gap-2 font-sans font-normal">

          {categories && categories.map((category) => (
            <Link to={`/products/${category._id}/${category.productCategory}`}>
            <span className="cursor-pointer">{category.productCategory}</span>
            </Link>
            ))}

          </div>
        </div>
        <div className="w-1/2">
          <div className="py-5"><span className="font-bold text-lg font-mono">Usefull Links</span></div>
          <div className="grid grid-cols-3 text-sm text-gray-600 gap-2 font-sans font-normal">
            <span className="cursor-pointer">jskdbf</span>
            <span className="cursor-pointer">jskdbf</span>
            <span className="cursor-pointer">jskdbf</span>
            <span className="cursor-pointer">jskdbf</span>
            <span className="cursor-pointer">jskdbf</span>
            <span className="cursor-pointer">jskdbf</span>
          </div>
        </div>
      </div>

      <div>
        <div className="py-5"><span className="font-bold text-lg font-mono">Brands</span> <span
          className="ml-2 text-green-700">see all</span></div>

        <ul className="flex flex-wrap text-sm text-gray-600 font-sans font-normal gap-y-3 gap-x-8 list-none">
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
          <li className="cursor-pointer ">jskdbf</li>
        </ul>

      </div>


      <div>
        <div className="py-5"><span className="font-bold text-lg font-mono">Associate Partner</span></div>

        <ul className="flex flex-wrap justify-around items-center">
          <li className="cursor-pointer border border-gray-300 rounded-md m-1"><img className="h-14 px-3" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" alt="imagehu" /></li>
          <li className="cursor-pointer border border-gray-300 rounded-md m-1"><img className="h-14 px-3" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" alt="imagehu" /></li>
          <li className="cursor-pointer border border-gray-300 rounded-md m-1"><img className="h-14 px-3" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" alt="imagehu" /></li>
          <li className="cursor-pointer border border-gray-300 rounded-md m-1"><img className="h-14 px-3" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" alt="imagehu" /></li>
          <li className="cursor-pointer border border-gray-300 rounded-md m-1"><img className="h-14 px-3" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" alt="imagehu" /></li>
          <li className="cursor-pointer border border-gray-300 rounded-md m-1"><img className="h-14 px-3" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" alt="imagehu" /></li>
        </ul>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 col-gap-12 row-gap-16 p-4 mt-8 my-3">
        <div className="flex justify-cente text-xs items-center text-gray-600 font-sans">© Gropto All Rights Reserved</div>
        <div className="flex justify-around text-sm items-center text-gray-600 font-sans font-bold"> <span>Downloap App</span> <img className="h-7" src="https://blinkit.com/d61019073b700ca49d22.png" alt="imac" /> <img className="h-7" src=" https://blinkit.com/8ed033800ea38f24c4f0.png" alt="andoi"  /> </div>
        <div className="flex justify-end"> <a href="http://"><img className="h-10" src="https://blinkit.com/22eb5fa23ba3b6609751.png" alt="againimage" /></a> <a href="http://"><img className="h-10" src="https://blinkit.com/22eb5fa23ba3b6609751.png" alt="wrong"  /></a> </div>
      </div>


    </footer>

  );
};

export default Footer;

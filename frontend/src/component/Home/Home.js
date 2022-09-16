import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import CategoryCard from "./CategoryCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getAccessories } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, categories } = useSelector((state) => state.accessories);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAccessories());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Gropto series 0.2" />


          <section className="container">

            <div className="md:flex justify-center sm:inline hidden">
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg" alt="groptoBanner1"></img>
            </div>

            <div className="md:flex justify-center sm:inline hidden">
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-06/downloap-app_web_0.png" alt="Banner2"></img>
            </div>

            <div>
              Yhape ayega ek ads slider like like gropto
            </div>


            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 col-gap-12 row-gap-8">
             {categories && categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
                       
           </div>


          </section>



          {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div> */}


          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products && products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

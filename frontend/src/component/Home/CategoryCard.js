import React from "react";
import { Link } from "react-router-dom";



const CategoryCard = ({ category }) => {
 
    return (

        <div className="flex flex-col items-center gap-2 px-2 py-2 relative">
            <Link className="categoryCard flex flex-col items-center text-center group" to={`/products/${category._id}/${category.productCategory}`}>
                <div className="w-40 h-40">
                    <img className="w-full h-full object-contain" src={category.categoryImage} alt={category.productCategory} />
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;

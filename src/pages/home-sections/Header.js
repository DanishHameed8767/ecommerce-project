import React, { useMemo } from "react";
import featureImg2 from "../../images/Featured/Apple-iPhone-11-PNG-Image.png";
import featureImg3 from "../../images/Featured/domino-164_6wVEHfI-unsplash.png";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories } from "../../features/profile/AdminSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllProductsByCategoryAsync, selectAllProducts } from "../../features/product/productSlice";
import { capitalizeAllWords, shuffle } from "../../app/constant";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const selectProducts = useSelector(selectAllProducts);
  const rawCategory = [...new Set(selectProducts.map(product=>product.category))];
  console.log(rawCategory)
  const categories = shuffle([...rawCategory]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <div className="list-group col-3 d-none d-md-block header-cat">
          {categories.map((value) => {
            const capWords = capitalizeAllWords(value);
            const handleClick = () => {
              navigate(`/categories/${value}`);
            };
            return (
              <a
                role="button"
                onClick={handleClick}
                className="list-group-item cursor-pointer border-0 text-end fs-5"
              >
                {capWords}
              </a>
            );
          })}
        </div>
        <div className="vr p-0 d-none d-md-block" style={{ height: "370px", width: "1px" }}></div>
        <div className="container col-md-8 d-flex flex-row justify-content-between align-items-center" style={{backgroundColor:"green"}}>
          <div className="row">
          <div className="col-5 mb-3">
            <div className="d-flex flex-row mt-3 align-items-start">
              <div className="fs-6 fw-light text-white mt-4 ms-4">
                iPhone 11 Pro Max
              </div>
            </div>
            <div className="fs-1 fw-normal text-white ms-3">
              Up to 10% off Voucher
            </div>
            <Link
              to="/products/6693628143ed75d4b2a9b9fc"
              className="ms-3 text-decoration-none text-white border-bottom border-white"
              >
              Shop now
            </Link>
          </div>
          <div className="col-7 d-flex flex-row-reverse">
          <img src={featureImg2} className="img-fluid ms-md-auto" alt="" />
          </div>
              </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;


function genRandom(){
  const arrNum = [1,2,3];
  const randomNumber = Math.floor((Math.random() * 3) + 1);
  const filter = arrNum.filter(num=>num==randomNumber);
  return filter[0];
}
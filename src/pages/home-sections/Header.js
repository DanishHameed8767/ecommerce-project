import React from "react";
import bgimg from "../../images/1.png";
import AppleLogo from "../../images/apple-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories } from "../../features/profile/AdminSlice";
import { useNavigate } from "react-router-dom";
import { fetchAllProductsByCategoryAsync } from "../../features/product/productSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectAllCategories);
  return (
    <>
      <div className="row container-fluid">
        <div className="list-group col-3">
          {categories.map((value) => {
            const val = value.category;
            const abc = val.charAt(0).toUpperCase();
            const category = abc + val.slice(1);

            const handleClick = () => {
              dispatch(fetchAllProductsByCategoryAsync({ category: category }));
              navigate("/products/view");
            };
            return (
              <a
                role="button"
                onClick={handleClick}
                className="list-group-item cursor-pointer border-0 text-end fs-5"
              >
                {category}
              </a>
            );
          })}
        </div>
        <div className="vr p-0" style={{ height: "370px", width: "1px" }}></div>
        <div className="container bg-black col-8 d-flex flex-row justify-content-between mt-3">
          <div>
            <div className="d-flex flex-row mt-3 align-items-start">
              <img
                src={AppleLogo}
                className="object-fit-contain mt-2 ms-3"
                style={{ width: "40px" }}
                alt=""
              />
              <div className="fs-6 fw-light text-white mt-4 ms-4">
                iPhone 14 Series
              </div>
            </div>
            <div className="fs-1 fw-normal text-white ms-3">
              Up to 10% off Voucher
            </div>
            <a
              href="..."
              className="ms-3 text-decoration-none text-white border-bottom border-white"
            >
              Shop now
            </a>
          </div>
          <img src={bgimg} className="img-fluid" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;

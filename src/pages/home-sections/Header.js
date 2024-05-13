import React, { useMemo } from "react";
import featureImg1 from "../../images/Featured/1.png";
import featureImg2 from "../../images/Featured/Apple-iPhone-11-PNG-Image.png";
import featureImg3 from "../../images/Featured/domino-164_6wVEHfI-unsplash.jpg";
import AppleLogo from "../../images/apple-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories } from "../../features/profile/AdminSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllProductsByCategoryAsync } from "../../features/product/productSlice";
import { shuffle } from "../../app/constant";
const Header = () => {
  const dispatch = useDispatch();
  // const arrNum = [1,2,3];
  // const randomNumber = Math.floor((Math.random() * 3) + 1);
  const filter = useMemo(()=>genRandom(),[]);

  const navigate = useNavigate();
  const selectCategory = useSelector(selectAllCategories);
  const categories = shuffle([...selectCategory]);
  console.log(categories);
  return (
    <>
      <div className="row container-fluid">
        <div className="list-group col-3">
          {categories.filter((x,i,arr)=>i<9).map((value) => {
            const cat = value.category;
            const words = cat.split(' ');
            words.forEach((element,i,arr) => {
              const fst_letter = element.charAt(0).toUpperCase();
              arr[i] = fst_letter + element.slice(1);
            });
           const capWords = words.join(' ');
           console.log(capWords)

            const handleClick = () => {
              dispatch(fetchAllProductsByCategoryAsync({ category: cat }));
              navigate("/products/view");
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
        <div className="vr p-0" style={{ height: "370px", width: "1px" }}></div>
        {filter==1 && <div className="container col-6 col-md-8 col-sm-12 d-flex flex-row justify-content-between mt-3 align-items-center" style={{backgroundColor:"black"}}>
          <div>
            <div className="d-flex flex-row mt-3 align-items-start">
              {/* <img
                src={AppleLogo}
                className="object-fit-contain mt-2 ms-3"
                style={{ width: "40px" }}
                alt=""
              /> */}
              <div className="fs-6 fw-light text-white mt-4 ms-4">
                iPhone 14 Series
              </div>
            </div>
            <div className="fs-1 fw-normal text-white ms-3">
              Up to 10% off Voucher
            </div>
            <Link
              to="products/details/66404c55ed8d0a1edabfeef8"
              className="ms-3 text-decoration-none text-white border-bottom border-white"
            >
              Shop now
            </Link>
          </div>
          <img src={featureImg1}  height="344x" alt="" />
        </div>}
        {filter==2 && <div className="container col-6 col-md-8 col-sm-12 d-flex flex-row justify-content-between mt-3 align-items-center" style={{backgroundColor:"green"}}>
          <div>
            <div className="d-flex flex-row mt-3 align-items-start">
              {/* <img
                src={AppleLogo}
                className="object-fit-contain mt-2 ms-3"
                style={{ width: "40px" }}
                alt=""
              /> */}
              <div className="fs-6 fw-light text-white mt-4 ms-4">
                iPhone 11 Pro Max
              </div>
            </div>
            <div className="fs-1 fw-normal text-white ms-3">
              Up to 10% off Voucher
            </div>
            <Link
              to="/products/details/66404d18ed8d0a1edabfeef9"
              className="ms-3 text-decoration-none text-white border-bottom border-white"
            >
              Shop now
            </Link>
          </div>
          <img src={featureImg2}  height="398px" alt="" />
        </div>}
        {filter==3 && <div className="container col-6 col-md-8 col-sm-12 d-flex flex-row justify-content-between mt-3 align-items-center" style={{backgroundColor:"#cb081e"}}>
          <div>
            <div className="d-flex flex-row mt-3 align-items-start">
              {/* <img
                src={AppleLogo}
                className="object-fit-contain mt-2 ms-3"
                style={{ width: "40px" }}
                alt=""
              /> */}
              <div className="fs-6 fw-light text-white mt-4 ms-4">
              Nike Sole Revolution
              </div>
            </div>
            <div className="fs-1 fw-normal text-white ms-3">
              Up to 7% off Voucher
            </div>
            <Link
              to="/products/details/66404b93ed8d0a1edabfeef7"
              className="ms-3 text-decoration-none text-white border-bottom border-white"
            >
              Shop now
            </Link>
          </div>
          <img src={featureImg3}  height="398px" alt="" />
        </div>}
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
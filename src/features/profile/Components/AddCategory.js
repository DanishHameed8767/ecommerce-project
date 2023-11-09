import React from "react";
import ProfileNavbar from "./ProfileNavbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryAsync, addSubCategoryAsync, fetchAllCategoriesAsync, selectAllCategories } from "../AdminSlice";
import { useState } from "react";

export default function AddCategory() {
  const [category, setCategory] = useState("");
  const [chooseCategory, setChooseCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);

  const handleAddCategory = () => {
    const data = {
      category:category,
      subCategory:[]
    }
    dispatch(addCategoryAsync(data));
    setCategory("");
  };

  const handleAddSubCategory = () => {
    if(chooseCategory === ''){return}
    else{

      const Arr = categories.filter(item=>item.category===chooseCategory)[0].subCategory;
      const arr2 = Arr.slice();
      arr2.push(subCategory)
      const data = {category:chooseCategory,subCategory:arr2}
      console.log(data);
      dispatch(addSubCategoryAsync(data));
      setSubCategory("");
    }
  };

  const onChangeCat = (e) => {
    setCategory(e.target.value);
  };

  const onChangeSubCat = (e) => {
    setSubCategory(e.target.value);
  };

  const handleSelectCategory = (e) =>{
      // if(e.target.value === ''){return}
      setChooseCategory(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchAllCategoriesAsync());
  }, []);
  return (
    <>
      <ProfileNavbar />
      <div className="container-fluid mt-3">
        <div className="d-flex justify-content-center">
          <div>
            <div className="container d-flex justify-content-center">
              <div style={{ marginLeft: "135px" }}>
                <input type="text" className="form-control"
                 value={category}
                 onChange={(e)=>onChangeCat(e)}
                 id="course-name" />
              </div>
              <div
                className="btn btn-primary mx-3"
                onClick={handleAddCategory}
                id="add-course"
              >
                Add Category
              </div>
              <div className="btn btn-primary" id="del-course">
                Delete Category
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="d-flex justify-content-center">
          <select className="btn btn-outline-secondary" id="choose-user" onChange={(e)=>handleSelectCategory(e)}>
            <option value="">Choose Category</option>
            {categories.map((value) => {
              const val = value.category;
              const abc = val.charAt(0).toUpperCase();
              const category = abc + val.slice(1);
              return <option value={category}>{category}</option>;
            })}
          </select>
          <div>
            <div className="container d-flex justify-content-center">
              <div>
                <input type="text"
                 value={subCategory}
                 onChange={(e)=>onChangeSubCat(e)}
                 className="form-control" id="user-name" />
              </div>
              <div className="btn btn-primary mx-3" id="add-user" onClick={handleAddSubCategory}>
                Add Sub Category
              </div>
              <div className="btn btn-primary" id="del-user">
                Delete Sub Category
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

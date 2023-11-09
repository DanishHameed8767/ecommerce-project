import JoditEditor from "jodit-react";
import React, { useState, useRef } from "react";
import { addProduct } from "../../product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileNavbar from "./ProfileNavbar";
import { fetchAllCategoriesAsync, selectAllCategories } from "../AdminSlice";
import { useEffect } from "react";

export default function AddProduct() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);

  const [credentials, setCredentials] = useState({
    title: "",
    price: 0,
    stock: 0,
    discountPercentage: 0,
    thumbnail: "",
    category: "",
    subCategory: "",
    description: "",
    longDescription: "",
    rating: 0,
    images: [],
  });
  const [subCategories, setSubCategories] = useState([]);
  const editor = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", credentials.thumbnail);
    const img_response = await fetch("http://localhost:5000/uploadimage", {
      method: "POST",
      body: formData,
    });
    const imageName = await img_response.json();
    setCredentials({ ...credentials, thumbnail: imageName });
    setCredentials((state) => {
      console.log(state);
      return state;
    });
    // const response = await fetch("http://localhost:5000/addproduct", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(credentials),
    // });
    // const json = await response.json();
    // console.log(json);
    // dispatch(addProduct(json));
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onChangePic = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.files[0] });
  };

  const onChangeCat = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    const Arr = categories.filter((item) => item.category === e.target.value)[0]
      .subCategory;
    const arr2 = Arr.slice();
    setSubCategories(arr2);
  };

  const onChangeEditor = (e) => {
    setCredentials({ ...credentials, longDescription: e });
  };

  const onChangeNum = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  useEffect(() => {
    dispatch(fetchAllCategoriesAsync());
  }, []);

  return (
    <>
      <ProfileNavbar />
      <div className="container">
        <h1>Add Product</h1>
      </div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="product-title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="product-title"
            name="title"
            value={credentials.title}
            aria-describedby="emailHelp"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            value={credentials.price}
            className="form-control"
            name="price"
            id="product-price"
            aria-describedby="emailHelp"
            onChange={(e) => onChangeNum(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-discount" className="form-label">
            Product Discount
          </label>
          <input
            type="number"
            className="form-control"
            id="product-discount"
            value={credentials.discountPercentage}
            name="discountPercentage"
            aria-describedby="emailHelp"
            onChange={(e) => onChangeNum(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-stock" className="form-label">
            Product Stock
          </label>
          <input
            type="number"
            className="form-control"
            name="stock"
            id="product-stock"
            value={credentials.stock}
            aria-describedby="emailHelp"
            onChange={(e) => onChangeNum(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-thumbnail" className="form-label">
            Product Thumbnail
          </label>
          <input
            type="file"
            className="form-control"
            id="product-thumbnail"
            name="thumbnail"
            aria-describedby="emailHelp"
            onChange={(e) => onChangePic(e)}
          />
        </div>
        <div class="mb-3">
          <label for="product-category" class="form-label">
            Product Category
          </label>
          <select
            id="product-category"
            class="form-select"
            name="category"
            onChange={(e) => onChangeCat(e)}
          >
            <option value={credentials.category}>Choose Category</option>
            {categories.map((value) => {
              const val = value.category;
              const abc = val.charAt(0).toUpperCase();
              const category = abc + val.slice(1);
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
        <div class="mb-3">
          <label for="product-category" class="form-label">
            Product Sub Category
          </label>
          <select
            id="product-category"
            class="form-select"
            name="subCategory"
            onChange={(e) => onChange(e)}
          >
            <option value={credentials.category}>Choose Category</option>
            {subCategories.map((value) => {
              // const val = value.category;
              const abc = value.charAt(0).toUpperCase();
              const category = abc + value.slice(1);
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="product-short-desc" className="form-label">
            Product Short Description
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.description}
            id="product-short-desc"
            aria-describedby="emailHelp"
            name="description"
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="product-description" className="form-label">
            Product Long Description
          </label>
          <JoditEditor
            ref={editor}
            value={credentials.longDescription}
            name="longDescription"
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => {}} // preferred to use only this option to update the content for performance reasons
            onChange={(e) => {
              onChangeEditor(e);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

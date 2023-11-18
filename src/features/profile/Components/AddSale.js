import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileNavbar from "./ProfileNavbar";
import { addProductAsync, fetchAllCategoriesAsync, selectAllCategories } from "../AdminSlice";
import { useEffect } from "react";
import JoditEditor from "jodit-react";

export default function AddSale() {
  const dispatch = useDispatch();
  const editor = useRef(null);

  const [saleStock,setSaleStock] = useState(true);
  const [timeStock,setTimeStock] = useState(true);
  const day = 24 * 60 * 60 * 1000;
  const categories = useSelector(selectAllCategories);
  var imageName;
  const [subCategories, setSubCategories] = useState([]);
  const [salesData, setSalesData] = useState(null);
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
    type: "sale",
  });
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    const date = Date.now();
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", credentials.thumbnail);
    const img_response = await fetch("http://localhost:5000/uploadimage", {
      method: "POST",
      body: formData,
    });
    imageName = await img_response.json();
    if(!timeStock){
      setSalesData({ ...credentials, saleStarts: date, saleEnds: date + time,thumbnail: imageName });
    }
    else{
      setSalesData({...credentials, thumbnail: imageName });
    }
  };

  useEffect(() => {
    if (salesData == null) {
      return;
    } else {
        dispatch(addProductAsync(salesData));
    }
  }, [salesData]);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onChangeSaleType = (e) => {
    if(e.target.value === ''){
      setSaleStock(true);
      setTimeStock(true);
    }
    else if(e.target.value === 'stock'){
      setTimeStock(true);
      setSaleStock(false);
    }
    else{
      setTimeStock(false);
      setSaleStock(true);
    }
  }

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

  const onChangeTimeCat = (e) => {
    setTime(parseInt(e.target.value));
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
        <h1>Add Sale</h1>
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
          <label htmlFor="product-stock" className="form-label">
            Stock
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

        <div class="mb-3">
          <label for="sale-type" class="form-label">
            Sale Type
          </label>
          <select
            id="sale-type"
            class="form-select"
            name="saleType"
            onChange={(e) => onChangeSaleType(e)}
          >
            <option value=''>Choose</option>
            <option value="stock">Stock</option>
            <option value="time">Time</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="product-stock" className="form-label">
            Sale Stock
          </label>
          <input
            type="number"
            className="form-control"
            disabled={saleStock}
            name="saleStock"
            id="product-stock"
            value={credentials.saleStock}
            aria-describedby="emailHelp"
            onChange={(e) => onChangeNum(e)}
          />
        </div>
        <div class="mb-3">
          <label for="product-category" class="form-label">
            Sale Duration
          </label>
          <select
            id="product-category"
            class="form-select"
            disabled={timeStock}
            name="time"
            onChange={(e) => onChangeTimeCat(e)}
          >
            <option>Time</option>
            <option value={day}>1 Day</option>
            <option value={day * 3}>3 Days</option>
            <option value={day * 7}>7 Days</option>
            <option value={day * 15}>15 Days</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

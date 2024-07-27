import JoditEditor from "jodit-react";
import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArrivalsAsync, selectAllArrivals, selectAllCategories, updateArrivalAsync } from "../AdminSlice";
import { useRef } from "react";


export default function UpdateArrival() {
  const dispatch = useDispatch();
  const _path = "https://urban-cart-backend.vercel.app/images/";
  const selectArrivals = useSelector(selectAllArrivals);

  const [main, setMain] = useState({title:'',description:''});
  const [side1, setSide1] = useState({title:'',description:''});
  const [side2, setSide2] = useState({title:'',description:''});
  const [side3, setSide3] = useState({title:'',description:''});

  const mainImageStyle = {
    background: `url(${_path}${main.thumbnail}) no-repeat bottom`,
  }
  const side1ImageStyle = {
    background: `url(${_path}${side1.thumbnail}) no-repeat right`,
  }
  const side2ImageStyle = {
    background: `url(${_path}${side2.thumbnail}) no-repeat center`,
  }
  const side3ImageStyle = {
    background: `url(${_path}${side3.thumbnail}) no-repeat center`,
  }

  const handleUpdate = (e) => {
    switch (e.target.name) {
      case "main":
        setCredentials(main)
        break;
        case "side1":
        setCredentials(side1)
        break;
        case "side2":
        setCredentials(side2)
        break;
        case "side3":
        setCredentials(side3)
        break;
      default:
        break;
    }
  }
  
  const categories = useSelector(selectAllCategories);
  const [productData, setProductData] = useState(null);
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
    if(credentials.thumbnail.slice(0,6) !== 'image_'){
      const formData = new FormData();
      formData.append("image", credentials.thumbnail);
      const img_response = await fetch("https://urban-cart-backend.vercel.app/uploadimage", {
        method: "POST",
        body: formData,
      });
      var imageName = await img_response.json();
      setProductData({ ...credentials, thumbnail: imageName });
    }
    else{
      setProductData({ ...credentials})
    }
  };
  
  useEffect(() => {
    if (productData == null) {
      return;
    } else {
      const sendData = async () => {
        dispatch(updateArrivalAsync(productData));
      };
      sendData();
    }
  }, [productData, dispatch]);

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

  useEffect(()=>{
    if(selectArrivals){
      setMain(selectArrivals[0]);
      setSide1(selectArrivals[1]);
      setSide2(selectArrivals[2]);
      setSide3(selectArrivals[3]);
    }
  },[selectArrivals])

  useEffect(()=>{
    dispatch(fetchAllArrivalsAsync());
  },[dispatch])
  return (
    <>
      {selectArrivals && <div className="container-fluid">
        <section className="pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="mb-3 fs-2 ms-2 fw-bold">New Arrival</div>
              </div>
              <div className="col-12">
                <div className="row d-flex justify-content-evenly">
                  <div className="col-5 bgc-black px-0">
                      <button className="btn btn-danger position-absolute text-white" name="main" onClick={(e)=>{
                        handleUpdate(e)
                      }}>Update</button>
                    <div className="bcontent-4 text-white d-flex justify-content-end flex-column" style={mainImageStyle}>
                      <div className="fs-3 ms-4">{main.title}</div>
                      <p className="ms-4 mb-3 text-light">
                        {main.description}
                        </p>
                      <div className="mb-5">
                        <a
                          href="..."
                          className="ms-4 text-decoration-none text-white border-bottom border-white"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 px-0">
                    <div className="row">
                      <div className="col-12 px-0 bgc-black">
                            <button className="btn btn-danger position-absolute text-white" name="side1" onClick={(e)=>{handleUpdate(e)}}>Update</button>
                        <div className="bcontent-1 text-white d-flex justify-content-end flex-column" style={side1ImageStyle}>
                          <div className="fs-3 ms-3">{side1.title}</div>
                          <p className="ms-3 mb-3 text-light">
                            {side1.description}
                          </p>
                          <div className="mb-3">
                            <a
                              href="..."
                              className="ms-3 text-decoration-none text-white border-bottom border-white"
                            >
                              Shop now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-4 px-0">
                        <div className="d-flex justify-content-center">
                          <div className="py-0 bgc-black new-arrival-boxes">
                            <button className="btn btn-danger position-absolute text-white" name="side2" onClick={(e)=>{handleUpdate(e)}}>Update</button>
                            <div className="bcontent-2 text-white d-flex justify-content-end flex-column" style={side2ImageStyle}>
                              <div className="fs-3 ms-3">{side2.title}</div>
                              <p className="ms-3 mb-3 text-light">
                              {side2.description}
                              </p>
                              <div className="mb-3">
                                <a
                                  href="..."
                                  className="ms-3 text-decoration-none text-white border-bottom border-white"
                                >
                                  Shop now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="px-0 ms-4 bgc-black new-arrival-boxes">
                              <button className="btn btn-danger position-absolute text-white" name="side3" onClick={(e)=>{handleUpdate(e)}}>Update</button>
                            <div className="bcontent-3 d-flex justify-content-end flex-column" style={side3ImageStyle}>
                              <div className="fs-3 ms-3 text-white">
                              {side3.title}
                              </div>
                              <p className="ms-3 mb-3 text-light">
                              {side3.description}
                              </p>
                              <div className="mb-3">
                                <a
                                  href="..."
                                  className="ms-3 text-decoration-none text-white border-bottom border-white"
                                >
                                  Shop now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <button type="submit" className="btn btn-primary text-white">
          Submit
        </button>
      </form>
      </div>
      
      }
    </>
  );
}

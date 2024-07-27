import { Link } from "react-router-dom";

function OrderPlaced() {
    return (
      <>
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-sm-6 col-sm-offset-3">
              <br />
              <br /> <h2 className="text-danger">Success</h2>
              {/* <h3>Order #1</h3> */}
              <p style={{ fontSize: 20, color: "#5C5C5C" }}>
                Your order has been placed successfully.
              </p>
              <Link to="/" className="btn btn-danger me-3">
                Back to home
              </Link>
              <Link to="/orders" className="btn btn-danger">
                Check your orders
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }

export default OrderPlaced;


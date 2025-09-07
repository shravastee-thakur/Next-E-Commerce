"use client";
import Link from "next/link";
import React from "react";

const Product = ({ items }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <div
                key={product._id}
                className="col-lg-4 col-md-6 my-3 text-center d-flex justify-content-center align-items-center"
              >
                <div
                  className="card bg-dark-subtle text-dark"
                  style={{ width: "18rem" }}
                >
                  <Link href="/">
                    <div className="d-flex justify-content-center align-items-center p-3">
                      <img
                        src={product.imgSrc}
                        alt="img"
                        className="card-img-top"
                        style={{
                          width: "200px",
                          borderRadius: "10px",
                          border: "1px solid black",
                        }}
                      />
                    </div>
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-2">
                      ₹ {product.price}
                    </button>
                    <button className="btn btn-warning mx-2">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;

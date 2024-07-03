import React from "react";
import product3 from "../img/product-3.jpg"
import product5 from "../img/product-5.jpg"
import product7 from "../img/product-7.jpg"

const CartPage = () => {
    return (
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Products</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                        <img src={product3} class="img-fluid me-5" style={{width: '80px', height: '80px'}} alt="" />
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4">HIPPO Power Bank Fast Charging</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">IDR 209.000</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4" style={{width: '100px'}}>
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm text-center border-0" value="2" />
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">IDR 418.000</p>
                                </td>
                                <td>
                                    <button class="btn btn-md rounded-circle bg-light border mt-4" >
                                        <i class="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                        <img src={product5} class="img-fluid me-5" style={{width: '80px', height: '80px'}} alt=""  />
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4">Robot Power bank</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">IDR 135.000</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4" style={{width: '100px'}}>
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm text-center border-0" value="1" />
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">IDR 135.000</p>
                                </td>
                                <td>
                                    <button class="btn btn-md rounded-circle bg-light border mt-4" >
                                        <i class="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                        <img src={product7} class="img-fluid me-5" style={{width: '80px', height: '80px'}} alt="" />
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4">Redmi Power Bank</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">IDR 640.000</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4" style={{width: '100px'}}>
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm text-center border-0" value="1" />
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">IDR 640.000</p>
                                </td>
                                <td>
                                    <button class="btn btn-md rounded-circle bg-light border mt-4" >
                                        <i class="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mt-5">
                    <input type="text" class="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
                    <button class="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
                </div>
                <div class="row g-4 justify-content-end">
                    <div class="col-8"></div>
                    <div class="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                        <div class="bg-light rounded">
                            <div class="p-4">
                                <h1 class="display-6 mb-4">Cart <span class="fw-normal">Total</span></h1>
                                <div class="d-flex justify-content-between mb-4">
                                    <h5 class="mb-0 me-4">Subtotal:</h5>
                                    <p class="mb-0">IDR 1.930.000</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-0 me-4">Delivery</h5>
                                    <div class="">
                                        <p class="mb-0">Reguler: IDR 8.000</p>
                                    </div>
                                </div>
                                <p class="mb-0 text-end">Shipping to Jakarta.</p>
                            </div>
                            <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                <h5 class="mb-0 ps-4 me-4">Total</h5>
                                <p class="mb-0 pe-4">IDR 1.938.000</p>
                            </div>
                            <a href="/checkout">
                                <button class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
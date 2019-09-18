import React from 'react';
import './style.css';

function Coupon () {
    return (
    <div id="coupon">
        <div className = "row coupontitle">
            <div className = "col-12">  
                <div className = "row">
                    <div className = "col-12">
                        <h1>Coupon</h1>
                    </div>
                </div>
                <div className = "row d-flex justify-content-center mt-3">
                        <svg className = "d-flex justify-content-center">
                            <line x1="0" y1="0" x2="100%" y2="0" />
                        </svg>
                </div>
            </div>
        </div>
        <div className = "row d-flex justify-content-center">
            <div className = "col-10">
                <div className = "row">
                <div className = "col-4 couponcard">
                    <div className="card bg-dark text-white">
                      <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" className="card-img" alt="..."/>
                      <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                      </div>
                    </div>
                </div>
                <div className = "col-4 couponcard">
                    <div className="card bg-dark text-white">
                      <img src="https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" className="card-img" alt="..."/>
                      <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                      </div>
                    </div>
                </div>
                <div className = "col-4 couponcard">
                    <div className="card bg-dark text-white">
                      <img src="https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="card-img" alt="..."/>
                      <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                      </div>
                    </div>
                </div>
                </div>
            </div>         
        </div>      
    </div>
    )
}

export default Coupon;
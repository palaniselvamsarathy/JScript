import React, { useState } from 'react'

const Counter = () => {
    let [product,setProduct] = useState(
        {
            prod_Name:"Samsung",
            image:"https://www.91-img.com/pictures/154611-v3-samsung-galaxy-s23-5g-256gb-mobile-phone-large-2.jpg?tr=h-271,c-at_max,q-60,pr-true",
            price:"10000",
            qty:1
        }
    )
    let incrHandler = ()=>{
        setProduct({...product,qty:product.qty+1})
    }
    let decrHandler = ()=>{
        if(product.qty===1){
            setProduct({...product,qty:1})
        }
        setProduct({...product,qty:product.qty-1})
    }
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <table className="table">
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.prod_Name}</td>
                            <td><img src={product.image} alt="Something" height="50px"/></td>
                            <td>{product.price}</td>
                            <td><i className='fa fa-minus-circle' onClick={decrHandler}></i> {product.qty} <i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                            <td>{product.price * product.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Counter

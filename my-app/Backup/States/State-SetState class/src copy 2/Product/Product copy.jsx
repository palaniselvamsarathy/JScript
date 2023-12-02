import React from 'react'

class Product extends React.Component{
    state = {
        name:"Realme",
        image:'https://rukminim2.flixcart.com/image/416/416/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70',
        price:25999,
        qty:1
    }

    decrHandler =()=>{
        if(this.state.qty===1){
            return this.state.qty
        }
        this.setState({qty:this.state.qty-1})
    }

    incrHandler =()=>{
        this.setState({qty:this.state.qty+1})
    }

    render(){
        return <>
        <div>This is Product Component</div>
        <pre>{JSON.stringify(this.state)}</pre>
        <div>
            <div className="container mt-auto">
                <div className="row">
                    <div className="col">
                        <table className="table table-header">
                            <thead className="bg-light ">
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td><img src={this.state.image} height="100px"></img></td>
                                    <td>{this.state.price}</td>
                                    <td><i class="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i class='fa fa-plus-circle' onClick={this.incrHandler}></i>
                                    </td>
                                    <td>{this.state.qty * this.state.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    }
}

export default Product
import React, { Component } from 'react'

import data from './Data'

class Employee extends Component {
  render() {
    return (
      <div>
        <h1>hey</h1>
        <pre>{JSON.stringify(data)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className='table'>
                        <thead className='bg-dark text-white'>
                            <tr >
                                <th>ID</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Email</th>
                                <th>GEnder</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((dat)=>{
                                    return <tr key={dat.id}>
                                        <td>{dat.id}</td>
                                        <td>{dat.first_name}</td>
                                        <td>{dat.last_name}</td>
                                        <td>{dat.email}</td>
                                        <td>{dat.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Employee

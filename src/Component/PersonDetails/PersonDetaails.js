import React from 'react'
import './PersonDetails.css'
import { withRouter } from 'react-router-dom'

function PersonDetails(props){
const details = props.dat.map((detail,index)=>{
    return (<tr key={index}>
        <td>{detail.id}</td>
        <td>{detail.name}</td>
        <td>{detail.age}</td>
        <td>{detail.gender}</td>
        <td>{detail.email}</td>
        <td>{detail.phoneNo}</td>
    </tr>)
})
    return(
        <div className="personDetails">
        <table>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone no</th>
            </tr>
            {details}
        </table>
        <div className="logout" onClick={props.handleLogout}>Logout</div>
        </div>
    
    );
}

export default withRouter(PersonDetails);
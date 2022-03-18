import { useEffect, useState } from "react";
import axios from "axios"

export const Users = () => {
const [formData, setFormData] = useState([])

  useEffect(()=>{
    getData();
  },[])
  const getData =()=>{

    // const [houses, setForms] = useState({})
    axios.get("http://localhost:1342/users").then((res)=>{
      setFormData(res.data)
      console.log(res.data)

    })


  }

  return (
    <div>
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            {/* <th>Marital Status</th> */}
            <th>Salary</th>
          
          </tr>
        </thead>
        <tbody>
          {formData.map((user, index) => {
            console.log("formData",formData)
            return (
              <tr key = {user.id} className="userDetails">
                <td className="userId">{user.id}</td>
                <td className="userName">{user.username} </td>
                <td className="ownersName">{user.age}</td>
                <td className="address">{user.address}</td>
                <td className="address">{user.select}</td>
              
                <td className="areaCode">{user.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
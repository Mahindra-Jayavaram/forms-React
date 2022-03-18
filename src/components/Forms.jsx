import { useState, useEffect } from "react";
import axios from "axios";
// import users from "./forms/db.json"

export const Forms = ()=>{
    const [formData, setFormData] = useState({

        username : "",
        age : "",
        email: "",
        select :"",
        check : "",
        // check2
        salary : "",
    });

    const handleChange = (e) =>{
        const {id, value}  = e.target;

        setFormData({
            ...formData,
            [id] : value,
        });

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);


        axios.post("http://localhost:1342/users", formData).then(()=>{
            alert("User created Successfully")
        });
    }

    useEffect(()=>{
        getData();
      },[])
      const getData =()=>{
    
        // const [houses, setHouses] = useState({})
        axios.get("http://localhost:8080/houses").then((res)=>{
          setFormData(res.data)
          console.log(res.data)
    
        })
    
    
      }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Enter the Employee details</h2>
            <input id = "username" type = "text" placeholder="enter the name" onChange={handleChange} /> <br></br>
            <input id = "age" type = "number" placeholder="enter the age" onChange={handleChange} /><br></br>
            <input id = "address" type = " text" placeholder="enter the address" onChange={handleChange} /><br></br>
            <input id = "email" type = " text" placeholder="enter the email" onChange={handleChange} /><br></br>
            <select id="select" onChange={handleChange}>
                <option value = "Departments">Select the Department</option>
                <option value = "Finance">Finance</option>
                <option value = "HR">HR</option>
                <option value = "Marketing">Marketing</option>
                <option value = "Production">Production</option>
            </select><br></br>
            Marital Status<input id = "check" type = "checkbox" value="Yes" onChange={handleChange}/>Yes
            <input id = "check" type = "checkbox" value="No" onChange={handleChange}/>No<br></br>
            <input id = "salary" type = "number" placeholder="salary" onChange={handleChange} /><br></br>
            <input type = "submit" />
        </form>
       {/* <table>
           <thead>
               <th>Name</th>
               <th>Age</th>
               <th>Email</th>
               <th>Department</th>
               <th>Salary</th>
           </thead>

           <tr>t</tr>
       </table> */}



        </>
    )




}
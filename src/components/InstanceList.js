
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Extras from './Extras';



function InstanceList() {

    let [year,setYear] = useState("");
    let [semester,setSemester] = useState("")
    let [instance,setInstance] = useState([]);
   
   
    
   

    let getInstance =()=>{
        axios.get(`http://localhost:8080/api/instances/${year}/${semester}`)
        .then((res)=>{console.log(res.data);
            setInstance(res.data)
           
        })
        .catch((err)=>{console.log(err)})

    }

    

   
    return (
        <div className='instanceList'>
            

            <div className='inputs' style={{marginTop:"20px"}} >
                <select  style={{border:"none"}} value={semester} onChange={(e)=>{setSemester(e.target.value)}}>
                    <option selected>Select semester</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
               
                <input type="text" className="form-control" id="year" placeholder='Year' style={{display:"inline-block",width:"100px",margin:"10px"}} value={year} onChange={(e) => { setYear(e.target.value) }}></input>
                <button className='btn btn-primary' style={{margin:"10px"}} onClick={getInstance}>list instance</button>
            </div>

            <Table striped bordered hover variant="light" className='list-course' style={{ "marginTop": "20px" }}>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Year-Sem</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instance.map((c) => {
                            return(
                            <Extras key={c.id} data={c}/>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default InstanceList
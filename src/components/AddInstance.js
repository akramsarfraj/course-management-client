import React, { useEffect, useState } from 'react'
import "../components/AddInstance.css"
import axios, { Axios } from 'axios'



function AddInstance() {
    let [courses,setCourses] = useState([])
    
    let [year,setYear] = useState("");
    let [semester,setSemester] = useState("")
    let [course_id,setCourse_id] =useState("")
    
    useEffect(()=>{
        axios.get("http://localhost:8080/api/courses")
        .then((res)=>{setCourses(res.data)})
        .catch((err)=>{console.log(err);})
    },[])

    
    let addinstance =()=>{
        axios.post("http://localhost:8080/api/instances",{year,semester,course_id})
        .then((res)=>{console.log(res);
            alert(res.data)
        })
        .catch((err)=>{console.log(err);
            alert(err.data)
        })

        // window.location.reload(false)
    }

 
    return (
        <div className='addinstance'>
            <div className='form-instance'>

                <div className='select-option'>

                    <select className='select' value={course_id} onChange={(e)=>{setCourse_id(e.target.value)}}>
                        <option value="Select Course"  selected>Select Course</option>
                        {   
                            courses.map((c)=>{
                                return(
                                <option key={c.id} value={c.id}>{c.course_code} {c.course_title}</option>
                                )
                            })   
                        }
                    </select>
                    <button className='btn btn-primary btn-sm' onClick={()=>{window.location.reload(false)}}>Refresh</button>
                </div>


                <div className='inputs' >
                    <input type="text" className="form-control" id="semester" placeholder='Semester' value={semester} onChange={(e)=>{setSemester(e.target.value)}}></input>
                    <input type="text" className="form-control" id="year" placeholder='Year' value={year} onChange={(e)=>{setYear(e.target.value)}}></input>
                </div>


                <button className='btn btn-primary' id='btn' onClick={addinstance}>Add instance</button>
            </div>

        </div>
    )
}

export default AddInstance
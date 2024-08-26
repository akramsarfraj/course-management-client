import React, { useState } from 'react'
import "../components/AddCourse.css"
import axios from 'axios';

function AddCourse() {

    let [course_title, SetTitle] = useState("");
    let [course_code, SetCode] = useState("");
    let [description, SetDescription] = useState("");
    

    let saveCourse=()=>{
        axios.post("http://localhost:8080/api/courses",{ 
            course_title,
            course_code,
            description
        }).then(
            (res)=>{console.log(res.status);
                alert(res.data)
            }
        ).catch(
            (err)=>{console.log(err)
                alert(err.data);}
        )
        window.location.reload(false)
    }

    return (
        <div className='addcourse'>
            <div className='form-course'>
                <input type="text" className="form-control" id="title" placeholder='Course title' value={course_title} onChange={(e) => { SetTitle(e.target.value) }}></input>

                <input type="text" className="form-control" id="code" placeholder='Course code' value={course_code} onChange={(e) => { SetCode(e.target.value) }}></input>

                <input type="text" className="form-control" id="descp" placeholder='Course description' value={description} onChange={(e) => { SetDescription(e.target.value) }}></input>

                <button className='btn btn-primary' id='btn' onClick={saveCourse}>Add Course</button>
            </div>

        </div>
    )
}

export default AddCourse
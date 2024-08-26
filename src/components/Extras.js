import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Extras({ data }) {

    let [course,setCourse]=useState({})

    useEffect(() => {
        axios.get(`http://localhost:8080/api/courses/${data.course_id}`)
            .then((res) => {
                setCourse(res.data)
                // console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    let deleteCourse=(c_id,year,semester)=>{
        console.log(c_id,year,semester);

        axios.delete(`http://localhost:8080/api/instances/${year}/${semester}/${c_id}`)
        .then((res)=>{console.log(res);})
        .catch((err)=>{console.log(err);})

        window.location.reload(false)
    }


    return (

        <tr >

            <td>{course.course_title}</td>
            <td>{data.year}-{data.semester}</td>
            <td>{course.course_code}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" id='trash' width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={() => {deleteCourse(course.id,data.year,data.semester)}}>
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
            </td>
        </tr>
    )
}

export default Extras
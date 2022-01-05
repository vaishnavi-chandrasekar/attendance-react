import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'



function Useredit() {
    let params = useParams()
    const formik = useFormik({
        initialValues: {
            Name: "",
            Class:"",
            Attendance: "",
            
        },
         onSubmit:async values => {
            try {
                await fetch(`https://61c4d7a4f1af4a0017d9981e.mockapi.io/user/${params.id}`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                alert("data saved")


            } catch (error) {
                console.log(error)
            }
        }
    })
     useEffect(async ()=>{
         try{
            let userdata=await fetch(`https://61c4d7a4f1af4a0017d9981e.mockapi.io/user/${params.id}`)
            let user= await userdata.json()
            formik.setValues(user)
         }catch (error){
             console.log(error)
         }
     },[])
      
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User Create</h1>

            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <label>Name</label>
                            <input type="text"
                                name='Name'
                                class="form-control" onChange={formik.handleChange}
                                value={formik.values.Name}
                            ></input>
                        </div>

                        <div className='col-lg-4'>
                            <label>Class</label>
                            <input type="text" 
                                name='Class'
                                class="form-control" onChange={formik.handleChange}
                                value={formik.values.Class}
                            ></input>
                        </div>

                        <div className='col-lg-4'>
                            <label>Attendance</label>
                            <input type="text" 
                                name='Attendance'
                                class="form-control" onChange={formik.handleChange}
                                value={formik.values.Attendance}
                            ></input>
                        </div>
                       
                        <div className='col-lg-3 mt-3'>
                            <input type="Submit" class="btn btn-primary"></input>
                        </div>

                    </div>
                </form>

               
            </div>

        </>
    )
}
export default Useredit
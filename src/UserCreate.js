import React from 'react'
import { useFormik } from 'formik'

function UserCreate() {
    const formik = useFormik({
        initialValues: {
            Name: "",
            Class: "",
            Attendance: "",

        },
        onSubmit: async values => {
            try {
                await fetch("https://61c4d7a4f1af4a0017d9981e.mockapi.io/user", {
                    method: "POST",
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
                            <input type="numerals" name='Class'
                                class="form-control" onChange={formik.handleChange}
                                value={formik.values.Class}
                            ></input>
                        </div>

                        <div className='col-lg-4'>
                            <label>Attendance</label>
                            <input type="text" name='Attendance'
                                class="form-control" onChange={formik.handleChange}
                                value={formik.values.Attendance}
                            ></input>
                        </div>

                        <div className='col-lg-3 mt-5'>
                            <input type="Submit" class="btn btn-primary"></input><br />

                        </div>
                    </div>
                </form>
                <form onReset={formik.handleReset}>
                    <div className='col-lg-3 mt-2'>
                        <input type="Reset" class="btn btn-primary"></input>
                    </div>

                </form>
            </div>
        </>
    )
}

export default UserCreate
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Userlist() {
    const [users,setUsers]= useState([])
    useEffect(async () =>{
        try{
            let items= await fetch ("https://61c4d7a4f1af4a0017d9981e.mockapi.io/user");
            let userdata=await items.json()
            setUsers(userdata)
        }catch (error) {
            console.log(error)
        }
    }, []) 
   


        
     return (
        <>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User list</h1>
                <Link to="/User-Create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>
        

<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
               
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Attendance</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Attendance</th>
                       
                        <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return <tr key={index}>
                        <td>{user.Name}</td>
                        <td>{user.Class}</td>
                        <td>{user.Attendance}</td>
                       
                        <td>
                            <Link to={`/User-edit/${user.id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>
                            <button className='btn btn-danger btn-sm'>Delete</button>
                            
                        </td>
                        </tr>
                        })
                    
}
                   
                </tbody>
            </table>
        </div>
    </div>
</div>
               
                 
                         
                </>
    )
}

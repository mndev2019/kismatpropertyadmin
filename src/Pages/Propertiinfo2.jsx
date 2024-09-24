//import React from 'react'

import { useEffect, useState } from "react"
import FormLabel from "../Layout/FormLabel"
import { BASE_URL } from "../Api/Base_url"
import axios from "axios"

const Propertiinfo2 = () => {
    const [postdata, setPostdata] = useState({
        title: '',
        property_type: '',
        building_type: ''
    })
    const handliinput = (e) => {
        setPostdata({ ...postdata, [e.target.name]: e.target.value })
        console.log(postdata)
    }
    const [propertyinfo, setPropertyinfo] = useState([]);
    const getpropertyinfo = async () => {
        axios.get(`${BASE_URL}propertyinfo`).then(resp => {
            console.log(resp)
            setPropertyinfo(resp.data.data)

        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(postdata)
        axios.post(`${BASE_URL}propertyinfo`, postdata).then(resp => console.log(resp))
            .catch(err => console.log(err))
    }
    const [getdata, setGetdata] = useState([])
    const getpropertytype = async () => {
        axios.get(`${BASE_URL}propertytype`).then(resp => {
            console.log(resp)
            setGetdata(resp.data.data)
        })

    }

    const [buildingtype, setBuildingtype] = useState([])
    const getbuildingtype = async () => {
        axios.get(`${BASE_URL}buildingtype`).then(resp => {
            console.log(resp)
            setBuildingtype(resp.data.data)
        })
    }
    /* delete api */

    const handledelete = async(id) =>{
        if(confirm("Are you sure to delete ?")){
            console.log(id)
            axios.delete(`${BASE_URL}propertyinfo/${id}`).then(resp=>{
                console.log('Deleted successfully:', resp.data)
                getpropertyinfo();
            })
        }
    }
    useEffect(() => {
        getpropertytype();
        getbuildingtype();
        getpropertyinfo();
    }, [])


    return (
        <>
            <section className="py-5">
                <div className="container">
                    <form action="post" onSubmit={handlesubmit}>
                        <div className="grid grid-cols-4 gap-4">

                           
                            <div className="col-span-1">
                                <FormLabel label="PROPERTY TYPE" />
                                <select onChange={handliinput} name="property_type" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Property Type---</option>
                                    {getdata.map((item) => (
                                        <option key={item.id} value={item._id}>
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="House Type" />
                                <select onChange={handliinput} name="building_type" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select House Type---</option>
                                    {
                                        buildingtype.map((itm) => (
                                            <>
                                                <option key={itm.id} value={itm._id}>
                                                    {itm.title}
                                                </option>
                                            </>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="title"
                                    id="title"
                                    onChange={handliinput}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    required

                                />
                            </div>
                            <div className="col-span-1 mt-5">
                                <button className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light">SUBMIT</button>
                            </div>

                        </div>
                    </form>
                    <div className="grid grid-cols-1 mt-5">
                        <div className="col-span-1">
                            <table className="w-full">
                                <thead>
                                    <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200">
                                        <th>
                                            Sr no
                                        </th>
                                        <th>Title</th>
                                        <th>Property Type</th>
                                        <th>House Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        propertyinfo.map((items, index) => (
                                            <>
                                                <tr key={items._id} className="*:text-start *:p-2 *:text-xs *:border *:border-blue-gray-200">
                                                    <td>{index + 1}</td>
                                                    <td>{items?.title}</td> {/* Ensure title is displayed */}
                                                    <td>{items?.property_type?.title}</td>
                                                    <td>{items?.building_type?.title}</td>
                                                    <td>
                                                        <div className="flex gap-3">
                                                            <button className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light" onClick={() => handleedit(items._id)}>Edit</button>
                                                            <button className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light" onClick={()=>handledelete(items._id)}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Propertiinfo2
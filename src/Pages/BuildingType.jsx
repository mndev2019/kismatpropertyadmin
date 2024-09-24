//import React from 'react'

import { useEffect, useState } from "react"
import FormLabel from "../Layout/FormLabel"
import axios from "axios"
import { BASE_URL } from "../Api/Base_url"


const BuildingType = () => {

    { /* post data api */ }
    const [postdata, setPostdata] = useState({
        title: ''
    })

    const handleinput = (e) => {
        setPostdata({ ...postdata, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        //console.log( postdata) line to check data pri is print in console
        console.log(postdata)
        if (edit_id) {
            await axios.put(`${BASE_URL}buildingtype/${edit_id}`).then(resp => console.log(resp))
                .catch(err => console.log(err))
            getbuidingtype();
            setEditId('')


        } else {
            await axios.post(`${BASE_URL}buildingtype`, postdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        }


    }


    { /* get data api */ }
    const [buildingdata, setbuildingdata] = useState([]);
    const getbuidingtype = async () => {
        axios.get(`${BASE_URL}buildingtype`).then(resp => {
            console.log(resp.data.data);
            setbuildingdata(resp.data.data);

        })
    }


    { /* delete data api */ }
    const handledelete = async (id) => {
        if (confirm('Are You Deleted ?')) {
            console.log(id)
            axios.delete(`${BASE_URL}buildingtype/${id}`).then(resp => {
                console.log("deleted successfully", resp.data)
                getbuidingtype();

            })
        }
    }


    { /* put/delete data api */ }
    const [edit_id, setEditId] = useState('')
    const handleedit = (id) => {
        setEditId(id)
        const found = buildingdata.find(item => item._id == id);
        console.log(found.title)
        if (found) {
            setPostdata(found.postdata)
        }
    }


    useEffect(() => {
        getbuidingtype();
    }, []);
    return (
        <>
            <section className="py-5">
                <div className="container mx-auto">
                    <form action="post" onSubmit={handlesubmit}>
                        <div className="grid grid-cols-4 gap-4">

                            <div className="col-span-1">
                                <FormLabel label="House Type" />
                                <input
                                    placeholder='Enter House Type'
                                    type="text"
                                    name="title"
                                    id="buildingtype"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    onChange={handleinput}
                                    required

                                />
                            </div>
                            <div className="col-span-1 pt-5">
                                <button type="submit" className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"
                                >SUBMIT</button>
                            </div>

                        </div>
                    </form>
                    <div className="grid grid-cols-1 mt-3">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200">
                                            <th>Sr no </th>
                                            <th>House Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            buildingdata.map((itm, index) => {
                                                return (
                                                    <>
                                                        <tr className='*:text-start *:p-2  *:text-xs *:border *:border-blue-gray-200'>
                                                            <td>{index + 1}</td>
                                                            <td>{itm.title}</td>
                                                            <td>
                                                                <div className="flex gap-3">
                                                                    <button onClick={() => handleedit(itm._id)} className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light">EDIT</button>
                                                                    <button onClick={() => handledelete(itm._id)} className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light">DELETE</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuildingType
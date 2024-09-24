//import React from 'react'

import { useEffect, useState } from "react"
import FormLabel from "../Layout/FormLabel"
import axios from "axios"
import { BASE_URL } from "../Api/Base_url"


const Propertyinfo = () => {
    const [title, setTitle] = useState('')

    const handleinput = (e) => {
        setTitle(e.target.value);
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(title)
        if (edit_id) {
            await axios.post(`${BASE_URL}propertytype/`, { title: title, id: edit_id }).then(resp => console.log(resp))
                .catch(err => console.log(err))
            getProperty();
            setEditId('')
        } else {
            await axios.post(`${BASE_URL}propertytype`, { title: title }).then(resp => console.log(resp))
            getProperty();
        }


    }
    {/* get data api */ }
    const [propertytype, setPropertytype] = useState([])
    const getProperty = async () => {
        axios.get(`${BASE_URL}propertytype`).then(resp => {
            setPropertytype(resp.data.data);
        })
    }
    const [edit_id, setEditId] = useState('')
    const handleedit = (id) => {

        setEditId(id);
        const found = propertytype.find(item => item._id == id);
        if (found) {
            setTitle(found.title)
        }
    }
    {/* delete data api */ }
    const handleDelete = async (id) => {
        if (confirm('Are you sure to delete ?')) {
            console.log(id)
            axios.delete(`${BASE_URL}propertytype/${id}`).then(resp => {
                console.log('Deleted successfully:', resp.data)
                getProperty();
            })

        }
    }

    useEffect(() => {
        getProperty();
    }, []);
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-4 gap-4 items-center">

                            <div className="col-span-1">
                                <FormLabel label="Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={title}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    onChange={handleinput}
                                    required

                                />
                            </div>
                            <div className="col-span-1 pt-4">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    SUBMIT
                                </button>
                            </div>

                        </div>
                    </form>


                    <div className="grid grid-cols-1 mt-3">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className='*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200'>
                                            <th>
                                                sr no
                                            </th>
                                            <th>Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            propertytype.map((itm, index) => (
                                                <>
                                                    <tr className='*:text-start *:p-2  *:text-xs *:border *:border-blue-gray-200'>
                                                        <td>
                                                            {index + 1}
                                                        </td>
                                                        <td>
                                                            {itm.title}
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-3">
                                                                <button onClick={() => handleedit(itm._id)} className="bg-primary text-xs uppercase  font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light" onClick={() => handleedit(itm._id)}>Edit</button>
                                                                <button onClick={() => handleDelete(itm._id)} className="bg-primary text-xs uppercase  font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light">Delete</button>
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
                </div>
            </section>
        </>
    )
}

export default Propertyinfo
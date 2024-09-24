//import React from 'react'

import { useEffect, useState } from "react"
import FormLabel from "../Layout/FormLabel"
import axios from "axios";
import { BASE_URL } from "../Api/Base_url";

const PropertyDetails = () => {
    const [propertytype, setPropertytype] = useState([]);
    const [buildingtype, setbuildingtype] = useState([]);
    //const [propertyinfo, setpropertyinfo] = useState([]);
    const getpropertytype = async () => {
        axios.get(`${BASE_URL}propertytype`).then(resp => (
            setPropertytype(resp.data.data)
        ))
    }
    const getbuildingtype = async () => {
        axios.get(`${BASE_URL}buildingtype`).then(resp => (
            setbuildingtype(resp.data.data)
        ))
    }

   {/* const getpropertyinfo = async () => {
        let requestdata = {
            building_type: "66ebbf9e3836b1a57c4bef45",
            property_type: "66ebd7c71ed29617c086ac42"

        }

        axios.post(`${BASE_URL}filterinfo`, requestdata).then(resp => (
            setpropertyinfo(resp.data.data)
        ))
    }
    const handleinput = (e) => {
        const { name, value } = e.target;  // Destructure name and value from event target
    
        console.log("Field name:", name);
        console.log("Field value:", value);
    
        if (name === "building_type" || name === "property_type") {
            // Validate if the value is empty
            if (value === "") {
                console.log("Validation triggered");
                alert(`Please select a ${name === "building_type" ? "House Type" : "property type"}`);
            }
        }
    
        // Update state after validation passes
        setpropertyinfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };*/}
    
``
    useEffect(() => {
        getpropertytype();
        getbuildingtype();
       

    }, []);

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4">
                            <div className="w-full p-1 text-xs bg-gray-200 text-primary">
                                Add Property Type
                            </div>
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="PROPERTY TYPE" />
                            <select name="property_type"   className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                <option value="">---Select Property Type---</option>
                                {
                                    propertytype.map((item) => (
                                        <>
                                            <option key={item.id} value={item._id}>
                                                {item.title}
                                            </option>
                                        </>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="House Type" />
                            <select name="building_type"  className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                <option value="">---Select House Type---</option>
                                {
                                    buildingtype.map((itm) => (
                                        <>
                                            <option key={itm.id} value={itm._id} >
                                                {itm.title}
                                            </option>
                                        </>
                                    ))
                                }

                            </select>
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="PROPERTY INFO" />
                            <select name="property_info" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                <option value="">---Select Property Info---</option>
                               {/* {
                                    propertyinfo.map((items) => (
                                        <>
                                            <option key={items.id} value={items._id} >
                                                {items.title}
                                            </option>
                                        </>
                                    ))
                                }*/}

                            </select>
                        </div>
                        <div className="col-span-4">
                            <div className="w-full p-1 text-xs bg-gray-200 text-primary">
                                Add Property Details
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Select City" />
                                <select name="city" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select City---</option>
                                   
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Locality" />
                                <input placeholder='Locality' type="text" name="locality" id="locality" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Apartment" />
                                <input placeholder='Apartment' type="text" name="apartment" id="apartment" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="House no" />
                                <input placeholder='House no' type="text" name="houseno" id="houseno" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2" />
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Apartment Type" />
                                <select name="apartmenttype" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Apartment Type---</option>
                                    <option value="">1 BHK</option>
                                    <option value="">2 BHK</option>
                                    <option value="">3 BHK</option>
                                    <option value="">4 BHK</option>
                                    <option value="">other</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="No of Bedroom" />
                                <select name="bedrooms" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select No of Bedroom---</option>
                                    <option value="">1 </option>
                                    <option value="">2 </option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Balconies" />
                                <select name="balconies" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select No of Balconies---</option>
                                    <option value="">0 </option>
                                    <option value="">1 </option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">more than 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="No of Bathroom" />
                                <select name="bathrooms" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select No of Bathroom---</option>
                                    <option value="">1 </option>
                                    <option value="">2 </option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Total Floor" />
                                <input placeholder='Total floor' type="text" name="totalfloor" id="totalfloor" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Property On Floor" />
                                <select name="propertyonfloor" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Property On Floor---</option>
                                    <option value="">1 </option>
                                    <option value="">2 </option>
                                    <option value="">3</option>
                                    <option value="">5</option>
                                    <option value="">6</option>
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">9</option>
                                    <option value="">11</option>
                                    <option value="">12</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Availability Status" />
                                <select name="availabilitystatus" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Availability Status---</option>
                                    <option value="">Ready to move </option>
                                    <option value="">Under construction </option>

                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Ownership" />
                                <select name="ownership" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Ownership---</option>
                                    <option value="">Freehold</option>
                                    <option value="">Leasehold</option>
                                    <option value="">Co-operative society</option>
                                    <option value="">Power of attorney</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Upload Property Images" />
                                <input
                                    type="file"
                                    name="propertyImages"
                                    id="propertyImages"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    accept="image/*"  // Allows only image files to be selected
                                    multiple  // Allows multiple images to be selected
                                />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="w-full">
                                <FormLabel label="WHAT MAKES YOUR PROPERTY UNIQUE" />
                                <textarea
                                    name="propertymessage"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    placeholder="Enter message"
                                    rows="4"  // Specifies the number of lines you want the textarea to have
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-span-1 pt-4">
                            <button className="bg-primary text-xs uppercase  font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light">
                                SUBMIT
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyDetails
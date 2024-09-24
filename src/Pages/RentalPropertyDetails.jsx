//import React from 'react'

import FormLabel from "../Layout/FormLabel"

const RentalPropertyDetails = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="grid grid-cols-4 gap-4">
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
                                <FormLabel label="FURNISHING" />
                                <select name="availabilitystatus" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Furnishing Type---</option>
                                    <option value="">Furnished</option>
                                    <option value="">Semi-Furnished</option>
                                    <option value="">Un-Furnished</option>
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
                                <FormLabel label=" Available From" />
                                <input
                                    placeholder="Date Available From"
                                    type="date"
                                    name="dateAvailableFrom"
                                    id="dateAvailableFrom"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Willing to rent out to" />
                                <select name="ownership" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Willing to rent out to ---</option>
                                    <option value="">Family</option>
                                    <option value="">Single men</option>
                                    <option value="">Single women</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Upload Property Image" />
                                <input
                                    type="file"
                                    name="propertyImage"
                                    id="propertyImage"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    accept="image/*"  // Allows only image files to be selected
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

export default RentalPropertyDetails
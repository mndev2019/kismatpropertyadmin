//import React from 'react'

import FormLabel from "../Layout/FormLabel"

const SelectProperty = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1">
                            <div className="w-full">
                                <FormLabel label="Select Property Type" />
                                <select name="job_type" className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2">
                                    <option value="">---Select Property Type---</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SelectProperty
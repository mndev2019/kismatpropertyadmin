//import React from 'react'
import { HomeFilled, WindowsFilled } from "@ant-design/icons"
import propertytype from '../assets/building.png'
import { Link } from "react-router-dom"
import { FaBuilding } from "react-icons/fa"
import { CiCircleInfo } from "react-icons/ci"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { TbListDetails } from "react-icons/tb"

const Sidebar = () => {
    return (
        <>

            <div className="w-full rounded-e-3xl h-[100%] overflow-x-hidden overflow-y-auto relative bg-white border border-primary ">


                <ul className="*:py-1 px-3 *:text-sm *:font-light *:text-primary">
                    {/*<li>
                        <Link to={''} className='w-full  py-2 ps-3 text-start block rounded-lg bg-primary text-white'>
                            <div className="w-full flex gap-3 items-center">
                                <div className="h-[40px] w-[40px] leading-[40px] text-center items-center bg-light rounded-md hover:bg-white">
                                    <WindowsFilled className="text-secondary text-xl hover:text-primary " />
                                </div>
                                <div className="text-white font-bold text-[15px] ">
                                    Dashboard
                                </div>
                            </div>
                        </Link>
                    </li>*/}
                    <li>
                        <Link to={'/property-type'} className='w-full  py-2 ps-3 text-start block rounded-lg bg-primary text-white'>
                            <div className="w-full flex gap-3 items-center">
                                <div className="h-[40px] w-[40px] flex justify-center items-center bg-light rounded-md hover:bg-white">
                                    <FaBuilding className="text-secondary text-xl hover:text-primary " />

                                </div>
                                <div className="text-white font-bold text-[15px] ">
                                    Property Type
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/house-type'} className='w-full  py-2 ps-3 text-start block rounded-lg bg-primary text-white'>
                            <div className="w-full flex gap-3 items-center">
                                <div className="h-[40px] w-[40px] leading-[40px] text-center items-center bg-light rounded-md hover:bg-white">
                                    <HomeFilled className="text-secondary text-xl hover:text-primary " />
                                </div>
                                <div className="text-white font-bold text-[15px] ">
                                    House Type
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/property-info'} className='w-full  py-2 ps-3 text-start block rounded-lg bg-primary text-white'>
                            <div className="w-full flex gap-3 items-center">
                                <div className="h-[40px] w-[40px] flex justify-center items-center bg-light rounded-md hover:bg-white">
                                    <IoMdInformationCircleOutline  className="text-secondary text-xl hover:text-primary " />
                                </div>
                                <div className="text-white font-bold text-[15px] ">
                                    Property Info
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/property-details'} className='w-full  py-2 ps-3 text-start block rounded-lg bg-primary text-white'>
                            <div className="w-full flex gap-3 items-center">
                                <div className="h-[40px] w-[40px] flex justify-center items-center bg-light rounded-md hover:bg-white">
                                    <TbListDetails className="text-secondary text-xl hover:text-primary " />
                                </div>
                                <div className="text-white font-bold text-[15px] ">
                                    Property Details
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
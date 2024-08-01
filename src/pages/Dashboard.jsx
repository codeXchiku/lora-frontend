import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { rawdata } from './rawdata';


const Dashboard = () => {

  return (
    <>
      <div className='flex-grow p-5 ml-12 mt-3 lg:ml-[250px] transition-all duration-1000'>

        <div className='flex'>


          {
            rawdata.map((data,index) => (
              <div className="max-w-60 bg-white shadow-lg rounded-lg overflow-hidden mr-3">

                <div className="bg-gray-800 p-4">
                  <h2 className="text-2xl text-white text-center">{data.name}</h2>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">
                    {data.description}
                  </p>
                </div>
                <Link to="/node"><p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md" >
                  Open Gateway
                </p></Link>
              </div>
            ))
          }

        </div>

      </div>
    </>
  )
}

export default Dashboard
import React, { useState } from 'react'
import Modal from './Modal';

const Gateway = () => {
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState('');

    const handleButtonClick = (detail) => {
        setDetails(detail);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className='flex-grow p-5 ml-12 mt-3 lg:ml-[250px] transition-all duration-1000'>

                <div className='flex'>

                    <div className="max-w-60 bg-white shadow-lg rounded-lg overflow-hidden mr-3">
                        <div className="bg-gray-800 p-4">
                            <h2 className="text-2xl text-white text-center">Node1</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-700">
                                This is the content of the card. The card is responsive and adjusts its size based on the screen width.
                            </p>
                        </div>
                        <div className='text-center'>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md" onClick={() => handleButtonClick('Details for Node1')}>
                                view details
                            </button>
                        </div>
                    </div>

                    <div className="max-w-60 bg-slate-200 shadow-lg rounded-lg overflow-hidden">
                        <div className="bg-gray-800 p-4">
                            <h2 className="text-2xl text-white text-center">Node2</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-700">
                                This is the content of the card. The card is responsive and adjusts its size based on the screen width.
                            </p>
                        </div>
                        <div className='text-center'>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md" onClick={() => handleButtonClick('Details for Node2')}>
                                view details
                            </button>
                        </div>
                    </div>

                    <Modal show={showModal} handleClose={handleClose} details={details}/>

                </div>

            </div>
        </>
    )
}

export default Gateway
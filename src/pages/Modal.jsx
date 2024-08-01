import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import AreaGraph from '../components/AreaGraph';


const Modal = ({ show, handleClose, details }) => {
    return (

        <div style={{ display: show ? 'block' : 'none' }} className=' fixed max-h-full w-4/5 bg-slate-300 p-5 shadow-2xl z-0 rounded-lg'>
            <div className='flex flex-wrap '>

                <div className="flex-1 p-4">
                    <AreaGraph />
                </div>

                <div className='flex-1 p-4 overflow-x-auto'>
                    <table className="min-w-full border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">Column 1</th>
                                <th className="border border-gray-400 px-4 py-2">Column 2</th>
                                <th className="border border-gray-400 px-4 py-2">Column 3</th>
                                <th className="border border-gray-400 px-4 py-2">Column 4</th>
                                <th className="border border-gray-400 px-4 py-2">Column 5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Data 1</td>
                                <td className="border border-gray-400 px-4 py-2">Data 2</td>
                                <td className="border border-gray-400 px-4 py-2">Data 3</td>
                                <td className="border border-gray-400 px-4 py-2">Data 4</td>
                                <td className="border border-gray-400 px-4 py-2">Data 5</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Data 6</td>
                                <td className="border border-gray-400 px-4 py-2">Data 7</td>
                                <td className="border border-gray-400 px-4 py-2">Data 8</td>
                                <td className="border border-gray-400 px-4 py-2">Data 9</td>
                                <td className="border border-gray-400 px-4 py-2">Data 10</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Data 11</td>
                                <td className="border border-gray-400 px-4 py-2">Data 12</td>
                                <td className="border border-gray-400 px-4 py-2">Data 13</td>
                                <td className="border border-gray-400 px-4 py-2">Data 14</td>
                                <td className="border border-gray-400 px-4 py-2">Data 15</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Data 16</td>
                                <td className="border border-gray-400 px-4 py-2">Data 17</td>
                                <td className="border border-gray-400 px-4 py-2">Data 18</td>
                                <td className="border border-gray-400 px-4 py-2">Data 19</td>
                                <td className="border border-gray-400 px-4 py-2">Data 20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button className="absolute top-0 right-0" onClick={handleClose}><RxCrossCircled className='h-6 w-6 font-bold' />
            </button>
        </div>
    );
};

export default Modal;

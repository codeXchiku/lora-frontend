import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const productSales = [
    {
        name: 'jan',
        product1: 4000,

    },
    {
        name: 'feb',
        product1: 4500,

    },
    {
        name: 'mar',
        product1: 5000,

    },
    {
        name: 'april',
        product1: 6000,

    },
    {
        name: 'may',
        product1: 5500,
    },
    {
        name: 'jun',
        product1: 6500,
    },
    {
        name: 'july',
        product1: 6700,
    },
    {
        name: 'Aug',
        product1: 6700,
    },
    {
        name: 'sep',
        product1: 6700,
    },
    {
        name: 'octo',
        product1: 6700,
    },
    {
        name: 'Nov',
        product1: 6700,
    },
    {
        name: 'Dec',
        product1: 6700,
    },
]

const AreaGraph = () => {
    return (
        <>
            <AreaChart
                width={500}
                height={300}
                data={productSales}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="product1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </>
    )
}

export default AreaGraph
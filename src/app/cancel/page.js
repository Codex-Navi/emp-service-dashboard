import CancelledComplainTable from '@/Components/TableComponent/CancelledComplainTable';
import React from 'react';



const data=[
    {
        id:1,
        name:'lucky',
        age:20
    },
    {
        id:2,
        name:'lucky',
        age:20
    },
    {
        id:1,
        name:'lucky',
        age:20
    }
]



function page(props) {
    return (
        <div>
            <CancelledComplainTable complaindata={data}/>
        </div>
    );
}

export default page;
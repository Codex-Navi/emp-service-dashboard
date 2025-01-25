import PostPondComplainTable from '@/Components/TableComponent/PostPondComplainTable';
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
            <PostPondComplainTable complaindata={data}/>
        </div>
    );
}

export default page;
import CompletedComplainTable from '@/Components/TableComponent/CompletedComplainTable';
import TableComponent from '@/Components/TableComponent/TestingTableComponent';
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
            <CompletedComplainTable name={"Completed"} complaindata={data} />
        </div>
    );
}

export default page;
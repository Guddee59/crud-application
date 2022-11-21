import React from 'react';
import Box from '@mui/material/Box';


function ReadTable(props) {
    const { data, index ,handleEditClick,handleDoneClick} = props;
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.task_name}</td>
            <td>{data.category}</td>
            <td>{data.jira_id}</td>
            <td>{data.Assignee}</td>
            <td>{data.Status}</td>
            <td>{data.due_date}</td>
            <td>{data.go_live}</td>
            <td>{data.mock_up}</td>
            <td>{data.other_comments}</td>
            <td className='table-btn'>
                <button  onClick={(event) => handleEditClick(event, data)}>Edit</button>
                <button onClick={()=>handleDoneClick(data.id,index)}>Done</button>

            </td>
        </tr>

    );
}

export default ReadTable;
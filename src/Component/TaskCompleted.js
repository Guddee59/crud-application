import React from 'react';
import Button from '@mui/material/Button';


function TaskCompleted(props) {
    const { doneData, handleRevertData } = props;
    return (
        <div>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>SL.No.</th>
                            <th>Task Name</th>
                            <th>Category</th>
                            <th>Jira ID</th>
                            <th>Assignee</th>
                            <th>Status</th>
                            <th>Due</th>
                            <th>Go Live</th>
                            <th>Mock Up</th>
                            <th>Notes</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doneData.length > 0 ? doneData.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.task_name}</td>
                                <td>{item.category}</td>
                                <td>{item.jira_id}</td>
                                <td>{item.Assignee}</td>
                                <td>{item.Status}</td>
                                <td>{item.due_date}</td>
                                <td>{item.go_live}</td>
                                <td>{item.mock_up}</td>
                                <td>{item.other_comments}</td>
                                <td className='table-btn'>
                                    <Button onClick={()=>handleRevertData(item.id)} variant="contained" sx={{
                                        background: "#E34234", padding: "0.4rem", cursor: "pointer", "&:hover": {
                                            background: "#E34234"
                                        }
                                    }}>Revert</Button>
                                </td>
                            </tr>

                        )) :
                            <tr><td colSpan="12" className='no-record text-center'>---- No Record Found -----</td></tr>

                        }
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default TaskCompleted;
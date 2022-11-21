import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReadTable from './ReadTable';
import { nanoid } from "nanoid";
import EditTable from './EditTable';
import TaskCompleted from './TaskCompleted';
import Aos from 'aos';
import "aos/dist/aos.css";




function DailyTaskForm(props) {
    React.useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const [inputarr,
        setInputarr] = React.useState([])
    const [inputdata,
        SetInputdata] = React.useState({
            task_name: "",
            category: "",
            jira_id: "",
            Assignee: "",
            Status: "",
            due_date: "",
            go_live: "",
            mock_up: "",
            other_comments: ""
        })
    const [editFormData, setEditFormData] = React.useState({
        task_name: "",
        category: "",
        jira_id: "",
        Assignee: "",
        Status: "",
        due_date: "",
        go_live: "",
        mock_up: "",
        other_comments: ""
    });
    const [editContactId, setEditContactId] = React.useState(null);


    function handleChange(e) {

        SetInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })

    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            task_name: inputdata.task_name,
            category: inputdata.category,
            jira_id: inputdata.jira_id,
            Assignee: inputdata.Assignee,
            Status: inputdata.Status,
            due_date: inputdata.due_date,
            go_live: inputdata.go_live,
            mock_up: inputdata.mock_up,
            other_comments: inputdata.other_comments
        };

        const newContacts = [...inputarr, newContact];
        setInputarr(newContacts);
        SetInputdata({
            task_name: "",
            category: "",
            jira_id: "",
            Assignee: "",
            Status: "",
            due_date: "",
            go_live: "",
            mock_up: "",
            other_comments: ""
        })
    };
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            task_name: editFormData.task_name,
            category: editFormData.category,
            jira_id: editFormData.jira_id,
            Assignee: editFormData.Assignee,
            Status: editFormData.Status,
            due_date: editFormData.due_date,
            go_live: editFormData.go_live,
            mock_up: editFormData.mock_up,
            other_comments: editFormData.other_comments
        };

        const newData = [...inputarr];

        const index = inputarr.findIndex((data) => data.id === editContactId);

        newData[index] = editedContact;

        setInputarr(newData);
        setEditContactId(null);
    };
    const handleEditClick = (event, data) => {
        event.preventDefault();
        setEditContactId(data.id);
        const formValues = {
            task_name: data.task_name,
            category: data.category,
            jira_id: data.jira_id,
            Assignee: data.Assignee,
            Status: data.Status,
            due_date: data.due_date,
            go_live: data.go_live,
            mock_up: data.mock_up,
            other_comments: data.other_comments
        };
        setEditFormData(formValues);
    };
    const [doneData, setDoneData] = React.useState([])
    const handleDoneClick = (id) => {
        const newContacts = [...inputarr];

        const index = inputarr.findIndex((item) => item.id === id);
        setDoneData([...doneData, newContacts[index]])
        newContacts.splice(index, 1);
        setInputarr(newContacts);
    };
    const handleRevertData = (id) => {
        const newContacts = [...doneData];
        const index = doneData.findIndex((item) => item.id === id);
        newContacts.splice(index, 1);
        setDoneData(newContacts);
        setInputarr([...inputarr,doneData[index]]);

    }
    return (
        <>
            <Box className='section'>
                <Box className='container task-form'>
                    <form onSubmit={handleAddFormSubmit}>
                        <Grid container spacing={2}>
                            <Grid item md={5} sm={12} >
                                <input type="text" name='task_name' onChange={handleChange} value={inputdata.task_name} placeholder='Task Name' required />
                            </Grid>
                            <Grid item md={5} sm={12}>
                                <select name="category" value={inputdata.category} onChange={handleChange}>
                                    <option value="">Select Cotegory</option>
                                    <option value="Bug">Bug Task</option>
                                    <option value="Dev">Dev</option>
                                    <option value="staging">staging</option>
                                </select>
                            </Grid>
                            <Grid item md={2}>
                                <input type="text" onChange={handleChange} value={inputdata.jira_id} name='jira_id' placeholder='Jira ID' />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} mt={1}>
                            <Grid item md={3} >
                                <select name="Assignee" value={inputdata.Assignee} onChange={handleChange}>
                                    <option value="">Select Assignee</option>
                                    <option value="Rohan">Rohan</option>
                                    <option value="Kriti">Kriti</option>
                                    <option value="Archana">Archana</option>
                                </select>
                            </Grid>
                            <Grid item md={3}>
                                <select name="Status" value={inputdata.Status} onChange={handleChange}>
                                    <option value="">Select Status</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                </select>
                            </Grid>
                            <Grid item md={3}>
                                <input type="date" value={inputdata.due_date} name='due_date' onChange={handleChange} />
                            </Grid>
                            <Grid item md={3}>
                                <input type="date" value={inputdata.go_live} name='go_live' onChange={handleChange} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} mt={1}>
                            <Grid item md={12}>
                                <input type="textarea" value={inputdata.mock_up} name='mock_up' onChange={handleChange} placeholder='Mock UP' />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} mt={1}>
                            <Grid item md={12}>
                                <textarea name='other_comments' value={inputdata.other_comments} onChange={handleChange} placeholder='Other Comments' rows="4" />
                                <button type='submit' className="w-100">Submit</button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
            <Box className='section'>
                <div className="container-fluid">
                    <form onSubmit={handleEditFormSubmit} >
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
                                {inputarr.length > 0 ? inputarr.map((item, i) => (
                                    <>
                                        {editContactId === item.id ? (

                                            <EditTable
                                                index={i}
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                            />
                                        ) : (
                                            <ReadTable
                                                key={i}
                                                data={item}
                                                index={i}
                                                handleEditClick={handleEditClick}
                                                handleDoneClick={handleDoneClick}
                                            />
                                        )}

                                    </>
                                )) :
                                    <tr><td colSpan="12" className='no-record text-center'>---- No Record Added -----</td></tr>

                                }
                            </tbody>
                        </table>
                    </form>
                </div>
            </Box>
            <Box className='section'>
                <div className="container-fluid">
                    <TaskCompleted doneData={doneData} handleRevertData={handleRevertData} />
                </div>
            </Box>
        </>


    );
}

export default DailyTaskForm;
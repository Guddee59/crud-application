import React from 'react';

function EditTable(props) {
    const { editFormData, handleEditFormChange, index } = props
    return (
        <tr>
            <td>{index + 1}</td>
            <td><input type="text" name='task_name' onChange={handleEditFormChange} value={editFormData.task_name} placeholder='Task Name' required/>
            </td>
            <td>
                <select name="category" value={editFormData.category} onChange={handleEditFormChange}>
                    <option value="">Select Cotegory</option>
                    <option value="Bug">Bug Task</option>
                    <option value="Dev">Dev</option>
                    <option value="staging">staging</option>
                </select>
            </td>
            <td>
                <input type="text" onChange={handleEditFormChange} value={editFormData.jira_id} name='jira_id' placeholder='Jira ID' required />
            </td>
            <td>
                <select name="Assignee" value={editFormData.Assignee} onChange={handleEditFormChange}>
                    <option value="">Select Assignee</option>
                    <option value="Rohan">Rohan</option>
                    <option value="Kriti">Kriti</option>
                    <option value="Archana">Archana</option>
                </select>
            </td>
            <td>
                <select name="Status" value={editFormData.Status} onChange={handleEditFormChange}>
                    <option value="">Select Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                </select>
            </td>
            <td>
                <input type="date" value={editFormData.due_date} name='due_date' onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="date" value={editFormData.go_live} name='go_live' onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="textarea" value={editFormData.mock_up} name='mock_up' onChange={handleEditFormChange} placeholder='Mock UP' />
            </td>
            <td>
                <textarea name='other_comments' value={editFormData.other_comments} onChange={handleEditFormChange} placeholder='Other Comments' rows="4" />

            </td>
            <td className='table-btn'>
                <button type="submit">Save</button>
                <button>Done</button>

            </td>
        </tr>
    );
}

export default EditTable;
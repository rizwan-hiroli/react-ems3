import { Link } from "react-router-dom";
import sample_pic from "../resources/sampleprofilepic.png"; 
export function EmployeeCard({employee, deleteEmployee}){
    //const sample_pic="https://pluspng.com/img-png/png-employee-account-avatar-business-colleague-employee-female-group-human-512.png";
return (
<div className="col-sm-6 border border-4">
<article className="row bg-secondary p-2">
    <figure className="col-lg-4 text-center">
        <h6>#{employee._id}</h6>
        <figcaption><b>{employee.emp_name}</b></figcaption>
        <img className="rounded-pill" 
        src={employee.employee_pic!=undefined?`data:image/png;base64,${employee.employee_pic}`:sample_pic} 
        height="170" width="170" alt="employee" />
        <Link to={`/editpic/${employee._id}`} className="btn btn-info m-2">Edit Pic</Link> 
    </figure>
    <div className="col-lg-8">
        {/* <p><span>{employee.emp_name}</span> joined on <i>{employee.joining_date.toString()}</i></p> */}
        <ol className="list-group">
            <li className="list-group-item"><small>Email Id: </small> <b>{employee.emp_email}</b></li>
            <li className="list-group-item"><small>Basic Salary: </small> <b>{employee.emp_salary}</b></li>
            <li className="list-group-item"><small>Experience: </small> <b>{employee.experience}</b></li>
            <li className="list-group-item"><small>Department: </small> <b>{employee.dept_code}</b></li>
        </ol>
        <div>
            <Link to={`/editemployee/${employee._id}`} className="btn btn-info m-2">EDIT</Link> 
            <button type="button" onClick={()=>deleteEmployee(employee._id)} className="btn btn-danger">DELETE</button>
        </div>
    </div>
</article>
</div>
);
}
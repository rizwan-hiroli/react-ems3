import { useEffect, useRef, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { deleteEmployeeById, getAllEmployees, getEmployeesByName } from "../model/EmployeeCRUD";
import { useLoaderData } from "react-router-dom";


export function NeoEmployees(){
    const nameNode=useRef();
    let data= null;
    const [employees, setEmployees] = useState([]);
    let [errorMessage, setMessage]=useState("");

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                data = await getAllEmployees();
                // console.log(data);
                setEmployees(data);
            } catch (error) {
                // console.log(error);
                setMessage('Failed to fetch employees');
            }
        };

        fetchEmployees();
    }, []); // Fetch data once when the component mounts

    // let [employees, setEmployees]=useState(data); 
    

    async function getEmps(){
        const data=await getAllEmployees();
        setEmployees(data);
    }
    async function deleteEmployee(_id){
        const ans=window.confirm("Do you really want to delete?");
        if(ans){
            const data=await deleteEmployeeById(_id);
            window.alert("Employee deleted successfully....");
            getEmps();    
        }
    }  
    async function  searchEmp(emp_name){
        if(emp_name!=="")
        {
            const data=await getEmployeesByName(emp_name);
            if(data.length>0)
                setEmployees(data);
            else
                setMessage("NOT FOUND");
        }
        else{
            setMessage("");
            setEmployees(data);
        }
            
            
    }
    useEffect(()=>{ 
    //    console.log(employees);
    //    getEmps();
    }/* ,[] */)

    const employeeCards=employees.map((employee, i)=><EmployeeCard key={'e'+i} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
        <>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 pt-5 pb-5">
                    <div class="card">
                        <div class="card-header">All Employees</div>

                        <div class="card-body">
                            <section className="m-2">
                                <label>Employee name to search:</label>
                                <input type="text" ref={nameNode} onKeyUp={()=>searchEmp(nameNode.current.value)}></input>
                                <span className="text-danger text-bold"> {errorMessage}</span>
                            </section>
                            <div className="row">
                                {employeeCards}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      
    );
}
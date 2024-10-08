import axios from 'axios';


const url="http://localhost:4000";
//const url2="http://localhost:3000/employees" // for json-server
export async function addEmployee(employee){
    const response=await axios.post(url+"/employees",employee);
    return response.data;
}
export async function updateEmployee(employee){
    const response=await axios.put(`${url}/employees/${employee._id}`,employee);
    return response.data;
}
export async function deleteEmployeeById(_id){
    const response=await axios.delete(`${url}/employees/${_id}`) //`${url2}/${_id}`
    return response.data; // query result
}
export async function getEmployeeById(_id){
    const response=await axios.get(`${url}/employees/${_id}`); //`${url2}/${_id}`
    return response.data;
}
export async function getEmployeesByName(emp_name){
    const response=await axios.get(`${url}/employees/search/${emp_name}`); //`${url2}/${_id}`
    return response.data;
}
export async function getAllEmployees(){
    const response=await axios.get(url+"/employees") // url2
    return response.data;
}

export async function uploadEmployeePic(_id,employee_pic){
    let formData=new FormData();
    formData.append('employee_pic',employee_pic)
    const response=await axios.put(`${url}/upload/${_id}`,formData)
    return response.data;
}


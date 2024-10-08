import { useRef } from "react"
import { useParams } from "react-router-dom";
import { uploadEmployeePic } from "../model/EmployeeCRUD";


export function FileUpload(){
    const {_id}=useParams();
    const file = useRef();
    function getFile(employee_pic){
        //console.log(employee_pic);
        file.current=employee_pic;
    }
    async function  upload(){
        //console.log(file.current);
        if(file.current!==undefined){
            const data=await uploadEmployeePic(_id,file.current);
            if(data.modifiedCount>0)
                window.alert("Profile pic updated successfully....")
            else
                window.alert("no changes...")
        }
    }
    return (
        <div>
            <p>
                <small>ID : {_id}</small>
            </p>
            <label>Select File to upload</label>
            <input type="file" onChange={(event)=>getFile(event.target.files[0])}></input>
            <button onClick={upload}>UPDATE</button>
        </div>
      
    )
}
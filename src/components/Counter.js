import { useEffect, useRef, useState } from "react"



export function Counter(){
    let normalCounter=0;
    let [stateCounter, setCounter]=useState(0);
    let refCounter=useRef(0);
   useEffect(()=>{
    console.log("normal var: ",normalCounter);
    console.log("state var: ",stateCounter);
    console.log("ref var: ",refCounter.current);
   });
 
   return(
    <div>
        <table>
        <tbody>
            <tr>
                <th>Normal Var:</th>
                <td>{normalCounter}</td>
                <td><button onClick={()=>console.log(++normalCounter)}>INCREMENT</button></td>
                <td>normal variable state never gets maintained</td>
            </tr>
            <tr>
                <th>State Var:</th>
                <td>{stateCounter}</td>
                <td><button onClick={()=>setCounter(++stateCounter)}>INCREMENT</button></td>
                <td>if state value changes components gets re rendered</td>
            </tr>
            <tr>
                <th>Ref Var:</th>
                <td>{refCounter.current}</td>
                <td> <button onClick={()=>console.log(++refCounter.current)}>INCREMENT</button></td>
                <td>if ref value changes, component will not get rerendered</td>
            </tr>
           </tbody>
        </table>
        
        <p>state and ref boths value gets maintained accross every render. if we want internal use of value across many rendered then 
            use useRef.
            If we want to bind value on view, we need component to be re-rendered to show updates, use useState in this case
        </p>
       
    </div>
   )
}
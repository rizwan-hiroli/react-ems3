/** hooks chapter : we will take user input */

import { useEffect, useRef, useState } from "react";
import { Dadar } from "./Dadar";
import { OfficeLocation } from "./OfficeLocation";
import { Rabale } from "./Rabale";
import { initialArray } from "../app/model/data";

export function Learning(){

   const [companyStyle, setStyle] =useState({
        color:'green',
        backgroundColor :'yellow',
        width:'50%',
        textAlign:'center'
    });
    let [companyOffices, setOffice]=useState(['Mumbai','Dadar, Mumbai', 'Rabale, Mumbai', 'Parel, Mumbai'])

    let locationNode=useRef();
    let officeNode=useRef();
    let [offices, setOffices]= useState(()=>initialArray());
 
   /** no dependancy: 
    * after every rendering of component, useEffect hook gets called... */
 /*   useEffect(()=>{
        console.log("this is setup in useEffect, u can do any code after component gets rendered");
        //afterrender();
        return ()=>{
            console.log("this is cleanup in useEffect");
            
        }
    });  */
    /** empty dependancy:
     * useEffect will be called only on initial render of component, after 
     * that though components gets re rendered, useEfect will not get called
     */
/*      useEffect(()=>{
        console.log("u can do any code after component gets rendered");
        //afterrender();
       
    }, []);  */
    /** dependancy:
     * useEffect will be called on initial render of component, after 
     * that if components gets re rendered due to state change in depedancy mentioned in useEffect,
     * then also useEfect will get called
     */
    let l2=0; // normal variables gets reinitialized in every rerender
    // if we want to maintain the value internally across multiple renders, then we have to use
    // hook useRef
    let l1=useRef(companyOffices.length); /*React.MutableRefObject<number> */
    //console.log(l1);
   useEffect(()=>{
        console.log("setup... u can do any code after component gets rendered");
        console.log(offices);

        /* console.log(l2);      
        l2=companyOffices.length;
        console.log("new length:"+l2);
        console.log("old length:"+l1.current);
        console.log("difference:",l2-l1.current);*/
        return ()=>{
            console.log("cleanup...");
           /*  console.log(companyOffices);
            l1.current=companyOffices.length;
            console.log("old length:"+l1.current); */
           
        } 
        //afterrender();
    }, [companyOffices, offices]);
    function afterrender(){
        console.log("more work to do");
    }
    let companyName="Neosoft"
    let joinLocation="rabale";

    const liNodes=companyOffices.map((city,i)=><li key={'c'+i}>{city}</li>)
    
    let getMessage=function(){
        return "hello we are implementing examples on JSX expression"
    }
    
   
    let officeTemplate=offices
    .map((office, i)=><OfficeLocation  key={'co'+i} office={office}></OfficeLocation>) /* react props*/

    let styleClasses=['text-success', 'border','border-2', 'border-info'];

    function test(event){
        console.log(event.target);
    }
    function changeBackground(bgColor){
        setStyle({...companyStyle, backgroundColor:bgColor})
    }
    function addOffice(office){
        setOffice([...companyOffices, office])
    }
    function filter(location){
        if(location==='all')
            setOffices(initialArray())
        else{
        let filters=offices.filter((office)=>office.location.toLowerCase().includes(location.toLowerCase()))
        setOffices(filters); // [filers]
        }
    }
    return (
        <>
            <h5 style={companyStyle} onMouseOver={()=>changeBackground('lightblue')}
                onMouseOut={()=>changeBackground('yellow') }>{companyName}</h5>  {/* JSX expression*/} 
            <button className="btn btn-info" onClick={test}>CLICK</button>
            <div>
                <h4 style={{backgroundColor:"pink"}}>If then else</h4>
                {
                 joinLocation.toLowerCase()==='rabale'?  
                 <address> 
                    Sigma IT Park, <br />
                     Unit No. 501, TTC Industrial Area, <br />
                    Rabale, Navi Mumbai,  <br />
                    Maharashtra 400701 
                 </address> : 
                 <address>
                    The Ruby Tower,  <br />
                    Senapati Bapat Marg,  <br />
                    Dadar West, Mumbai,  <br />
                    Maharashtra 400028
                 </address>
                }
            </div>
            <hr></hr>
            <div>
                <h4 className="text-success border border-3">if-then</h4>
                {joinLocation.toLowerCase()==='rabale' && 
                <address> 
                Sigma IT Park, <br />
                 Unit No. 501, TTC Industrial Area, <br />
                Rabale, Navi Mumbai,  <br />
                Maharashtra 400701 
                </address> }
            </div>
            <hr></hr>
            <div>
                {joinLocation.toLowerCase()==='dadar' && 
                <address>
                The Ruby Tower,  <br />
                Senapati Bapat Marg,  <br />
                Dadar West, Mumbai,  <br />
                Maharashtra 400028
                </address> }
            </div>
            <hr></hr>
            <div>
            <h4>If then else (template in component)</h4>
                {
                 joinLocation.toLowerCase()==='rabale'?<Rabale></Rabale>:<Dadar></Dadar>
                }
            </div>
            <div>
                <b>{getMessage()}</b>
                <i>{56*78}</i>
            </div>
            <hr></hr>
            <h4 className={styleClasses.join(" ")}>Company Offices</h4>
            <div>
                <ol>
                    {liNodes}
                </ol>
            </div>
            <div>
                <ol>
                    {companyOffices.map((city, i)=><li key={'o'+i}>{city}</li>)}
                </ol>
            </div>
           {  /* uncontrolled*/ }
            <input type="text" defaultValue="" ref={locationNode}></input>
            <button onClick={()=>addOffice(locationNode.current.value)}>ADD NEW OFFICE</button>
            <hr></hr>
            <label>Enter location to filter:</label>
            <select ref={officeNode} onChange={()=>filter(officeNode.current.value)}>
                <option>all</option>
                {companyOffices.map((office, i)=><option key={'of'+i}>{office}</option>)}
            </select>
            <button onClick={()=>setOffices(initialArray())}>RESET</button>
            <section className="d-flex flex-wrap justify-content-between">
                {officeTemplate}
            </section>
        </>
    );
}


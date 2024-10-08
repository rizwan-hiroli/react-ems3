//export function OfficeLocation(props){ /* use any variable to hold props */
export function OfficeLocation({office}){  /* use key declared at parent side */
    return (
        <article className="border border-5 p-3  w-25 bg-secondary">
            <header>
               {/*  <h4>{props.office.location}</h4>  */}
                <h4>{office.location}</h4> 
            </header>
            <address>
                {/*  <p>{props.office.address}</p>  */}
                <p>{office.address}</p>
            </address>
        </article>
    );
}
import React, { useState } from "react";
import Data from "../Components/Dataretrival"

function Entereddetail(){
    const [query,setquery] = useState(""); //it collect the user entered city name
    const [flag,setflag] = useState(false); //It handle the sitution i.e until user dont press submit button it prevent calling of apiu url


    //This function set the value of Flag True .. that means when this function gets called then api call is being processes and data retrival started
    function changeflag(){      
        setflag(true);
    }




    //It handke the changes happen in the query variable i.e updating its value when gets changed
    function handleChange(event){        
        const val = event.target.value;
        setquery(val);
        setflag(false);
    }



    // Handle the submit button  and invoke the chngeflag function to retive the data from api
    function handleClick(){
        changeflag();     
    }



    return(   
        <div className="form" >          
            <input value = {query} onChange= {handleChange} placeholder="Enter City Name" />
            <button onClick={handleClick}>            
                <span>Submit</span>
            </button>

            {/*Now calling the api for retriving the data and it gets called when flag is true*/} 
            {flag?<Data cityname = {query}/> : null}
        </div>
       
        );



}
export default Entereddetail;
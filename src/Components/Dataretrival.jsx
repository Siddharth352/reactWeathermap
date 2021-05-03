
import React, { useState } from "react";
const https = require("https");



function Data(props){


    // This function just make the first letter of user entered input Capital
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // this string var hold the city name with forst letter capital
    var string = capitalizeFirstLetter(props.cityname);



    // this varibale will store the data that get from the API
    var userdata ="";

    //This hold the Icon id which further help to get the url for icon image
    var icon = "";
    


    // this usestate variable hold the icon url to show the image 
    const[iconrl,seticonurl] = useState("");

    // this function update the iconurl
    function updateurl(val){
        seticonurl(val);
    }



    // It prevent the userdataarray getting updated again and again just update one time then make this false so that it cant entered in the funtion ehich update the data
    const [flag,setflag] = useState(true);

    //It contains all the data that we are printing in screen like temp,max-temp,min-temp,pressure ..etc and new data can be add easily
    const [userdataarray,setuserdata] = useState({
        Temperature:"",
        Maxtemp :"",
        Mintemp:"",
        Humidity:"",
        visibility:"",
        weather:"",
        pressure:"",
        windspeed:""
    });



    

    // It update the data to be shown on screen when data is recieved from api
    function updateuserarray(){      
       
        setuserdata({
            Temperature:userdata.main.temp,
            Maxtemp:userdata.main.temp_max,
            Mintemp:userdata.main.temp_min,
            Humidity:userdata.main.humidity,
            visibility:userdata.visibility,
            weather:userdata.weather[0].main,
            pressure:userdata.main.pressure,
            windspeed:userdata.wind.speed
        })
        setflag(false);
          }


    // url for api to get data
    const api = "https://api.openweathermap.org/data/2.5/weather?q="+props.cityname+"&appid=ba4e04d2aa65eb728e2a9dc75afab968&units=metric";
        
    
    // function for calling the url and retriving the data
    https.get(api,function(response){
        response.on("data",function(data){
            userdata = JSON.parse(data);
            try{
                //Here checking if entered city name really exist or not or some error occured in retriving data
                var checking = userdata.main.temp;
                icon = userdata.weather[0].icon;
                var temp = "http://openweathermap.org/img/w/" + icon + ".png";
                updateurl(temp);              
                if(flag){
                    updateuserarray();
                    }      
                
            }
            catch(e){
                alert("City not found");
            }
           })

    })




    return (


        <div className="note">      
            <h1> {string} Weather</h1>

            <div id = "tabel" className="tabel">          
                <table >            
                    <tbody>
                        <tr>
                            <th> <p> Avg  Temperature : </p></th>
                            <th> <p> {userdataarray.Temperature} °C </p></th> 
                            <td> {  <img src = "https://image.flaticon.com/icons/png/128/1684/1684375.png" alt="temperature icon" width="30" height="30"></img>} </td>
                        </tr>
                    </tbody>



                    <tbody>   
                        <tr>
                            <th> <p>  Max Temperature : </p></th> 
                            <th> <p>  {userdataarray.Maxtemp} °C</p></th>
                            <td> {  <img src = "https://image.flaticon.com/icons/png/128/1684/1684375.png" alt="temperature icon" width="30" height="30"></img>} </td>
                        </tr>
                    </tbody>



                    <tbody>
                        <tr>
                            <th> <p> Min Temperature : </p></th>
                            <th> <p>  {userdataarray.Mintemp} °C</p></th>
                            <td> {  <img src = "https://image.flaticon.com/icons/png/128/1684/1684375.png" alt="temperature icon" width="30" height="30"></img>} </td>
                        </tr>
                    </tbody>



                    <tbody>         
                        <tr>
                            <th> <p> Humidity :  </p> </th> 
                            <th> <p> {userdataarray.Humidity}% </p></th>
                            <td> {  <img src = "https://image.flaticon.com/icons/png/128/727/727790.png" alt="humidity icon" width="30" height="30"></img>} </td>
                        </tr>
                    </tbody> 

                    
                    <tbody>
                        <tr>
                            <th> <p> Visibility : </p></th>
                            <th> <p> {userdataarray.visibility} meters </p></th>
                            <td> {  <img src = "https://image.flaticon.com/icons/png/128/2210/2210317.png " alt="visibility icon" width="30" height="30" alt="image"></img>} </td>
                        </tr>
                    </tbody>


                    <tbody>
                        <tr>
                            <th> <p> Weather:  </p></th> 
                            <th> <p> {userdataarray.weather} </p></th>
                            <td> {  <img src = {iconrl}></img>} </td>
                        </tr>
                    </tbody>



                    <tbody>
                        <tr>
                            <th> <p> Pressure:  </p></th> 
                            <th> <p> {userdataarray.pressure} Pascal</p></th>
                            <td> {  <img src = "https://image.flaticon.com/icons/png/128/751/751836.png" alt="pressure icon" width="30" height="30" ></img>} </td>
                        </tr>
                    </tbody>



                    <tbody>
                        <tr>
                            <th> <p> Wind Speed:  </p></th> 
                            <th> <p> {userdataarray.windspeed} m/s </p></th>
                            <td> {  <img src = "https://image.flaticon.com/icons/png/128/2272/2272225.png" alt="speed icon" width="30" height="30"></img>} </td>
                        </tr>
                    </tbody>


                </table>
            </div>  

        

        </div>
       

    );




}
export default Data;
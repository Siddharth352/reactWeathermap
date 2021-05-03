import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Entereddetail from "../Components/Input";


function App(){
    return (

        <div>
            
            <Header />  {/*it shows the header part of web page */}
            <Entereddetail /> {/*it do all the function */} 
            <Footer /> {/*it shows the footer part of web page includeing copyright tags */}


        </div>


    );

}

export default App;
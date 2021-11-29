import '../Css/Report.css';
import React from 'react';
const Report = () => {

    React.useEffect(() =>{
        document.getElementById("demo").innerHTML=sessionStorage.getItem("one");
        document.getElementById("demo1").innerHTML=sessionStorage.getItem("two");
        document.getElementById("demo2").innerHTML=sessionStorage.getItem("three");
        document.getElementById("demo3").innerHTML=sessionStorage.getItem("four");
        document.getElementById("demo4").innerHTML=sessionStorage.getItem("five");
        document.getElementById("demo5").innerHTML=sessionStorage.getItem("six");
        document.getElementById("demo6").innerHTML=sessionStorage.getItem("seven");
    
    

    },[]);

    return (
        <>
            
            <div class="box9">
                <div>
                     <h2 class="st2251">Health Report</h2>
                </div>
                        
                        <div>
                            <div class="Name">
                                    <p>Name:</p>
                                    <p id="demo"></p>
                            </div>
                            <div>
                                    <p>Gender:</p>
                                    <p id="demo1"></p>
                            </div>
                            <div>
                                    <p>Age:</p>
                                    <p id="demo2"></p>
                            </div>
                            <div>
                                    <p>Weight:</p>
                                    <p id="demo3"></p>
                            </div>
                            <p>height:</p>
                            <p id="demo4"></p>
                            <p>BMI:</p>
                            <p id="demo5"></p>
                            <p>Waist size:</p>
                            <p id="demo6"></p>
                            <p>RBC Count:</p>
                            <p id="demo7"></p>
                            <p>RBC Report:</p>
                            <p id="demo8"></p>


                        </div>


             </div>
        
        </>
    )
}

export default Report;

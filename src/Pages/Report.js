import '../Css/Report.css';
import React from 'react';
<<<<<<< HEAD
const Report = () => {

    React.useEffect(() =>{
        document.getElementById("demo").innerHTML=sessionStorage.getItem("one");
        document.getElementById("demo1").innerHTML=sessionStorage.getItem("two");
        document.getElementById("demo2").innerHTML=sessionStorage.getItem("three");
        document.getElementById("demo3").innerHTML=sessionStorage.getItem("four");
        document.getElementById("demo4").innerHTML=sessionStorage.getItem("five");
        document.getElementById("demo5").innerHTML=sessionStorage.getItem("six");
        document.getElementById("demo6").innerHTML=sessionStorage.getItem("seven");
    
    

=======

const Report = () => {
    
        
    React.useEffect(() => {
        const name=window.sessionStorage.getItem('one');
        document.getElementById("demo1").innerHTML= name;
    },[]);

    React.useEffect(() => {
        const gender=window.sessionStorage.getItem('seven');
        document.getElementById("demo2").innerHTML= gender;
    },[]);

    React.useEffect(() => {
        const age=window.sessionStorage.getItem('five');
        document.getElementById("demo3").innerHTML= age;
    },[]);
        

    React.useEffect(() => {
        const weight=window.sessionStorage.getItem('nine');
        document.getElementById("demo4").innerHTML= weight;
    },[]);

    React.useEffect(() => {
        const height=window.sessionStorage.getItem('eight');
        document.getElementById("demo5").innerHTML= height;
    },[]);

    React.useEffect(() => {
        const bmi=window.sessionStorage.getItem('five');
        document.getElementById("demo6").innerHTML= bmi;
>>>>>>> 7244174a73267e94efe62b6577fcfb0cb090b942
    },[]);

    return (
        <>
            
            <div class="box9">
                <div class="st2251">
                     <h2 >Health Report</h2>
                </div>
                        
<<<<<<< HEAD
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
=======
                        <div class=" yyy">
                            <div class="one1">
                                <p>Name:</p>
                                <p id="demo1"></p>
                            </div>
                            <div class="two2">
                                <p>Gender:</p>
                                <p id="demo2"></p>
                            </div>

                            <div class="three3">
                                <p>Age:</p>
                                <p id="demo3"></p>
                            </div>

                            <div class="four4">
                                <p>Weight:</p>
                                <p id="demo4"></p>
                            </div>

                            <div class="five5">
                                <p>Height:</p>
                                <p id="demo5"></p>
                            </div>
                            
                            <div class="six6">
                                <p>BMI:</p>
                                <p id="demo6"></p>
                            </div>
>>>>>>> 7244174a73267e94efe62b6577fcfb0cb090b942
                            <p>Waist size:</p>
                            <p id="demo6"></p>
                            <p>RBC Count:</p>
                            <p id="demo7"></p>
                            <p>RBC Report:</p>
<<<<<<< HEAD
                            <p id="demo8"></p>


=======
>>>>>>> 7244174a73267e94efe62b6577fcfb0cb090b942
                        </div>
            </div>   
        
        </>
    )

    
}

export default Report;

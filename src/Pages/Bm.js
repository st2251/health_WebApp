import React, {useState, useEffect} from 'react';
import '../Css/Bm.css';
import { Link } from 'react-router-dom';
import Height from "../images/height.jpg"
import Waist from "../images/waist.jpg"
import Rbc from "../images/rbc.jpg"
import Weight from "../images/weight.jpg"


const Bm = () => {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [waist,setWaist]=useState("");
    const [rbc,setRbc]=useState("");

    React.useEffect(() => {
        window.sessionStorage.setItem('eight',height);
    },[height]);
    React.useEffect(() => {
        window.sessionStorage.setItem('nine',weight);
    },[weight]);
    React.useEffect(() => {
        window.sessionStorage.setItem('ten',waist);
    },[waist]);
    React.useEffect(() => {
        window.sessionStorage.setItem('eleven',rbc);
    },[rbc]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(height);
        console.log(weight);
        console.log(waist);
        console.log(rbc);
    }
    

    return (
        <>
           <div class="bodyBm">

                <div>
                    <h2 style={{color :"rgb(255, 255, 255)"}} id="heading"> Body Measurement </h2>
                </div>
                <div class="tables1">
                    <table onSubmit={handleSubmit}>
                        <tr>
                            <th class="col"></th>
                            <th class="col1">Measurement</th>
                            <th class="col2">Inputs</th>
                        </tr>
                        <tr>
                            <th class="col">Height</th>
                            <td class="col1"><img src={ Height } alt="Error" class="ttt" /></td>
                            <td class="col2"><input type="text" placeholder="Enter Your Height In Cms" value={height} required onChange = {event => setHeight(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <th class="col">Weight</th>
                            <td class="col1"><img src={ Weight} alt="Error" class="ttt" /></td>
                            <td class="col2"><input type="text" placeholder="Enter Your weight In Kgs" value={weight} required onChange = {event => setWeight(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <th class="col">Waist Size</th>
                            <td class="col1"><img src={Waist} alt="Error" class="ttt" /></td>
                            <td class="col2"><input type="text" placeholder="Enter Your waist Size In Cms" value={waist} required onChange = {event => setWaist(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <th class="col">RBC Count</th>
                            <td class="col1"><img src={Rbc} alt="Error" class="ttt" /></td>
                            <td class="col2"><input type="text" placeholder="Enter RBC Count" value={rbc} required onChange = {event => setRbc(event.target.value)}/></td>
                        </tr>
                    </table>
                </div>
                
                    <Link to="/lifestyle"> <input type="submit" value="submit"  class="data2"></input> </Link>
                    {/* <input class="data1" type="reset" value="Reset" /> */}
                 
           </div>
        </>
    )
}

export default Bm;

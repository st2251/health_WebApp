import React , {useState,useEffect} from 'react';
import '../Css/Lifestyle.css';
import Fruits from "../images/vegi.jpg"
import Dry from "../images/dryf.jpg"
import Fast from "../images/fast.jpg"
import Grain from "../images/grain.jpg"
import Sweet from "../images/sweet.jpg"
import Meat from "../images/meat.jpg"
import Smoke from "../images/cig.jpg"
import Alcohol from "../images/alcohol.jpg"
import { Link } from 'react-router-dom';

const Lifestyle = () => {
    const [active,setActive] =  useState("");

    React.useEffect(() => {
        window.sessionStorage.setItem('twelve',active);
    },[active]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(active);

    }
    

    return (
        <div class="body-lifestyle">
                <div class="headingls">
                         <h1>Lifestyle</h1>
                </div>
                <div class="contents2">
                        <h3>1.)How active are you..?</h3>
                        <select class="dropdown1" value={active} required onChange={event => setActive(event.target.value)}>
                                <option>Select</option>
                                <option>Sedentary</option>
                                <option>Lightly Active</option>
                                <option>Moderately Active</option>
                                <option>Very Active</option>
                                <option>Extra Active</option>
                        </select>
                </div>
    <strong>
        <div class="tables">
            <table class="color" onSubmit={handleSubmit}>

                <tr>
                    <th>How often do you eat the following!</th>
                    <th>Images</th>
                    <th>often</th>
                    <th>sometimes</th>
                    <th>Rarely</th>     
                    <th>never</th>
                </tr>
                <tr>
                    <td> Fruits and Vegitable</td>
                    <td><img src={Fruits} width="100px" height="100px"/></td>
                    <td><input type="radio" name="0" value="often" checked/></td>
                    <td><input type="radio" name="0" value="sometimes"/> </td>
                    <td><input type="radio" name="0" value="Rarely"/></td>
                    <td><input type="radio" name="0" value="never"/></td>
                </tr>
                
                <tr>
                        <td class="color">Nuts & Dry Fruit</td>
                        <td><img src={Dry} alt="error"  width="100px" height="100px"/></td>
                        <td><input type="radio" name="2" value="often" checked /></td>
                        <td><input type="radio" name="2" value="sometimes"/> </td>
                        <td><input type="radio" name="2" value="Rarely"/></td>
                        <td><input type="radio" name="2" value="never"/></td>
                </tr>
        
                <tr>
                    <td>Fast Food</td>
                    <td><img src={Fast} alt="error"  width="100px" height="100px"/></td>
                    <td><input type="radio" name="3" value="often" checked/></td>
                    <td><input type="radio" name="3" value="sometimes"/> </td>
                    <td><input type="radio" name="3" value="Rarely"/></td>
                    <td><input type="radio" name="3" value="never"/></td>
                </tr>
                <tr>
                    <td class="color">Whole Grain products</td>
                    <td><img src={Grain} alt=""  width="100px" height="100px"/></td>
                    <td><input type="radio" name="4" value="often" checked/></td>
                    <td><input type="radio" name="4" value="sometimes"/> </td>
                    <td><input type="radio" name="4" value="Rarely"/></td>
                    <td><input type="radio" name="4" value="never"/></td>
                </tr>
                <tr>
                    <td>Sweets & Chocolates</td>
                    <td><img src={Sweet} alt=""  width="100px" height="100px"/></td>
                    <td><input type="radio" name="5" value="often" checked/></td>
                    <td><input type="radio" name="5" value="sometimes"/> </td>
                    <td><input type="radio" name="5" value="Rarely"/></td>
                    <td><input type="radio" name="5" value="never"/></td>
                </tr>
                <tr>
                    <td>Fish ,Meat & Milk Products</td>
                    <td><img src={Meat} alt=""  width="100px" height="100px"/></td>
                    <td><input type="radio" name="7" value="often" checked/></td>
                    <td><input type="radio" name="7" value="sometimes"/> </td>
                    <td><input type="radio" name="7" value="Rarely"/></td>
                    <td><input type="radio" name="7" value="never"/></td>
                </tr>
                <tr>
                    <td >How often do you smoke?</td>
                    <td><img src={Smoke} alt=""width="100px" height="100px"/></td>
                    <td><input type="radio" name="8" value="often" checked/></td>
                    <td><input type="radio" name="8" value="sometimes"/> </td>
                    <td><input type="radio" name="8" value="Rarely"/></td>
                    <td><input type="radio" name="8" value="never"/></td>
                </tr>
                <tr>
                    <td >How often do you drink alcohol?</td>
                    <td><img src={Alcohol} alt=""width="100px" height="100px"/></td>
                    <td><input type="radio" name="9" value="often" checked/></td>
                    <td><input type="radio" name="9" value="sometimes"/> </td>
                    <td><input type="radio" name="9" value="Rarely"/></td>
                    <td><input type="radio" name="9" value="never"/></td>
                </tr>
            </table>
            
                <Link to="/report"> <button class="btn5">Generate Certificate</button></Link>
            

        </div>

    </strong>
        </div>
    )
}

export default Lifestyle;

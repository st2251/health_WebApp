import '../Css/Bp.css';
import React, { useState,useEffect,useCallback,useMemo } from 'react';
import { Link } from 'react-router-dom';

const Bp = () => {

        const [name,setName]=useState("");
        const [email,setEmail]=useState("");
        const [mobile,setMobile]=useState("");
        const [dob,setDob]=useState("");
        const [age,setAge]=useState("");
        const [country,setCountry]=useState("");
        const [gender,setGender]=useState("");

        React.useEffect(() => {
            window.sessionStorage.setItem('one',name);

        },[name]);

        React.useEffect(() => {
            window.sessionStorage.setItem('two',email);

        },[email]);

        React.useEffect(() => {
            window.sessionStorage.setItem('three',mobile)
        },[mobile]);

        React.useEffect(() => {
            window.sessionStorage.setItem('four',dob);

        },[dob]);

        React.useEffect(() => {
            window.sessionStorage.setItem('five',age);

        },[age]);

        React.useEffect(() => {
            window.sessionStorage.setItem('six',country);

        },[country]);

        React.useEffect(() => {
            window.sessionStorage.setItem('seven',gender);
        },[gender]);
        
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(name);
            console.log(email);
            console.log(dob);
            console.log(age);
            console.log(gender);
            console.log(country);
<<<<<<< HEAD
            console.log(gender);
            

=======
>>>>>>> 7244174a73267e94efe62b6577fcfb0cb090b942
        }

        
    

    return (
        <>
            <div class="body44">
                    <div>
                        <h2 style={{color: "rgb(255, 255, 255)"}} id="heading"> Basic Profile </h2>
                    </div>
                    <div class="tables4">
                            <table class="table22" onSubmit={handleSubmit}>
                                
                                <tr>
                                    <td class="col01">Name:</td>
                                    <th class="col11"><input type="text" value ={ name } required onChange ={ event => setName(event.target.value)} /></th>
                                </tr>
                                <tr>
                                    <td class="col01">Email:</td>
                                    <th class="col11"><input type="text" value ={ email } required onChange ={ event => setEmail(event.target.value)}/></th>
                                </tr>
                                <tr>
                                    <td class="col01">Mobile No.:</td>
                                    <th class="col11"><input type="text"  value ={ mobile } required onChange ={ event => setMobile(event.target.value)}/></th>
                                </tr>
                                <tr>
                                    <td class="col01">Date Of Birth:</td>
                                    <th class="col11"><input type="date"  value ={ dob } required onChange ={ event => setDob(event.target.value)}/></th>
                                </tr>
                                <tr>
                                    <td class="col01">Age</td>
                                    <th class="col11"><input type="number"  value ={ age } required onChange ={ event => setAge(event.target.value)}/></th>
                                </tr>
                                <tr>
                                    <td class="col01">Country</td>
                                    <th class="col11"><input type="text" value ={ country } required onChange ={ event => setCountry(event.target.value)}/></th>
                                </tr>
                                <tr>
                                    <td class="col01">Gender</td>
<<<<<<< HEAD
                                    <select value={gender} required onChange={event => setGender(event.target.value)}>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
=======
                                    <th class="col11">
                                    <select class="dropdown2" value={gender} required onChange={event => setGender(event.target.value)}>
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>       
                                    </select></th>

>>>>>>> 7244174a73267e94efe62b6577fcfb0cb090b942
                                </tr>

                            </table>
                        </div>
                        <div class="data22">
                            <Link to="/bm"> <input class="data11" type="submit" value="Submit"/></Link>
                            <Link to="/bp"> <input class="data11" type="reset" value="Reset"/></Link>
                        </div>
            </div>

    
        </>
    )

}

export default Bp;

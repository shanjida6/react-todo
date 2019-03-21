import React from 'react'
import { Link } from 'react-router-dom'

const About = props => (
    <div className="login">
        <form onSubmit = {props.getUser}>
            <h4>Login</h4>
    
            <input id='login_input' type="text" name="name" placeholder="Enter User"/>
            <button className='btn'>Submit</button>
           
            <p id="login_issue"></p>
        </form>
    
        <form onSubmit = {props.createUsername}>
            <h4>Register New User</h4>
    
            <input type="text" name="name" placeholder="New User"/>
            <button className='btn'>Submit</button>
            <p id="error"></p>
        </form>
     </div>
        
    
    );

export default About;

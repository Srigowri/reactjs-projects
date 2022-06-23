import React,{useState} from "react";

export default function App(){
    const [formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confimation:"",
        gender:"",
        newsletter:false,
        favColor:""

    })
    function handleSubmit(event){
        event.preventDefault();
        if (formData.password === formData.confimation){
            console.log("Successfully submitted form")
            if(formData.newsletter){
                console.log("Thanks for signing up for the newsletter")
            }
        }else{
            console.log("Passwords do not match")
        }


    }
    function handleChange(event){
        
        const {name, value, type, checked} = event.target;
        setFormData(oldFormData=>{
            return {
                ...oldFormData,
                [name]: type==="checkbox"?checked: value
            }
        })
        console.log(formData)
    }
    return (
    <form onSubmit={handleSubmit}>    
        <input 
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="enter first name"
        onChange ={handleChange}
        />
        <input type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="enter last name"
        onChange ={handleChange}
        />
        <input type="text"
        name="email"
        value={formData.email}
        placeholder="enter email id"
        onChange ={handleChange}
        />
        <input type="password"
        name="password"
        value={formData.password}
        placeholder="enter password"
        onChange ={handleChange}
        />
        <br/>
        <input type="password"
        name="confimation"
        value={formData.confimation}
        placeholder="confirm password"
        onChange ={handleChange}
        />
        <br/>
        <input type="checkbox"
        checked={formData.newsletter}
        name="newsletter"
        id="newsletter"
        onChange ={handleChange}
        />
        <label htmlFor="newsletter">Sign me up for newsletter</label>
        <br/>
        <br/>
        <input type="radio"
        name="gender"
        value="male"
        id="male"
        checked = {formData.gender === "male"}
        onChange ={handleChange}
        /><label htmlFor="male">Male</label>
        <input type="radio"
        name="gender"
        value="female"        
        checked = {formData.gender === "female"}
        onChange ={handleChange}
        /><label htmlFor="female">Female</label>
        <br/>
        <br/>
        <textarea 
            name="comments"
            value={formData.comments}
            onChange ={handleChange}
        />
        <select
        name="favColor"
        value={formData.favColor}
        onChange ={handleChange}
        >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        </select>
        <br/>
        <br/>
        <button >Submit Form</button>

    </form>)
}

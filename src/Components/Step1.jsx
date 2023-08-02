import { useState } from "react";
import { Link } from "react-router-dom";


const Step1 = () => {
  const [value, setValue] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="container">
      <h1>Personal info</h1>
      <p className="steps">Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={value} onChange={handleChange} name="name" required placeholder="e.g Stephen King" />
        </div>
        
        <div className="input">
          <label htmlFor="name">Email Address</label>
          <input type="text" value={value} onChange={handleChange} name="name" required placeholder="e.g stephenking@lorem.com" />
        </div>
        
        <div className="input">
          <small>This field is required</small>
          <label htmlFor="name">Phone Number</label>
          <input type="text" value={value} onChange={handleChange} name="name" required placeholder="e.g +1 234 567 890" />
        </div>
      </form>
      <div className="btn">
        <Link to='/step2' className="link">Next Step</Link>
      </div>
    </div>
  )
}

export default Step1
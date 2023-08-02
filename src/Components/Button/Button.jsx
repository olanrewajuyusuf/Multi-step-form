import { Link } from 'react-router-dom'
import './button.css'

const Button = ({backTo, label, goto}) => {
    
  return (
    <>
    <Link to={backTo} className='link-btn'  >Go Back</Link>
    <Link to={goto} className='link-btn btn-bg' >{label}</Link>
    </>
  )
}

export default Button
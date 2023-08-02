import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/' className='navlink'>1</NavLink>
                <div className="step">
                    <small>STEP 1</small>
                    <strong>YOUR INFO</strong>
                </div>
            </li>
            <li>
                <NavLink to='/step2' className='navlink'>2</NavLink>
                <div className="step">
                    <small>STEP 2</small>
                    <strong>SELECT PLAN</strong>
                </div>
            </li>
            <li>
                <NavLink to='/step3' className='navlink'>3</NavLink>
                <div className="step">
                    <small>STEP 3</small>
                    <strong>ADD-ONS</strong>
                </div>
            </li>
            <li>
                <NavLink to='/step4' className='navlink'>4</NavLink>
                <div className="step">
                    <small>STEP 4</small>
                    <strong>SUMMARY</strong>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;
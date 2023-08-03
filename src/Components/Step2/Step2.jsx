import { useSelector, useDispatch } from "react-redux"
import { toggleActions } from "../../Redux-store/toggle";
import { pickedActions } from "../../Redux-store/picked";
import Button from "../Button/Button"
import Plan from "./Plan"
import './step2.css'

const Step2 = () => {
  // Toggling states changers
  const isToggled = useSelector((state) => state.toggle.isToggled);
  const arcade = useSelector((state) => state.toggle.arcade);
  const advanced = useSelector((state) => state.toggle.advanced);
  const pro = useSelector((state) => state.toggle.pro);
  // Plans states selection
  const isArcade = useSelector((state) => state.picked.arcade);
  const isAdvanced = useSelector((state) => state.picked.advanced);
  const isPro = useSelector((state) => state.picked.pro);
  const hovArcade = useSelector((state) => state.picked.hovArcade);
  const hovAdvanced = useSelector((state) => state.picked.hovAdvanced);
  const hovPro = useSelector((state) => state.picked.hovPro);
  // Dispatch
  const dispatch = useDispatch();

  // Toggling between month and year dispatch function
  const handleToggle = ()=>{
    dispatch(toggleActions.handleToggle())
  }

  // Clicking on plans dispatch functions
  const handleArcade = ()=>{
    dispatch(pickedActions.handleArcade())
  }
  const handleAdvanced = ()=>{
    dispatch(pickedActions.handleAdvanced())
  }
  const handlePro = ()=>{
    dispatch(pickedActions.handlePro())
  }

  // Hover effect function dispatch
  const hoverArcade = ()=>{
    dispatch(pickedActions.hoverArcade())
  }
  const hoverAdvanced = ()=>{
    dispatch(pickedActions.hoverAdvanced())
  }
  const hoverPro = ()=>{
    dispatch(pickedActions.hoverPro())
  }


  return (
    <div className="step2">
      <h1>Select your plan</h1>
      <p className="steps">You have the option of monthly or yearly billing.</p>

      {/* choosing plans section */}
      <div className="plan-wrap">
        <Plan image="images/icon-arcade.svg" alt="arcade" plan="Arcade" price={arcade} click={handleArcade} style={isArcade} enter={hoverArcade} leave={hoverArcade} hover={hovArcade}/>
        <Plan image="images/icon-advanced.svg" alt="advanced" plan="Advanced" price={advanced} click={handleAdvanced} style={isAdvanced} enter={hoverAdvanced} leave={hoverAdvanced} hover={hovAdvanced}/>
        <Plan image="images/icon-pro.svg" alt="pro" plan="Pro" price={pro} click={handlePro} style={isPro} enter={hoverPro} leave={hoverPro} hover={hovPro}/>
      </div>

      {/* Toggling Monthly and Yearly */}
      <div className="toggle-wrap">
        <p style={{color: isToggled ?  "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Monthly</p>
        <div className="toggle" style={{justifyContent: isToggled ?  "left" : "right", cursor: "pointer"}} onClick={handleToggle}>
          <div className="ball"></div>
        </div>
        <p style={{color: !isToggled ?  "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Yearly</p>
      </div>
      
      {/* Button section */}
      <div className="btn-2">
        <Button label='Next Step' backTo='/' goto='/step3'/>
      </div>
    </div>
  )
}

export default Step2
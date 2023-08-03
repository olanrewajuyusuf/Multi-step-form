import Button from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { checkedActions } from "../../Redux-store/checked";

import AddOns from "./Add-ons"
import './step3.css'

const Step3 = () => {
  const isToggled = useSelector((state) => state.toggle.isToggled);
  const service = useSelector((state) => state.checked.service);
  const storage = useSelector((state) => state.checked.storage);
  const profile = useSelector((state) => state.checked.profile);
  const isService = useSelector((state) => state.checked.isService);
  const isStorage = useSelector((state) => state.checked.isStorage);
  const isProfile = useSelector((state) => state.checked.isProfile);
  const dispatch = useDispatch();

  // Dispatch function handling
  const handleService = () => {
    dispatch(checkedActions.handleService())
  }
  const handleStorage = () => {
    dispatch(checkedActions.handleStorage())
  }
  const handleProfile = () => {
    dispatch(checkedActions.handleProfile())
  }

  // Hover state function dispatch
  const hoverService = () => {
    dispatch(checkedActions.hoverService())
  }
  const hoverStorage = () => {
    dispatch(checkedActions.hoverStorage())
  }
  const hoverProfile = () => {
    dispatch(checkedActions.hoverProfile())
  }
    
  return (
    <div className="step3">
        <h1>Pick add-ons</h1>
        <p className="steps">Add-ons help enhance your gaming experience.</p>

        {/* ---Add-Ons Lists--- */}
        <AddOns label="Online service" info='Access to multiplayer games' price={isToggled ? 1 : 10} click={handleService} style={service} mouse={hoverService} hover={isService}/>
        <AddOns label="Larger storage" info='Extra 1TB of cloud save' price={isToggled ? 2 : 20} click={handleStorage} style={storage} mouse={hoverStorage} hover={isStorage}/>
        <AddOns label="Customizable profile" info='Custom theme on you profile' price={isToggled ? 2 : 20} click={handleProfile} style={profile} mouse={hoverProfile} hover={isProfile}/>
        
        {/* ---Button section--- */}
        <div className="btn-3">
          <Button label='Next Step' backTo='/step2' goto='/step4'/>
        </div>
    </div>
  )
}

export default Step3
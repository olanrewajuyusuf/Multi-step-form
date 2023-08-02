import { useSelector } from "react-redux"

const AddOns = ({price, label, info, click, style }) => {
  const isToggled = useSelector((state) => state.toggle.isToggled);

  const styles = {
    borderColor: style ? "hsl(243, 100%, 62%)" : "hsl(231, 11%, 63%)", 
    backgroundColor: style ? "hsl(217, 100%, 97%)" : "unset",
    cursor: "pointer"
  }

  return (
    <div className="add-on" style={styles} onClick={click} >
      <div className="wrap">
      <input type="checkbox" checked={style} />
        <div className="add">
            <strong>{label}</strong>
            <small>{info}</small>
        </div>
      </div> 
      <small className="price">+${price}/{isToggled ?  "mo" : "yr"}</small>
    </div>
  )
}

export default AddOns
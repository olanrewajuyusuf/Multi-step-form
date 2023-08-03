import { useSelector } from "react-redux";

const Plan = ({image, alt, plan, price, click, style, hover, enter, leave}) => {
  const isToggled = useSelector((state) => state.toggle.isToggled);

  const styles = {
    borderColor: hover ? 'hsl(243, 100%, 62%)' : style ? "hsl(243, 100%, 62%)" : "hsl(231, 11%, 63%)", 
    backgroundColor: style ? "hsl(217, 100%, 97%)" : "unset",
    cursor: "pointer"
  }

  return (
    <div className="plan-box" style={styles} onClick={click} onMouseEnter={enter} onMouseLeave={leave}>
      <img src={image} alt={alt} />
      <div className="plan">
        <strong>{plan}</strong>
        <small>${price}/{isToggled ?  "mo" : "yr"}</small>
        {!isToggled && <small style={{color: "hsl(213, 96%, 18%)"}}>2 months free</small>}
      </div>
    </div>
  )
}

export default Plan
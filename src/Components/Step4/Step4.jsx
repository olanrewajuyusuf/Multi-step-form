import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import './step4.css'

const Step4 = () => {
  const isToggled = useSelector((state) => state.toggle.isToggled);
  const plan = useSelector((state) => state.picked.plan);
  const price = useSelector((state) => state.picked.price);
  const service = useSelector((state) => state.checked.service);
  const storage = useSelector((state) => state.checked.storage);
  const profile = useSelector((state) => state.checked.profile);

  // Fuction to access the price and total price of plans and add-ons
  let lists = ['serv', 'store', 'prof', 'retPrice']  

  const totalPrice = (total) => {
    // Getting Add-ons prices
    if (service) lists[0] = isToggled ? 1 : 10;
    else lists[0] = 0;
    if (storage) lists[1] = isToggled ? 2 : 20;
    else lists[1] = 0;
    if (profile) lists[2] = isToggled ? 2 : 20;
    else lists[2] = 0

    // Getting Plans prices
    if (plan === 'Arcade' && isToggled) {
      lists[3] = price[0]
    } else if (plan === 'Arcade' && !isToggled) {
      lists[3] = price[3]
    }
    if (plan === 'Advanced' && isToggled) {
      lists[3] = price[1]
    } else if (plan === 'Advanced' && !isToggled) {
      lists[3] = price[4]
    }
    if (plan === 'Pro' && isToggled) {
      lists[3] = price[2]
    } else if (plan === 'Pro' && !isToggled) {
      lists[3] = price[5]
    }

    // Adding up the total price of plan and add-ons
    lists.forEach(list => total += list)
    return total;
  }
  totalPrice(0);

  return (
    <div className="step4">
        <h1>Finishing up</h1>
        <p className="steps">Double-check everything looks OK before confirming.</p>

        {/* ---Getting plans and add-ons and there prices--- */}
        <div className="wrapper">
          <div className="plan-history">
            <div className="plan">
              <p>{plan} ({isToggled ? 'Monthly' : 'Yearly'})</p>
              <Link id="link" to='/step2'>Change</Link>
            </div>
            <strong>${lists[3]}/{isToggled ? 'mo' : 'yr'}</strong>
          </div>
          <hr />
          <div className="add-ons">
            {service && <p>Online service<span>+${lists[0]}/{isToggled ? 'mo' : 'yr'}</span></p>}
            {storage && <p>Larger storage<span>+${lists[1]}/{isToggled ? 'mo' : 'yr'}</span></p>}
            {profile && <p>Customizable profile<span>+${lists[2]}/{isToggled ? 'mo' : 'yr'}</span></p>}
          </div>
        </div>

        {/* ---Total price--- */}
        <p className="total">Total (per {isToggled ? 'month' : 'year'})<span>+${totalPrice(0)}/{isToggled ? 'mo' : 'yr'}</span></p>

        {/* ---Button section--- */}
        <div className="button">
          <Button label='Confirm' goto='/step5' backTo='/step3'/>
        </div>
    </div>
  )
}

export default Step4
import { Route, Routes } from 'react-router-dom'

import Step1 from './Step1'
import Step2 from "./Step2/Step2"
import Step3 from "./Step3/Step3"
import Step5 from "./Step5"
import Step4 from "./Step4/Step4"
import NavBar from './NavBar'
import './styles.css'

const MultiStepForm = () => {
  return (
    <main>
      <header>
        <img src="images/bg-sidebar-mobile.svg" alt='sidebar-background' className='bg-mobile'/>
        <img src="images/bg-sidebar-desktop.svg" alt='sidebar-background' className='bg-desktop'/>
        <NavBar />
      </header>
      <section>
        <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='/step2' element={<Step2 />} />
          <Route path='/step3' element={<Step3 />} />
          <Route path='/step4' element={<Step4 />} />
          <Route path='/step5' element={<Step5 />} />
        </Routes>
      </section>
    </main>
  )
}

export default MultiStepForm

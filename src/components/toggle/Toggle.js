import React, { useContext} from 'react'
import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { ThemeContext } from '../../context'
const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleToggle = (e)=> {
        theme.dispatch({type : "TOGGLE"})
   
        console.log('clicked')
    }
    
  return (
    <div className='t'>
        <img src={Sun} alt="" className='t-icon' />
        <img src={Moon} alt="" className='t-icon' />
        <div className='t-button'style={{left : theme.state.darkMode ? "0px":"25px"}} onClick={handleToggle}></div>
    </div>
  )
}

export default Toggle
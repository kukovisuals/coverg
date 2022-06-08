import React, {useState} from 'react';
import useWindowSize from '../windowSize/useWindowSize';
import PolicyMobile from '../PolicyMobile/PolicyMobile';
import PolicyDesktop from '../PolicyDesktop/PolicyDesktop';

function PolicyCard({info, responsiveBreak}){
  const [x, ] = useWindowSize();
  const [toggle, setToggle] = useState(false)
  
  const wrapperClasses = toggle ? 
    'policy_card_child_component_wrapper active': 'policy_card_child_component_wrapper'
  
  
  return(
  <div className={wrapperClasses} onClick={(e) => setToggle(!toggle)}>
    { x > responsiveBreak ? <PolicyDesktop info={info} toggle={toggle}/> : <PolicyMobile info={info}/> }
  </div>
  )
}

export default PolicyCard;
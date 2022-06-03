import React, {useState} from 'react';
import useWindowSize from '../windowSize/useWindowSize';
import FormatDay from '../Format/FormatDay';
import {IconActive, IconNotActive} from '../IconSvg/IconSvg';

function PolicyCard({info}){
  const [x, ] = useWindowSize();
  const [toggle, setToggle] = useState(false)

  const responsiveBreak = 700
   
  const wrapperClasses = toggle ? 'policy_card_child_component_wrapper active': 'policy_card_child_component_wrapper'
  
  const Renewal = () => (
    <div className="policy_card_child_component_upperLevel_dates">
      <span  className="policy_card_child_component_upperLevel_formated">{FormatDay(info,'renewal')} </span>
      <span className="policy_card_child_component_upperLevel_span">Renewal date</span>
    </div>
  )

  const PolicyDesktop = () => (
    <>
     <div className="policy_card_child_component_circle">
      <div className="policy_card_child_component_circle_wrapper">
       {toggle ?  <IconActive/> : <IconNotActive/>}
   
      </div>
    </div>

    <div className="policy_card_child_component_lowerLevel1">
      <div className="policy_card_child_component_upperLevel_dates">
        <span className="policy_card_child_component_upperLevel_formated">{FormatDay(info, 'payment')}</span>
        <span className="policy_card_child_component_upperLevel_span">Payment date</span>
      </div>
      
    </div>

    <div className="policy_card_child_component_lowerLevel3">

      <div className="policy_card_child_component_upperLevel_dates">
        <span  className="policy_card_child_component_upperLevel_formated">{FormatDay(info, 'premium')} </span>
        <span className="policy_card_child_component_upperLevel_span">Price/Premium</span>
      </div>
      
    </div>

    <div className="policy_card_child_component_lowerLevel4">

      {FormatDay(info,'renewal') !== '' ?  <Renewal/> : ''}
    </div>

    <PolicyMobile/>
   </>
  )

  const PolicyMobile =  () => (
    <>
      <div className="policy_card_child_component_upperLevel">
        <h4>{info.title}</h4>
        <span className="policy_card_child_component_upperLevel_description"> {FormatDay(info, 'description')}</span>
      </div>
      <div className="policy_card_child_component_middle">  
      </div>
      <div className="policy_card_child_component_lowerLevel2">

        <div className="policy_card_child_component_upperLevel_dates">

          <span className='policy_card_child_component_upperLevel_formated'>{FormatDay(info, 'coverage dates')} </span>
          <span className="policy_card_child_component_upperLevel_span">Coverage dates</span>
        </div>
        
      </div>
      <div className="policy_card_child_component_logo">
        <div className="policy_card_child_component_logo_img">
          <img src={info.partner.logo} alt="logo"/>
        </div>
      </div>
    </>
  )

   // console.log(info)
  return(
  <div className={wrapperClasses} onClick={(e) => setToggle(!toggle)}>
    { x > responsiveBreak ? <PolicyDesktop info={info} toggle={toggle}/> : <PolicyMobile info={info}/> }
  </div>
  )
}

export default PolicyCard;
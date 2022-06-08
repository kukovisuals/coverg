import React from 'react';
import FormatDay from '../Format/FormatDay';
import {IconActive, IconNotActive} from '../IconSvg/IconSvg';
// import PolicyMobile from '../PolicyMobile/PolicyMobile';

const PolicyDesktop = ({info, toggle}) => (
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
    
    <div className="policy_card_child_component_upperLevel">
      <h4>{info.title}</h4>
      <span className="policy_card_child_component_upperLevel_description">{FormatDay(info, 'description')}</span>
    </div>
    
    <div className="policy_card_child_component_middle">  
    </div>
    <div className="policy_card_child_component_lowerLevel2">

    <div className="policy_card_child_component_upperLevel_dates">
      <span className='policy_card_child_component_upperLevel_formated'>{FormatDay(info, 'coverage dates desktop')}</span>
      <span className="policy_card_child_component_upperLevel_span">{FormatDay(info, 'coverage or shipped')}</span>
    </div>
      
    </div>
    <div className="policy_card_child_component_logo">
      <div className="policy_card_child_component_logo_img">
        <img src={info.partner.logo} alt="logo"/>
      </div>
    </div>
    
    <div className="policy_card_child_component_lowerLevel3">
      <div className="policy_card_child_component_upperLevel_dates">
        <span  className="policy_card_child_component_upperLevel_formated">{FormatDay(info, 'premium')}</span>
        <span className="policy_card_child_component_upperLevel_span">Price/Premium</span>
      </div>
    </div>

    <div className="policy_card_child_component_lowerLevel4">
      {FormatDay(info,'renewal') !== '' ?  <Renewal info={info}/> : ''}
    </div>

 </>
)

const Renewal = ({info}) => (
  <div className="policy_card_child_component_upperLevel_dates">
    <span  className="policy_card_child_component_upperLevel_formated">{FormatDay(info,'renewal')} </span>
    <span className="policy_card_child_component_upperLevel_span">Renewal date</span>
  </div>
)
  export default PolicyDesktop;
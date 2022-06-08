import React from 'react';
import FormatDay from '../Format/FormatDay';

const PolicyMobile =  ({info}) => (
  <>
    <div className="policy_card_child_component_upperLevel">
      <h4>{info.title}</h4>
      <span className="policy_card_child_component_upperLevel_description">{FormatDay(info, 'description')}</span>
    </div>
    <div className="policy_card_child_component_middle">  
    </div>
    <div className="policy_card_child_component_lowerLevel2">

      <div className="policy_card_child_component_upperLevel_dates">
        <span className='policy_card_child_component_upperLevel_formated'>{FormatDay(info, 'coverage dates')}</span>
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

export default PolicyMobile;
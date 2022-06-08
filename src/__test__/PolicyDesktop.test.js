import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PolicyDesktop from '../components/PolicyDesktop/PolicyDesktop'
import PolicyMobile from '../components/PolicyMobile/PolicyMobile'

const data = {
	"id": "PARCEL-COVER-INS",
  "type": "parcel",
  "title": "Parcel shipment to America",
  "description": "Parcel Insurance",
  "status": "expired",
  "premium": 10.65,
  "premium_formatted": "AUD $10.65",
  "payment_date": "2019-01-01T13:29:38.814849Z",
  "coverage_start_date": "2019-01-17",
  "coverage_end_date": null,
  "renewal": null,
  "partner": {
    "id": "magna",
    "name": "Magna Co.",
    "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/magna.svg"
    }
}
const toggle = false; 

describe('<PolicyDesktop info={data} toggle={toggle}/>', () =>{

	it('Return -> <PolicyMobile info={data}/>', () =>{
		const wrapper = shallow(<PolicyDesktop info={data} toggle={toggle}/>)	
		const value = wrapper.contains(<PolicyMobile info={data}/>)
		expect(value).toEqual(true)
	});

	it('Return data.payment -> 01-JAN-2019', () =>{
		const wrapper = shallow(<PolicyDesktop info={data} toggle={toggle}/>)	
		const value = wrapper.find('.policy_card_child_component_lowerLevel1 .policy_card_child_component_upperLevel_formated').text()
		expect(value).toEqual('01-JAN-2019')
	});

	it('Return data.premium_formatted -> AUD $10.XX', () =>{
		const wrapper = shallow(<PolicyDesktop info={data} toggle={toggle}/>)	
		const value = wrapper.find('.policy_card_child_component_lowerLevel3 .policy_card_child_component_upperLevel_formated').text()
		expect(value).toEqual('AUD $10.65')
	});


})

import React from 'react';
import { shallow, mount, render } from 'enzyme';
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

describe('<PolicyMobile info={data}/>', () =>{

	it('Return data.title -> Parcel shipment to America ', () =>{
		const wrapper = shallow(<PolicyMobile info={data}/>)	
		const value = wrapper.find('.policy_card_child_component_upperLevel h4').text()
		expect(value).toEqual('Parcel shipment to America')
	});

	it('Return data.title -> XXXX-XXXX-INS | Parcel Insurance ', () =>{
		const wrapper = shallow(<PolicyMobile info={data}/>)	
		const value = wrapper.find('.policy_card_child_component_upperLevel_description').text()
		expect(value).toEqual('PARC-COVE-INS | Parcel Insurance')
	});
	
	it('Return -> emty div ', () =>{
		const wrapper = shallow(<PolicyMobile info={data}/>)	
		const value = wrapper.find('.policy_card_child_component_middle').text()
		expect(value).toEqual('')
	});
	
	it('Return data.coverage_start_date -> 2019-JAN-17 to 2020-JAN-17 ', () =>{
		const wrapper = shallow(<PolicyMobile info={data}/>)	
		const value = wrapper.find('.policy_card_child_component_upperLevel_formated').text()
		expect(value).toEqual('17-JAN-2019 to 17-JAN-2020')
	});
})

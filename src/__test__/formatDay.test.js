import FormatDay from '../components/Format/FormatDay';

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

describe("FormatDay", () =>{
	it("FormatDay(data,'payment' ) should return -> 01-JAN-2019", () => {
		const formatedDay = FormatDay(data,'payment');
		expect(formatedDay).toBe('01-JAN-2019');
	});
	it("FormatDay(data, 'coverage dates') should return -> 01-JAN-2019 to 01-JAN-2020", () => {
		const formatedDay = FormatDay(data,'coverage dates');
		expect(formatedDay).toBe('17-JAN-2019 to 17-JAN-2020');
	});

	it("FormatDay(data, 'renewal') should return -> 01-JAN-2019 or '' " , () => {
		const formatedDay = FormatDay(data,'renewal');
		expect(formatedDay).toBe('');
	});

	it("FormatDay(data, 'premium') should return -> AUD $XX.XX" , () => {
		const formatedDay = FormatDay(data,'premium');
		expect(formatedDay).toBe('AUD $10.65');
	});
	it("FormatDay(data, 'description') should return -> XXXX-XXXX-INS | Parcel Insurance" , () => {
		const formatedDay = FormatDay(data,'description');
		expect(formatedDay).toBe('PARC-COVE-INS | Parcel Insurance');
	});
});




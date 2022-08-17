import react, { useEffect, useState } from 'react';
import Select from 'react-select';
import './App.css';
import Country from './country';

function App() {

  const [formData, setFormData] = useState({ Address: '', Line2: '', City: '', postCode: '', State: '', country: '', taxNumber: '' })

  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'Australia', label: 'Australia' },
    { value: 'India', label: 'India' },
    { value: 'Europe', label: 'Europe' },
    { value: 'USA', label: 'USA' },
  ];

  const handleChange = (e) => {
    console.log(formData);
    //console.log(selectedOption.value);
    setFormData({ ...formData, [e.target.name]: e.target.value, country: selectedOption.value });
  }

  useEffect(() => {
    //console.log(selectedOption);
    setFormData({ ...formData, country: selectedOption.value });
    console.log(formData);
  }, [selectedOption])

  return (

    <div className="container" >
      <form className="contact-form">

        <label for='Address' style={{ marginBottom: '5px' }}>ResidentialAddress</label> <br />
        <input
          id="Address"
          className="form-field"
          type="text"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
        /> <br />

        <label for='Line2' style={{ marginBottom: '5px' }}>Line 2 (Optional)</label> <br />
        <input
          id="Line2"
          className="form-field"
          type="text"
          name="Line2"
          value={formData.Line2}
          onChange={handleChange}
        /> <br />

        <label for='City'>City or Town</label> <br />
        <input
          id="City"
          className="form-field"
          type="text"
          name="City"
          value={formData.City}
          onChange={handleChange}
        /> <br />

        <label for='postCode'> ZIP or post code</label> <br />
        <input
          id="postCode"
          className="form-field"
          type="Number"
          name="postCode"
          value={formData.postCode}
          onChange={handleChange}
        /> <br />

        <label for='State'>State or province</label> <br />
        <input
          id="State"
          className="form-field"
          type="text"
          name="State"
          value={formData.State}
          onChange={handleChange}
        /> <br />

        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />

        {(formData.country == "Australia") && (
          <>
            <Country formData={formData} setFormData={setFormData} />
          </>
        )}

      </form>
    </div>

  );
}

export default App;

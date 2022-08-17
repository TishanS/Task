import React, { useState } from 'react'

function Country({ formData, setFormData }) {

    const [isTaxNum, setIsTaxNum] = useState(false)

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }

    return (

        <>
            <input
                type="checkbox"
                name="tax"
                value={isTaxNum}
                onChange={() => setIsTaxNum(isTaxNum => !isTaxNum)}
            /> Do you have a tax number? <br />  <br />

            {isTaxNum ?
                <>
                    <label for='taxNumber' style={{ marginBottom: '5px' }}>My Tax Number:</label> <br />
                    <input
                        id="taxNumber"
                        className="form-field"
                        type="text"
                        name="taxNumber"
                        value={formData.taxNumber}
                        onChange={handleChange}
                    />
                </> 
                :
                <>
                    <h1>Excemption Categories</h1>
                    <input
                        type="radio"
                        name="tax"
                        value="Category1"
                    /> <strong>Category 1</strong> <br />  <br />
                    <input
                        type="radio"
                        name="tax"
                        value="Category2"
                    /> <strong>Category 2</strong> <br /> <br />
                    <input
                        type="radio"
                        name="tax"
                        value="Category3"
                    /> <strong>Category 3</strong> <br /> <br />
                    <input
                        type="radio"
                        name="tax"
                        value="Category4"
                    /> <strong>Category 4</strong>
                </>
            }
        </>
    );
}

export default Country;

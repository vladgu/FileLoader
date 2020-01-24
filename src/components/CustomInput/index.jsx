import React from 'react'

const CustopInput = ({ validationHandler }) => (
  <>
    <label className="file-container">
      Upload files
      <input type='file' name='file' data-multiple-caption='' className='inputfile' multiple onChange={ e => validationHandler([...e.target.files]) } />
    </label>
  </>
)
export default CustopInput
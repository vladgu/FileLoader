import React, { useState } from 'react';
import '../styles/_main.scss'

import ListItem from '../components/ListItem'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const App = () => {
  const [filesArr, setFilesArr] = useState([])


  const filesValidation = elems => {
    const resultArr = []
    // console.log(elems)
    elems.forEach(item => {
      if (item.size < 1024000) {
        if (item.type.substr(0, 5) === 'image') {
          if (item.type.substr(6) === 'jpeg' || item.type.substr(6) === 'png') {
            resultArr.push(item)
          } else {
            alert(`Uploading image ${item.name} failed: it's not a jpeg or png file!`)
          }
        } else {
          resultArr.push(item)
        }
      } else {
        return alert(`Uploading file ${item.name} failed: it's size is bigger than 1MB!`)
      }

    })
    filesArr ? setFilesArr(filesArr.concat(resultArr)) : setFilesArr(resultArr)
  }

  const removeFile = index => {
    const editArr = [...filesArr]
    editArr.splice(index, 1)
    setFilesArr(editArr)
  }

  const submit = () => {
    if (filesArr && filesArr.length) {
      const formData = new FormData();

      formData.append('file', filesArr);

      // const request = new XMLHttpRequest();
      // request.open('POST', '');
      // request.send(formData);
    } else {
      alert('Choose files to upload first!')
    }
  }

  return (
    <div className='app'>
      <div className='table-list'>
        <div className='table-legend'>
          <span className='table-name'>Name</span>
          <span className='table-ext'>Ext</span>
          <span className='table-ext'>Size</span>
          <span className=''>Del</span>
        </div>
        <ol className='list-reset'>
          {
            filesArr && filesArr.map((file, index) => (
              <ListItem
                key={ String(index) }
                name={ file.name.substr(0, file.name.lastIndexOf('.')) }
                ext={ file.name.substr(file.name.lastIndexOf('.') + 1, file.name.length) }
                size={ file.size }
                remove={ () => { removeFile(index) } } />
            )
            )
          }
        </ol>
      </div>
      <div className='buttons-wrapper'>
        <CustomInput validationHandler={ filesValidation } />
        <CustomButton onClickHandler={ submit } />
      </div>
    </div>
  );
}

export default App;

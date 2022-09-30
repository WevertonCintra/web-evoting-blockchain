import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 30px;
  background-color: white;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
`;
const FileUploader = () => {
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
  };
  return (
    <>
      <Button onClick={handleClick}>
        Carregar Chave Privada
      </Button>
      <input type="file" name="private_key"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
    </>
  );
};
export default FileUploader;
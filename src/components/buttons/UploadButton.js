import React from 'react';
import { uploadFile } from '../../services/studio';
import { ReactComponent as Upload } from '../../assets/icon/upload.svg';
function UploadButton({ buttonName, iconName }) {
  const fileInputRef = React.useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={uploadFile} />
      <button className={buttonName} onClick={handleClick}>
        <Upload className={iconName} />
      </button>
    </div>
  );
}

export default UploadButton;

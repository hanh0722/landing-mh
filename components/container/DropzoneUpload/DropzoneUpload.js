import React, {useEffect} from "react";
import { useDropzone } from "react-dropzone";
import styles from './DropzoneUpload.module.scss';

function DropzoneUpload({title, fileAllowTitle, configDropzone, getFilesHandler }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
      ...configDropzone,
  });
  useEffect(() => {
    if(!getFilesHandler){
      return;
    }
    getFilesHandler(acceptedFiles);
  }, [acceptedFiles, getFilesHandler]);
  return (
    <section>
      <div {...getRootProps({ className: `dropzone ${styles.dropzone}`})}>
        <input {...getInputProps()} />
        <h5>{title}</h5>
        <p>{fileAllowTitle}</p>
      </div>
    </section>
  );
}

export default DropzoneUpload;

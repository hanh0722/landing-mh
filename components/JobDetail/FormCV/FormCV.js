import React, { useCallback, useEffect, useState } from "react";
import styles from "./FormCV.module.scss";
import { Grid, DropzoneUpload, Button } from "../../container";
import Input from "./Input";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { ValidateLengthInput } from "../../../util";
import useFetch from "../../../hook/use-fetch";
import { modelActions } from "../../../store/slices/model-slice";
import { CSSTransition } from "react-transition-group";
const FormCV = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const isOpened = useSelector((state) => state.model.openOverlay);
  const { fetchDataFromServer, error, upload_progress, isLoading, data } =
    useFetch();
  const submitFormHandler = (event) => {
    event.preventDefault();
  };
  const getFileHandler = useCallback(
    (files) => {
      if (!files || files.length === 0) {
        return;
      }
      const file = files[0];
      setFile(file.name);
      const formData = new FormData();
      formData.append("file_upload", files[0]);
      fetchDataFromServer({
        url: "https://login.noron.vn/api/upload/file",
        method: "POST",
        data: formData,
      });
    },
    [fetchDataFromServer]
  );
  useEffect(() => {
    if (isLoading) {
      setIsLoadingSession(true);
    }
    if (!isLoading && !error) {
      setTimeout(() => {
        setIsLoadingSession(false);
      }, 1000);
    }
    if (!isLoading && error) {
      setFile(null);
    }
  }, [isLoading, error]);
  const removeFileHandler = () => {
    setFile(null);
  };
  return (
    <form
      onSubmit={submitFormHandler}
      className={`${styles.container} ${isOpened && styles["container-back"]}`}
    >
      <h4>Nộp đơn ứng tuyển cho vị trí này</h4>
      <Grid className={styles.grid}>
        <Input
          inputDefine={{
            type: "text",
            required: true,
            autoComplete: "off",
            placeholder: "Họ và tên",
          }}
          error="Tên không được phép trống"
          checkValidate={(value) => ValidateLengthInput(value)}
        />
        <Input
          inputDefine={{
            type: "number",
            required: true,
            autoComplete: "off",
            placeholder: "Số điện thoại liên hệ",
            minLength: "1",
            maxLength: "11",
          }}
          checkValidate={(value) => ValidateLengthInput(value)}
          className={styles["phone-input"]}
          error="Số điện thoại không được phép trống"
        />
      </Grid>
      <div className={styles.inputs}>
        <div
          onClick={() => dispatch(modelActions.closeModelHandler())}
          className={styles.close}
        >
          <div></div>
          <div></div>
        </div>
        <Input
          inputDefine={{
            type: "email",
            required: true,
            autoComplete: "off",
            placeholder: "Địa chỉ email",
          }}
          checkValidate={(value) =>
            ValidateLengthInput(value) && value.includes("@")
          }
          error="Email không được phép trống"
        />
        <Input
          inputDefine={{
            type: "text",
            autoComplete: "off",
            placeholder: "Link sản phẩm (Nếu có)",
          }}
        />
        <DropzoneUpload
          title="Click để tải lên CV của bạn"
          fileAllowTitle="Chấp nhận file .pdf kích thước dưới 10MB"
          configDropzone={{
            accept: ".pdf",
            multiple: false,
          }}
          getFilesHandler={getFileHandler}
        />

        <CSSTransition
          in={!!file && !error}
          timeout={750}
          classNames="scale"
          unmountOnExit
          mountOnEnter
        >
          <div
            className={`position-relative d-inline-flex align-items-center ${
              styles.upload
            } ${isLoadingSession && styles["upload-disabled"]}`}
          >
            <span onClick={removeFileHandler} className={styles["remove-file"]}>
              <Image src="/close-icon.svg" alt="" width="15px" height="15px" />
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="folder"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-folder fa-w-16 fa-3x"
            >
              <path
                fill="currentColor"
                d="M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"
                className=""
              ></path>
            </svg>
            <a
              rel="noreferrer"
              href={data ? data.result.file_url : ""}
              target="_blank"
            >
              <p className={styles.text}>{file}</p>
            </a>
            {isLoadingSession && (
              <span
                className={`${styles.loading}`}
                style={{ width: `${upload_progress}%` }}
              >
                <span className={styles.progress}></span>
              </span>
            )}
          </div>
        </CSSTransition>
        {!isLoadingSession && error && (
          <p className={styles.error}>CV không thể upload, xin thử lại sau</p>
        )}
        <div className={styles.button}>
          <Button
            options={{
              type: "submit",
              disabled: isLoadingSession,
            }}
          >
            Nộp hồ sơ ngay
          </Button>
        </div>
      </div>
    </form>
  );
};
export default FormCV;

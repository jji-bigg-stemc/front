import React from "react";
import SoftInput from "components/SoftInput";

const SoftInputField = ({ input, meta, ...rest }) => {
  return (
    <>
      <SoftInput
        {...input}
        {...rest}
        error={meta.touched ? meta.error : ""}
        helperText={meta.touched ? meta.error : ""}
        success={meta.touched && !meta.error}
      />
      {meta.touched && meta.error && (
        <small style={{ color: "red", right: 0, fontSize: 12 }}>
          * {meta.error}
        </small>
      )}
    </>
  );
};

export default SoftInputField;

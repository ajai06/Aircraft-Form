import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function InputBox({
  register,
  errors,
  inputName,
  isRequired,
  label,
  inputType,
  placeholder,
  colSize,
  requiredErrorMsg,
  patternErrorMsg,
  rules,
}) {
  return (
    <>
      <Form.Group as={Col} md={colSize} controlId={inputName}>
        <Form.Label>
          {label} {isRequired && <span className="text-danger">*</span>}
        </Form.Label>
        <Form.Control
          {...register(inputName, rules)}
          type={inputType}
          placeholder={placeholder}
          className="text-input mb-1"
          isInvalid={errors[inputName]}
        />
        {errors[inputName]?.type === "required" ? (
          <span className="text-danger">{requiredErrorMsg}</span>
        ) : errors[inputName]?.type === "pattern" ? (
          <span className="text-danger">{patternErrorMsg}</span>
        ) : (
          ""
        )}
      </Form.Group>
    </>
  );
}

export default InputBox;

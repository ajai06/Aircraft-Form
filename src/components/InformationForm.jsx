import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import InputBox from "./sharedComponents/InputBox";

const applicationTypes = [
  {
    name: "Parked",
    id: 1,
  },
  {
    name: "Taxi",
    id: 2,
  },
  {
    name: "Take-Off Run",
    id: 3,
  },
  {
    name: "Climb",
    id: 4,
  },
  {
    name: "En-Route",
    id: 5,
  },
  {
    name: "Descent",
    id: 6,
  },
  {
    name: "Approach",
    id: 7,
  },
  {
    name: "Landing Roll",
    id: 8,
  },
];

const facilities = [
  {
    name: "RTF",
    id: 11,
  },
  {
    name: "Radar",
    id: 12,
  },
  {
    name: "Nav-Aid",
    id: 13,
  },
];

function InformationForm({
  setFormCompleted,
  setFormData,
  cancelBtnClicked,
  formData,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (cancelBtnClicked) {
      reset(formData);
    }
  }, [cancelBtnClicked]);

  const formSubmit = (data) => {
    setFormData(data);
    setFormCompleted(true);
  };

  const resetForm = () => {
    reset();
  };

  return (
    <>
      <div className="mt-5">
        <h3 className="heading-text">Application Information</h3>
        <p>
          A sub-heading is a mini-heading givwn to a subsection or paragraph
          within a main piece of writing.
          <br /> They're smaller than the mai headline but larger than tha
          paragraph text of the article
        </p>
      </div>
      <div className="form-box p-5">
        <Form noValidate onSubmit={handleSubmit(formSubmit)}>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="aircraftOperator"
              isRequired={true}
              label="Aircraft Operator"
              inputType="text"
              placeholder="Aircraft Operator"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="aircraftMake"
              isRequired={true}
              label="Aircraft Make/Type"
              inputType="text"
              placeholder="Aircraft Make/Type"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="aircraftCallSign"
              isRequired={true}
              label="Aircraft Call Sign"
              inputType="text"
              placeholder="Aircraft Call Sign"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="aircraftRegistration"
              isRequired={true}
              label="Aircraft Registration"
              inputType="text"
              placeholder="Aircraft Registration"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="dateOfOccurance"
              isRequired={true}
              label="Date Of Occurance"
              inputType="date"
              placeholder="Date Of Occurance"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="timeOfOccurance"
              isRequired={true}
              label="Time Of Occurance"
              inputType="date"
              placeholder="Time Of Occurance"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6} controlId="type">
              <Form.Label>
                Flight Rules <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                {...register("flightRules", { required: true })}
                className="text-input"
                aria-label="Default select example"
                defaultValue=""
                isInvalid={errors.flightRules}
              >
                <option value="">Select</option>
                <option value="IFR">IFR</option>
                <option value="VFR">VFR</option>
              </Form.Select>
              {errors.flightRules && (
                <span className="text-danger">This field is required</span>
              )}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={12} controlId="type">
              <Form.Label>
                Application Type <span className="text-danger">*</span>
              </Form.Label>
              <div id="selectButtons">
                {applicationTypes.map((item) => (
                  <label key={item.id} htmlFor={item.id}>
                    <input
                      type="radio"
                      {...register("applicationType", { required: true })}
                      value={item.name}
                      id={item.id}
                    />
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>
              {errors.applicationType && (
                <span className="text-danger">
                  Please select application type
                </span>
              )}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="runwayInUse"
              isRequired={true}
              label="Runway In Use"
              inputType="text"
              placeholder="Runway In Use"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="heightAgl"
              isRequired={true}
              label="Height (Agl)"
              inputType="text"
              placeholder="Height (Agl)"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="indicatedAirSpeed"
              isRequired={false}
              label="Indicated Air Speed (las-Kt)"
              inputType="text"
              placeholder="Indicated Air Speed (las-Kt)"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="environmentalDetails"
              isRequired={true}
              label="Environmental Details (Met Conditions)"
              inputType="text"
              placeholder="Environmental Details (Met Conditions)"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={12} controlId="type">
              <Form.Label>Facility</Form.Label>
              <div id="selectButtons">
                {facilities.map((item) => (
                  <label key={item.id} htmlFor={item.id}>
                    <input
                      type="radio"
                      {...register("facility")}
                      value={item.name}
                      id={item.id}
                    />
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="other"
              isRequired={false}
              label="Other (Please Specify)"
              inputType="text"
              placeholder="Other"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="frequency"
              isRequired={true}
              label="Frequency/Channel"
              inputType="text"
              placeholder="Frequency/Channel"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="detailsOfInadequacy"
              isRequired={true}
              label="Deatils Of Inadequacy"
              inputType="text"
              placeholder="Deatils Of Inadequacy"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="nameOfReporter"
              isRequired={true}
              label="Name Of Reporter"
              inputType="text"
              placeholder="Name Of Reporter"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="organization"
              isRequired={true}
              label="Organization/Position"
              inputType="text"
              placeholder="Organization/Position"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              errors={errors}
              inputName="email"
              isRequired={true}
              label="Email Address"
              inputType="email"
              placeholder="Email Address"
              colSize={6}
              rules={{
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:+\s@"]+(\.[^<>()[\]\\.,;:+\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }}
              requiredErrorMsg="This field is required"
              patternErrorMsg="Please enter valid email"
            />
          </Row>
          <Row className="mb-3">
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="address"
              isRequired={true}
              label="Address"
              inputType="text"
              placeholder="Address And Telephone"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
            <InputBox
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
              inputName="telephone"
              isRequired={true}
              label="Telephone"
              inputType="text"
              placeholder="Address And Telephone"
              colSize={6}
              requiredErrorMsg="This field is required"
            />
          </Row>
          <div className="mt-5">
            <Button
              type="button"
              className="cancel-btn ml-5"
              onClick={resetForm}
            >
              Reset
            </Button>
            <Button className="ml-3 submit-btn" type="submit">
              Next <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default InformationForm;

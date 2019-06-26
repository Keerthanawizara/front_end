import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  CustomInput,
  Input,
  CardTitle
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import { NavLink } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required!"),
  position: Yup.string().required("Position is required!"),
  phoneNum: Yup.string().required("Position is required!"),
  mailId: Yup.string()
    .email()
    .required("Mail Id is required!")
});

class settings extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    const payload = {
      ...values,
      state: values.state.value
    };
    setTimeout(() => {
      console.log(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  render() {
    return (
      <div>
        <Row className="mb-4">
          <Colxx xxs="12" md="6">
            <Card className="profile-left2">
              <CardBody>
                <CardTitle className="text-center">
                  <IntlMessages id="settings.settings" />
                </CardTitle>

                <Formik
                  initialValues={{
                    userName: "Michel Karthey",
                    position: "Executive Manager",
                    phoneNum: "+1-541-754-3010",
                    mailId: "michelkarthey@gmail.com"
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={this.handleSubmit}
                >
                  {({
                    handleSubmit,
                    setFieldValue,
                    setFieldTouched,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                    isSubmitting
                  }) => (
                    <Form className="av-tooltip tooltip-label-bottom">
                      <FormGroup
                        className={
                          "form-group has-top-label" +
                          (errors.userName && touched.userName
                            ? " border-danger m-0"
                            : "")
                        }
                      >
                        <Label
                          className={
                            errors.userName && touched.userName
                              ? "text-danger"
                              : ""
                          }
                        >
                          <IntlMessages id="settings.userName" />
                        </Label>
                        <Field
                          className={
                            "form-control" +
                            (errors.userName && touched.userName
                              ? " border-danger"
                              : "")
                          }
                          name="userName"
                        />
                        {errors.userName && touched.userName ? (
                          <small className="text-danger">
                            {errors.userName}
                          </small>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                      <FormGroup
                        className={
                          "form-group has-top-label" +
                          (errors.position && touched.position
                            ? " border-danger m-0"
                            : "")
                        }
                      >
                        <Label
                          className={
                            errors.position && touched.position
                              ? "text-danger"
                              : ""
                          }
                        >
                          <IntlMessages id="settings.position" />
                        </Label>
                        <Field
                          className={
                            "form-control" +
                            (errors.position && touched.position
                              ? " border-danger"
                              : "")
                          }
                          name="position"
                        />
                        {errors.position && touched.position ? (
                          <small className="text-danger">
                            {errors.position}
                          </small>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                      <FormGroup
                        className={
                          "form-group has-top-label" +
                          (errors.mailId && touched.mailId
                            ? " border-danger m-0"
                            : "")
                        }
                      >
                        <Label
                          className={
                            errors.mailId && touched.mailId ? "text-danger" : ""
                          }
                        >
                          <IntlMessages id="settings.mailId" />
                        </Label>
                        <Field
                          className={
                            "form-control" +
                            (errors.mailId && touched.mailId
                              ? " border-danger"
                              : "")
                          }
                          name="mailId"
                        />
                        {errors.mailId && touched.mailId ? (
                          <small className="text-danger">{errors.mailId}</small>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                      <FormGroup
                        className={
                          "form-group has-top-label" +
                          (errors.phoneNum && touched.phoneNum
                            ? " border-danger m-0"
                            : "")
                        }
                      >
                        <Label
                          className={
                            errors.phoneNum && touched.phoneNum
                              ? "text-danger"
                              : ""
                          }
                        >
                          <IntlMessages id="settings.phoneNumber" />
                        </Label>
                        <Field
                          className={
                            "form-control" +
                            (errors.phoneNum && touched.phoneNum
                              ? " border-danger"
                              : "")
                          }
                          name="phoneNum"
                        />
                        {errors.phoneNum && touched.phoneNum ? (
                          <small className="text-danger">
                            {errors.phoneNum}
                          </small>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                      <NavLink to="/app/account">
                        <Button color="primary" type="submit">
                          Submit
                        </Button>
                      </NavLink>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </div>
    );
  }
}
export default settings;

import React, { Component, Fragment } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import uuid from "react-uuid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import {
  FormikCustomRadioGroup,
  FormikCustomCheckboxGroup,
} from "../../containers/form-validations/FormikFields";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const websiteUrlRegExp = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

const onlyNumbers = /^[0-9]*$/;

const onlyStrings = /^[a-zA-Z]*$/;

const teamMember = [
  { value: "I'm in the team", label: "Yes" },
  { value: "I am not in the team", label: "No" },
];

const productOrServices = [
  { value: "Yes, we have", label: "Yes" },
  { value: "No, don't", label: "No" },
];

const customerModel = [
  { value: "b2c", label: "B2C" },
  { value: "b2b", label: "B2B" },
  { value: "b2b2c", label: "B2B2C" },
];

const applied = [
  { value: "I have applied before", label: "Yes" },
  { value: "I haven't applied before", label: "No" },
];

const whereDidYouFindUs = [
  { value: "TV", label: "TV" },
  { value: "Website", label: "Website" },
  { value: "Friends", label: "Friends" },
  { value: "Family", label: "Family" },
  { value: "Videogame", label: "Videogame" },
];

const registerSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  team_member: Yup.string().required("Answer is required"),
  companyWebsite: Yup.string().matches(
    websiteUrlRegExp,
    "Website url is invalid"
  ),
  describeProblem: Yup.string().required("Please provide the details"),
  customer_model: Yup.array().required("At least 1 checkbox is required"),
  industary: Yup.string().required("Must select from list"),
  product_or_services: Yup.string().required("Answer is required"),
  sales: Yup.string()
    .required("Please fill this input")
    .matches(onlyNumbers, "Enter only numbers"),
  applied_before: Yup.string().required("Answer is required"),
  where_did_you_find_us: Yup.array(),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
});

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab1: 1,
      tabs: ["", "", "", "", ""],
    };

    this.addTab = this.addTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    console.log(values.phoneNumber);
  }

  addTab(e) {
    e.preventDefault();
    this.setState({ tabs: [...this.state.tabs, ""] });
  }

  changer = () => {
    alert("The only thing happen is pain");
    this.setState({
      activeTab1: 2,
    });
  };

  removeTab = (i) => {
    const tabLen = this.state.tabs.length;
    console.log(this.state.tabs);
    this.state.tabs.splice(i, 1);

    this.setState({ tabs: this.state.tabs });
  };

  render() {
    const tabLen = this.state.tabs.length;
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb
              className="b_breadcumbs"
              heading="Register"
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <h1 className="mt-2 mb-4">
              Contact Information {this.state.activeTab1}
            </h1>
            <Card className="sage">
              <Formik
                initialValues={{
                  phoneNumber: "",
                  team_member: "",
                  describeProblem: "",
                  customer_model: ["b2c"],
                  industary: "",
                  product_or_services: "",
                  sales: "",
                  applied_before: "",
                  where_did_you_find_us: ["TV"],
                }}
                validationSchema={registerSchema}
                onSubmit={this.handleSubmit}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  setFieldTouched,
                  values,
                  errors,
                  touched,
                  isSubmitting,
                }) => (
                  <Form className="av-tooltip tooltip-label-right">
                    <FormGroup className="relative">
                      <a onClick={this.changer} href="#">
                        Change state
                      </a>
                      <a className="add_tab" onClick={this.addTab} href="#">
                        Add +
                      </a>
                      <h4>
                        List each of your previous incubation / acceleration
                        experience
                      </h4>
                      <span>press the add button to add a new item</span>
                      <Tabs
                        className="mt-3"
                        defaultActiveKey={this.state.activeTab1}
                        id="co-founders"
                      >
                        {this.state.tabs.map((tab, i) => {
                          if (i == 0) {
                            return (
                              <Tab
                                key={uuid()}
                                eventKey={i + 1}
                                title={i + 1 + "th"}
                              >
                                <h1>Part {i + 1}</h1>
                              </Tab>
                            );
                          } else {
                            return (
                              <Tab
                                key={uuid()}
                                eventKey={i + 1}
                                title={i + 1 + "th"}
                              >
                                <h1>Part {i + 1}</h1>
                                <div>
                                  <a
                                    className="remove_tab"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      this.removeTab(i);
                                    }}
                                    href="#"
                                  >
                                    Remove ({i + 1 + "th"})
                                  </a>
                                </div>
                              </Tab>
                            );
                          }
                        })}
                      </Tabs>
                    </FormGroup>
                    <FormGroup className="error-l-100 mb-4 mt-1">
                      <Label>
                        Phone Name{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <Field className="form-control" name="phoneNumber" />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <div className="invalid-feedback d-block">
                          {errors.phoneNumber}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-125 mb-4 mt-1">
                      <Label className="d-block">
                        Are you in team?{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <FormikCustomRadioGroup
                        inline
                        name="team_member"
                        id="team_member"
                        label="Which of these?"
                        value={values.team_member}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        options={teamMember}
                      />
                      {errors.team_member && touched.team_member ? (
                        <div className="invalid-feedback d-block">
                          {errors.team_member}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-125 mb-4 mt-1">
                      <Label>Company website </Label>
                      <Field
                        className="form-control"
                        name="companyWebsite"
                        value={values.company_website}
                        onChange={handleChange}
                      />
                      {errors.companyWebsite && touched.companyWebsite ? (
                        <div className="invalid-feedback d-block">
                          {errors.companyWebsite}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-275 mb-4 mt-1">
                      <Label>
                        What is your problem you want / are solving{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <Field
                        className="form-control"
                        name="describeProblem"
                        component="textarea"
                      />
                      {errors.describeProblem && touched.describeProblem ? (
                        <div className="invalid-feedback d-block">
                          {errors.describeProblem}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-200 mb-4 mt-1">
                      <Label className="d-block">
                        What is your customer mdoel?{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <FormikCustomCheckboxGroup
                        inline
                        name="customer_model"
                        id="customer_model"
                        label="Which of these?"
                        value={values.customer_model}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        options={customerModel}
                      />
                      {errors.customer_model && touched.customer_model ? (
                        <div className="invalid-feedback d-block">
                          {errors.customer_model}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-75">
                      <Label>
                        Industary{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <select
                        name="industary"
                        className="form-control"
                        value={values.industary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select an option..</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      {errors.industary && touched.industary ? (
                        <div className="invalid-feedback d-block">
                          {errors.industary}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-225 mb-4 mt-1">
                      <Label className="d-block">
                        Do you have product or services?{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <FormikCustomRadioGroup
                        inline
                        name="product_or_services"
                        id="product_or_services"
                        label="Which of these?"
                        value={values.product_or_services}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        options={productOrServices}
                      />
                      {errors.product_or_services &&
                      touched.product_or_services ? (
                        <div className="invalid-feedback d-block">
                          {errors.product_or_services}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-200 mb-4 mt-1">
                      <Label>
                        How much sales did you have?{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <Field className="form-control" name="sales" />
                      {errors.sales && touched.sales ? (
                        <div className="invalid-feedback d-block">
                          {errors.sales}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-175 mb-4 mt-1">
                      <Label className="d-block">
                        Have you applied before?{" "}
                        <span className="sa_required_input">(Required)</span>
                      </Label>
                      <FormikCustomRadioGroup
                        inline
                        name="applied_before"
                        id="applied_before"
                        label="Which of these?"
                        value={values.applied_before}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        options={applied}
                      />
                      {errors.applied_before && touched.applied_before ? (
                        <div className="invalid-feedback d-block">
                          {errors.applied_before}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="error-l-200 mb-4 mt-1">
                      <Label className="d-block">
                        What is your customer mdoel?{" "}
                      </Label>
                      <FormikCustomCheckboxGroup
                        inline
                        name="where_did_you_find_us"
                        id="where_did_you_find_us"
                        label="Which of these?"
                        value={values.where_did_you_find_us}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        options={whereDidYouFindUs}
                      />
                      {errors.where_did_you_find_us &&
                      touched.where_did_you_find_us ? (
                        <div className="invalid-feedback d-block">
                          {errors.where_did_you_find_us}
                        </div>
                      ) : null}
                    </FormGroup>

                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

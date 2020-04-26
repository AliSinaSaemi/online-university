import React, { Component, Fragment } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledCollapse,
  CardBody
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

export default class TicketSubmissionForm extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb
              heading="Ticket Submission form"
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Container fluid={true}>
          <Row>
            <Col xs={12} sm={5} md={4}>
              <Card className="sage">
                <h2 className="mb-5">My Tickets</h2>
                <FormGroup>
                  <Label for="Priority">Priority</Label>
                  <Input type="select" name="select" id="Priority">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <div className="sage accordion">
                  <Button
                    color="primary"
                    id="toggler"
                    style={{ marginBottom: "1rem" }}
                  >
                    Tickets
                    <i class="fas fa-angle-down"></i>
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        <a href="#">
                          <div className="display-flex mb-2">
                            <span className="code">#12j855</span>
                            <span className="name text-right">
                              Sepehr Akbarzadeh
                            </span>
                          </div>
                          <span className="date">Date</span>
                        </a>
                      </CardBody>
                      <CardBody>
                        <a href="#">
                          <div className="display-flex mb-2">
                            <span className="code">#12j855</span>
                            <span className="name text-right">
                              Sepehr Akbarzadeh
                            </span>
                          </div>
                          <span className="date">Date</span>
                        </a>
                      </CardBody>
                      <CardBody>
                        <a href="#">
                          <div className="display-flex mb-2">
                            <span className="code">#12j855</span>
                            <span className="name text-right">
                              Sepehr Akbarzadeh
                            </span>
                          </div>
                          <span className="date">Date</span>
                        </a>
                      </CardBody>
                      <CardBody>
                        <a href="#">
                          <div className="display-flex mb-2">
                            <span className="code">#12j855</span>
                            <span className="name text-right">
                              Sepehr Akbarzadeh
                            </span>
                          </div>
                          <span className="date">Date</span>
                        </a>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </Card>
            </Col>
            <Col xs={12} sm={7} md={8}>
              <Card className="sage">
                <h2 className="mb-5">Ticket Submission</h2>
                <Form className="sage" noValidate>
                  <Row>
                    <Col xs={12} sm={6}>
                      <FormGroup>
                        <Label for="fullName">First & Last name</Label>
                        <Input
                          type="text"
                          name="text"
                          id="fullName"
                          placeholder="First & Last name ..."
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                      <FormGroup>
                        <Label for="Priority">Priority</Label>
                        <Input type="select" name="select" id="Priority">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                      <FormGroup>
                        <Label for="Topic">Topic</Label>
                        <Input
                          type="text"
                          name="Topic"
                          id="Topic"
                          placeholder="Topic ..."
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                      <FormGroup>
                        <Label for="Part">Part</Label>
                        <Input type="select" name="select" id="Part">
                          <option>Ten</option>
                          <option>Twenty</option>
                          <option>Thirdy</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs={12}>
                      <FormGroup>
                        <Label for="Details">Details</Label>
                        <Input
                          type="textarea"
                          name="text"
                          id="Details"
                          placeholder="Tell what you need ..."
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button type="submit">Submit</Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

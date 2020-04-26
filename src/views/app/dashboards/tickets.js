import React, { Component, Fragment } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledCollapse,
  CardBody,
} from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ticketImg from "../../../sage-assets/imgs/bootstrap-social-logo.png";

export default class Tickets extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="Tickets" match={this.props.match} />
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
                <Button color="primary" id="reply-button">
                  Reply
                  <i class="fas fa-plus"></i>
                </Button>
                <div className="sa_ticket_item">
                  <div className="header display-flex">
                    <img className="width-full" src={ticketImg} alt="ticket" />
                    <section className="width-full">
                      <div className="display-flex">
                        <h3>Sepehr Akbarzadeh</h3>
                        <span className="date">Date</span>
                      </div>
                      <div className="display-flex">
                        <h4>Back up</h4>
                        <span className="clock">Clock</span>
                      </div>
                    </section>
                  </div>
                  <div className="body">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, reiciendis voluptatum. Repudiandae nulla sequi iusto, facere consequuntur, numquam ab veniam repellat doloremque repellendus error animi nihil quasi ut distinctio aliquam.</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

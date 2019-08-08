import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";
import Loginv1 from "components/auth/Loginv1";
import Registrov1 from "components/auth/Registrov1";


class Inicio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boolean : true
    }
   this.handleClick = this.handleClick.bind(this);
  
  }
  handleClick() {
    this.setState(state => ({
      boolean: !state.boolean
    }));
  }
 


  render() {
    return (
      <>
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 bg-gradient-orange ">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                  Estudeo UCM 2019{" "}
                  <span className="text-white">eslogan eslogan eslogan</span>
                </h3>
                <p className="lead text-white">
                descripcion descripcion descripcion descripcion
                descripcion descripcion descripcion descripcion descripcion descripcion
                descripcion descripcion descripcion descripcion descripcion descripcion
                descripcion descripcion descripcion descripcion descripcion descripcion 
                </p>

              </Col>

              <Col className="mb-lg-auto" lg="5">
              {this.state.boolean ? <Loginv1 boolean={this.state.boolean} handleClick = {this.handleClick} ></Loginv1>   :  <Registrov1 boolean={this.state.boolean} handleClick = {this.handleClick}> </Registrov1> }    
              </Col>

            </Row>
          </Container>

      
        </section>
      </>
    );
  }
}

export default Inicio;

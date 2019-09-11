import React from "react";
import {
  Container,
  Col,Row
} from "reactstrap";
import Report from 'powerbi-report-component';


class NULL extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
  }


  render() {
    return (
      <>

          <>
            <Row>
              <Col>
              <Report embedType="report"
                tokenType="Embed"
                accessToken="none"
                embedUrl="https://app.powerbi.com/view?r=eyJrIjoiMDY0YjI3YzYtMjQ2OC00ZmFhLTg2MTUtYWE2MzVkNGNhYmMxIiwidCI6IjFmMmIwZTJjLTM4NjctNGMyYi04NjJmLWYwMTBhZGY1ODA1NiIsImMiOjR9"
                embedId="cd9db8ab-d20d-480d-ac1f-f4209487f77e"
                extraSettings={{
                  filterPaneEnabled: false,
                  navContentPaneEnabled: false,
                }}
                permissions="All"
                style={{
                  height:'900px',
                  border: '0',
                  padding: '20px',
                  background: '#eee'
                }}
                onLoad={(report) => {
                  /*
                  you can set filters onLoad using:
                  this.report.setFilters([filter]).catch((errors) => {
                    console.log(errors);
                  });*/
                  console.log('Report Loaded!');
                  //this.report = report (Read docs to know how to use report object that is returned)
                }}
                onSelectData={(data) => { 
                  window.alert('You clicked chart:' + data.visual.title); 
                }}
                onPageChange={(data) => { 
                  console.log('You changed page to:' + data.newPage.displayName); 
                }}
                onTileClicked={(dashboard, data) => { //only used for dashboard
                  // this.report = dashboard; use for object for triggering fullscreen
                  console.log('You clicked tile:', data);
                }}
              />
              </Col>
            </Row>
          
          
            </>
     
      </>
    );
  }
}

export default NULL;

import React from "react";
import {Modal,Button,Input,Form,UncontrolledAlert}from "reactstrap";
import BaseSelect from "react-select";
import * as Constants from 'services/Constantes'
import FixRequiredSelect from "services/FixRequiredSelect";
import {archivo} from "services/archivos"
class MiModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      denuncia:[],
      Descripcion:'',
      success:false,
    };
    this.submit = this.submit.bind(this); 
  };

  async submit(event){
    event.preventDefault();
    let respuesta= await archivo.Denuncia(this.props.idArchivo,this.state.denuncia.value,this.state.Descripcion);
    if(respuesta.status){
      this.setState({
        success: true
      })

      setTimeout( () => {
        this.setState({
          modal:false
        })
      }, 1000);

    }
  }

  //actualiza componente si el valor del archivo denunciado es distinto
  componentDidUpdate(prevProps){
    if(this.props.idArchivo !==prevProps.idArchivo){
      this.setState({
        modal:this.props.isOpen
      })
    }
  }

  componentDidMount(){
    this.setState({
      modal:this.props.isOpen
    })
  }
  toggleModal(value,tableMeta){
    this.setState({
      modal:false
    });
  };
  onChange(e){
    this.setState({ 
        denuncia:e
    });
  };


  render() {  
    
  

    const Select = props => (
        <FixRequiredSelect
          {...props}
          SelectComponent={BaseSelect}
        />
      );

      const TiposDenuncias=[
          {label:"Contenido inapropieado",value:1},
          {label:"Derechos de Autor",value:2},
          {label:"Otro",value:3},
      ]
      return (
      <>      
        <Modal
          className="modal-dialog-centered"
          isOpen={this.props.isOpen && this.state.modal}
          toggle={() => this.toggleModal()}
        >
            <Form onSubmit={this.submit}>
                <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-default">
                         DENUNCIAR ESTE CONTENIDO
                    </h6>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal()}
                    >
                    <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body">
                      <UncontrolledAlert color="success" fade={true} isOpen={this.state.success} toggle={this.onDismiss}>
                                          <small>Tu denuncia fue enviada para revisión</small>        
                        </UncontrolledAlert>
                    
                        <Select 
                            placeholder="Tipo de Denuncia"
                            styles={Constants.colourStyles}    
                            options={TiposDenuncias} 
                            isSearchable 
                            value={this.state.denuncia}
                            onChange={(e) => this.onChange(e)}   
                            required 
                        />
                        <br></br>
                        <Input rows="1" type="textarea" onChange={(e) =>  this.setState({Descripcion:e.target.value})}  required placeholder="Descripción de la denuncia"></Input>
                </div>
                <div className="modal-footer">
                    <Button color="danger" type="submit">
                         ENVIAR DENUNCIA
                    </Button>
                </div>
          </Form>

        </Modal>
      </>
    );
  }
}

export default MiModal;


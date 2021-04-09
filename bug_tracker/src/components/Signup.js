import React from 'react';
import {startSignup} from '../actions/auth';
import {connect} from 'react-redux';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

//                             <FormGroup>
//                                 <InputGroup className="input-group-alternative">
//                                     <select className="select" value={this.state.position} onChange={this.onPositionChange}>
//                                         <option value="developer">Developer</option>
//                                         <option value="tester">Tester</option>
//                                     </select>
//                                 </InputGroup>
//                             </FormGroup>


class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name :'',
            email :'',
            password:'',
            position:'N/A',
            error:''
        }
    }

    onNameChange=(e)=>{
        const name = e.target.value;
        this.setState(()=>{
            return{
                name
            }
        })
    }

    onEmailChange=(e)=>{
        const email = e.target.value;
        this.setState(()=>{
            return{
                email
            }
        })
    }

    onPasswordChange = (e)=>{
        const password=e.target.value;
        this.setState(()=>{
            return{
                password
            }
        })
    }

    onPositionChange = (e)=>{
        const position=e.target.value;
        this.setState(()=>{
            return{
                position
            }
        })
    }

    onSubmit=(e)=>{
         e.preventDefault();
        if(!this.state.name || !this.state.email || !this.state.password || !this.state.position){
            this.setState(()=>{
                return{
                    error:'Please fill all the options !'
                }
            })
        }else{
            this.setState(()=>{
                return{
                    error:''
                }
            })

            const user = {
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                position:this.state.position
            }
            this.props.dispatch(startSignup(user))
            //console.log(user)
        }
    }
    


    render(){
    return(
        <div>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>sign up with credentials</small>
                        </div>
                        
                        <Form role="form" onSubmit={this.onSubmit}>
                            <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-hat-3"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Name" type="text" autoFocus value={this.state.name} onChange={this.onNameChange}  />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Email" type="email" value={this.state.email} onChange={this.onEmailChange}  />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Password" type="password" value={this.state.password} onChange={this.onPasswordChange} />
                                </InputGroup>
                            </FormGroup>
                            
                            
                            <div className="text-center">
                                <button className='btn'>Create User</button>
                            </div>
                        </Form>
                        {!!this.state.error && <p>{this.state.error}</p>}
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}
}



export default connect()(Signup);

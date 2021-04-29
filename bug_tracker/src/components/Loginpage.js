import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
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

class Loginpage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email :'',
            password:'',
            error:''
        }
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

   

    onSubmit=(e)=>{
         e.preventDefault();
        if( !this.state.email || !this.state.password){
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
                
                email:this.state.email,
                password:this.state.password,
                
            }
            this.props.dispatch(startLogin(user));
        }
    }
    


    render(){
    return(
        <div className="box-layout">
            <Col lg="6" md="8">
                <div className="text-center">
                    <h1 className="pageheader"><span>BUG TRACKER</span></h1>
                </div>
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Login</small>
                        </div>
                        
                        <Form role="form" onSubmit={this.onSubmit}>
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
                                <button className='btn'>Login</button>
                            </div>
                        </Form>
                        {!!this.state.error && <p>{this.state.error}</p>}
                        <Link to='/signup'>Sign Up</Link>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}
}

export default connect()(Loginpage);
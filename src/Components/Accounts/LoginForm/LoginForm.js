import './LoginForm.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Form, Segment, Container, Header} from 'semantic-ui-react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange() {


    }

    handleSubmit() {


    }

    render() {
        const { handleSubmit, handleChange } = this;
        return (

                <Grid className='login-form' textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='login_grid'>
                        <Form>
                            <Header className='ui teal center aligned header'>
                                Login into your account
                            </Header>
                                <Form
                                    size='large'
                                    onSubmit={handleSubmit}>
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid label='username' placeholder='username'/>
                                        <Form.Input fluid label='password' placeholder='password'/>
                                    </Form.Group>
                                </Form>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>

        );
    }
}

export default LoginForm;

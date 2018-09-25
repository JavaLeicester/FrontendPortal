import React from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';

class LoginForm extends React.Component {


    render() {

        return(
            <Grid textAlgin='center' verticalAlgin='middle'>
                <Grid.Column>
                    <Header> Apex Login </Header>
                    <Segment stacked>
                        <Form>
                            <Form.Input/>
                            <Form.Input/>
                            <Form.Button> Login </Form.Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );

    }


}

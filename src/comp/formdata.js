import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const FormData = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="mapSelect"><i className="fa fa-map-o fa-md"></i> map select</Label>
                    <Input type="select" name="select" id="mapSelect">
                        <option>de_inferno</option>
                        <option>de_vertigo</option>
                        <option>de_mirage</option>
                        <option>de_dust2</option>
                        <option>de_dust</option>
                        <option>de_train</option>
                        <option>de_cache</option>
                        <option>de_nuke</option>
                        <option>de_overpass</option>
                        <option>de_toscan</option>
                        <option>de_cbble</option>
                        <option>de_season</option>
                        <option>arghhh</option>
                        <option>blahhh</option>
                    </Input>
            </FormGroup>
        </Form> 
    )
}

export default FormData;
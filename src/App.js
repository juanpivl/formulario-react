import React, { useState } from 'react';
import Formulario from "./Formulario";
import { NewFieldForm } from './NewFieldForm';
import { uid } from 'uid';

export const App = () => {

    const [fields, setFields] = useState([
        {
            component: "TextField",
            label: "First name",
            type: "text",
            _uid: uid()
        },
        {
            component: "Select",
            label: "Nationality",
            options: ["US", "MX"],
            type: "select",
            _uid: uid()
        },
        {
            component: "Radio",
            label: "Gender",
            options: ["MASCULINE", "FEMENINE"],
            type: "radio",
            _uid: uid()
        },
    ])

    const agregarNuevoCampo = (values) => {
        const nuevoCampo = {
            ...values,
            options: values?.options.split(","),
            _uid: uid(),
        }
        setFields(fields.concat([nuevoCampo]))
    }

    const eliminarCampo = (_uid) => {
        const newfields = fields.filter(field => field._uid != _uid)
        setFields(newfields)
    }

    return (
        <div className='app' >
            <NewFieldForm agregarNuevoCampo={agregarNuevoCampo} />
            <Formulario fields={fields} eliminarCampo={eliminarCampo} />
        </div>
    );


};

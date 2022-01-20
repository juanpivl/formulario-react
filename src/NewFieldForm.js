import React, { useState } from 'react';

export const NewFieldForm = ({ agregarNuevoCampo }) => {

    const [formValues, setFormValues] = useState({
        label: "",
        component: "",
        options: ""
    });

    const onChangeValues = (e) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return <div>
        <h1>Elegir componente</h1>
        <label>Nombre del compontente</label>
        <br />
        <input type="text" name="label" onChange={onChangeValues} value={formValues.label} />
        <br></br>
        <br></br>
        <label>Tipo de componente (TextField,Radio o Select)</label>
        <br />

        <br></br>
        <input type="text" name="component" onChange={onChangeValues} value={formValues.component} />
        <br></br>
        <br></br>
        {
            formValues.component != "TextField" ? <>
                <label>Opciones (separar con comas) </label>
                <br></br>

                <input type="text" name="options" onChange={onChangeValues} value={formValues.options} />
            </> : null
        }
        <br></br>
        <br></br>
        <button name="Agregar" type="button" onClick={() => agregarNuevoCampo(formValues)}>
            Agregar
        </button>

    </div>;


};

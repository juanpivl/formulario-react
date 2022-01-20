import React, { useState } from 'react';
import { Component } from 'react/cjs/react.production.min';
import { uid } from 'uid';

const Formulario = ({ fields, eliminarCampo }) => {


    return (
        <form className='form'>
            <h1>FORMULARIO FINAL</h1>
            <br />
            {


                fields.map(field => {

                    //Verificar que tipo de field es y mostrar un elemento html  
                    if (field.component === "Select") {
                        return (
                            <div key={field._uid}>
                                <label>{field.label}</label>
                                <select>

                                    {field.options.map(option => (
                                        <option value={option} key={option}>{option}</option>
                                    ))}

                                </select>
                                <button name="Eliminar" type="button" onClick={() => eliminarCampo(field._uid)}>
                                    X

                                </button>
                                <br />
                                <br></br>
                            </div>


                        );
                    } else if (field.component === "Radio") {
                        return (
                            <div key={field._uid}>
                                <p>{field.label}</p>
                                {field.options.map(option => (
                                    <div key={option}>
                                        <input type="radio" id={option} value={option} />
                                        <label htmlFor={option}>{option}</label>


                                    </div>
                                ))}
                                <button name="Eliminar" type="button" onClick={() => eliminarCampo(field._uid)}>
                                    X

                                </button>
                            </div>
                        );
                    } else if (field.component === "TextField") {
                        return (
                            <div key={field._uid}>
                                <label>{field.label}</label>
                                <input type="text" />
                                <button name="Eliminar" type="button" onClick={() => eliminarCampo(field._uid)}>
                                    X

                                </button>
                                <br />
                                <br></br>
                            </div>
                        );

                    }
                    return null;
                })
            }
        </form>
    );
}






export default Formulario;
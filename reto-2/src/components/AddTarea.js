import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTareaAction } from './actions/Tareas';
import { ContainerInput, Input } from './styles/AddTarea.styled';
import { InputCircle } from './styles/ListTarea.styled'

import { BsCircle } from 'react-icons/bs'


const AddTarea = () => {

    const [tarea, setTarea] = useState('');
    const [validacion, setValidacion] = useState(true)

    const dispatch = useDispatch();
    const tareas = useSelector(state => state.tareas);

    const handleChange = (e) => {
        setTarea(e.target.value)
        console.log(e.target.value);

    }

    // .trim(), comprueba que haya algo y no solo espacios.

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarea.trim() !== '') {

            let newTarea = {
                id: tareas.length,
                name: tarea,
                complete: false
            };
            dispatch(addTareaAction(newTarea));
            setTarea('');
            setValidacion(true)

            console.log(newTarea)
        } else {
            setValidacion(false)
        }
    }

    // const agregar = () => {

    //     let newTarea = {
    //         id: tareas.length,
    //         name: tarea,
    //         complete: false
    //     };
    //     dispatch(addTareaAction(newTarea));
    //     setTarea('');


    // }

    
    



    return (
        <>
            <ContainerInput>

                <InputCircle>
                    <BsCircle></BsCircle>
                </InputCircle>

                <form onSubmit={handleSubmit}>
                    <Input type='text'
                        value={tarea}
                        onChange={handleChange}
                        placeholder='Create a new todo...' >
                    </Input>
                </form>
            </ContainerInput>
            <br/>
                {!validacion && <h3>Añada una tarea</h3>}
        </>
    )
}

export default AddTarea


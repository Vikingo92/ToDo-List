import { ADD_TAREA, COMPLETE_TAREA, 
    DELETE_TAREA, EDIT_TAREA, SET_FILTER } from "./types"

export const addTareaAction = (tarea) => ({
    type: ADD_TAREA,
    payload: tarea
})

export const deleteTareaAction = (id) => ({
    type: DELETE_TAREA,
    payload: id
})

export const completeTareaAction = (id) => ({
    type: COMPLETE_TAREA,
    payload: id
})

export const editTareaAction = (id) => ({
    type: EDIT_TAREA,
    payload: id
})

// Filtro por tareas.

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
})


import { ADD_TAREA, DELETE_TAREA, EDIT_TAREA, COMPLETE_TAREA, ALL_TAREAS, ACTIVE_TAREAS, COMPLETED_TAREAS } from '../actions/types';

const initialState = {
    tareas: [
        {
            id: 0,
            name: 'Complete online JavaScript course',
            complete: true
        },
        {
            id: 1,
            name: 'Jog around the park 3x',
            complete: false
        },
        {
            id: 2,
            name: '10 minutes meditation',
            complete: false
        },
        {
            id: 3,
            name: 'Read for 1 hour',
            complete: false
        },
        {
            id: 4,
            name: 'Pick up groceries',
            complete: false
        },
        {
            id: 5,
            name: 'Complete Todo App on Frontend Mentor',
            complete: false
        }
    ],
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }
        case DELETE_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case COMPLETE_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea =>
                    tarea.id === action.payload
                        ? { ...tarea, complete: !tarea.complete } : tarea)
            }
        case EDIT_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea =>
                    tarea.id === action.payload
                        ? { ...tarea, name: action.payload.name } : tarea)
            }
       

        default:
            return state;
    }
}

export default reducer;

// case tarea completa :
// if(state.id !== action.id) {
//     return state
// }
// return {
//     ...state,
//     complete:!state.complete
// }


// case COMPLETE_TAREA:
//             return {
//                 ...state,
//                 tareas: state.tareas.map(tarea =>
//                     tarea.id === action.payload
//                     ? { ...tarea, complete: !tarea.complete} : tarea)
//             }



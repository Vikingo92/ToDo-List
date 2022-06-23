import { VISIBILITY_FILTER } from "../Constants";

export const tareasPorFiltros = (store, visibilityFilter) => {
    switch(visibilityFilter) {
        case VISIBILITY_FILTER.COMPLETED:
            return store.tareas.filter(tarea => tarea.complete);
        
        case VISIBILITY_FILTER.ACTIVE:
            return store.tareas.filter(tarea => !tarea.complete);
        default:
            return store.tareas;

    }

}
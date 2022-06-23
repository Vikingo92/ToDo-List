import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTareaAction, completeTareaAction, editTareaAction} from './actions/Tareas';
import { StyledList, ListBack, Tarea, Icon, IconCircle, NoToDo, EditIcon, Filter, All } from './styles/ListTarea.styled';
import { VscChromeClose } from 'react-icons/vsc';
import { BsCircle } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';


export const List = () => {

  const tareas = useSelector(state => state.tareas);
  const dispatch = useDispatch();
  console.log(tareas)



  const [editTarea, setEditTarea] = useState(false);
  const [editText, setEditText] = useState('');

  const [tarea, setTarea] = useState('');

  const editar = () => {
    setEditTarea(true);
  }

  const editarTexto = (e) => {
    setEditText(e.target.value);
  }


  const submitEdit = (e) => {
    e.preventDefault();
    dispatch(editTareaAction(editar( editText)));
    setEditText('');
    setEditTarea(false);
  }

  // Saber en donde se pone
  const actualizarTarea = (id, tareas) => {
    const listaActualizada = tarea.map((e, index) => {
        if (index === id) {
            e = tareas;
        }

        return e;
    })

    setTarea(listaActualizada)
}



  if (!tareas || !tareas.length) {
    return <NoToDo>Sin Tareas</NoToDo>
  }


  return (
    <>

    <ListBack>
      {
        !editTarea ?

          <div>
            {tareas.map(tarea => (
              <StyledList key={tarea.id}>

                <IconCircle>
                  <BsCircle />
                </IconCircle>

                <Tarea
                  onClick={() => dispatch(completeTareaAction(tarea.id))}
                  style={{ textDecoration: tarea.complete ? 'line-through' : 'none' }}
                  editar={actualizarTarea}
                >
                  {tarea.name}
                </Tarea>
                <Icon>
                  <VscChromeClose onClick={() => dispatch(deleteTareaAction(tarea.id))} />

                  <EditIcon>
                    <MdOutlineEdit
                      onClick={editar}

                    />
                  </EditIcon>
                </Icon>
              </StyledList>
            ))}
            <Filter>
              <p>{tareas.length} Items</p>
              <All>All</All>
              <p >Active</p>
              <p>Completed</p>
              <p>Clear Completed</p>

            </Filter>
          </div>
          :

          <form onSubmit={submitEdit}>
            <input value={editText} onChange={editarTexto}/> <button>Guardar</button>
          </form>

      }


    </ListBack>
    </>
  )
}

import React from 'react'
import { VISIBILITY_FILTER } from './Constants';
import { useDispatch } from 'react-redux';
import { setFilter } from './actions/Tareas';


const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <p>{Object.keys(VISIBILITY_FILTER).map(f => {
        const currentFilter = VISIBILITY_FILTER[f];
        console.log(currentFilter)
        return (
          <div key={`visibility-filter-${currentFilter}`}
            onClick={() => dispatch(setFilter(currentFilter))}
          >
            {/* {currentFilter} */}

          </div>
        )
      })}</p>
    </div>
  )
}

export default VisibilityFilter
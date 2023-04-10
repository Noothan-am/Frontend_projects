import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
function List({ index, items, handleDelete, handleEdit }) {
     return (
          <div>
               <article className='grocery-item' key={""}>
                    <p className='title'>{items}</p>
                    <div className='btn-container'>
                         <button
                              type='button'
                              className='edit-btn'
                              onClick={() => handleEdit(index)}
                         >
                              <FaEdit />
                         </button>
                         <button
                              type='button'
                              className='delete-btn'
                              onClick={() => handleDelete(index)}
                         >
                              <FaTrash />
                         </button>
                    </div>
               </article>
          </div>
     )
}

export default List
import React, { useState } from 'react'
import List from './List';
import './ten.css'
function Ten() {
     var some;
     const [name, setName] = useState('');
     const [lists, setList] = useState([]);
     const [isEdit, setEdit] = useState(false);

     function handleSubmit(e) {
          e.preventDefault();
          setEdit(false);
          setList([...lists, name])
          setName('');
          console.log(some);
          isEdit && setList(lists.map((list, index) => {
               console.log("in handle");
               if (index == some) {
                    return [...lists, lists[some] === name];
               }
               return [list];
          }))
     }
     function clearList() {
          setList([]);
     }
     function handleEdit(id) {
          setName(lists[id]);
          setEdit(true);
          some = id;
     }
     function handleDelete(id) {
          setList(lists.filter((list, index) => { console.log(index); return id !== index }))
          console.log('from ');
     }

     return (
          <>
               <section className='section-center'>
                    <form className='grocery-form' onSubmit={handleSubmit}>
                         <h3>grocery bud</h3>
                         <div className='form-control'>
                              <input
                                   type='text'
                                   className='grocery'
                                   placeholder='e.g. eggs'
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                              />
                              <button type='submit' className='submit-btn'>
                                   {isEdit ? 'Edit' : 'Submit'}
                              </button>
                         </div>
                    </form>
                    {lists.map((list, index) => {
                         if (list === "") {
                              return;
                         }
                         return (
                              <div className='grocery-container'>
                                   <List key={index} index={index} items={list} handleDelete={handleDelete} handleEdit={handleEdit} />
                              </div>
                         )
                    })}
                    {lists.length > 0 && <button className='clear-btn' onClick={clearList}>
                         clear items
                    </button>}
               </section>
          </>
     )
}

export default Ten
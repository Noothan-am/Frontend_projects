import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { search, setSearch } = useGlobalContext();
  const searchReference = useRef();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchReference.current.value);
  }
  useEffect(() => {
    searchReference.current.focus();
  }, [])
  return (
    <>
      <section className='section search'>
        <form className='search-form' onSubmit={handleSearchSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>search your favorite cocktail</label>
            <input
              type='text'
              name='name'
              id='name'
              value={search}
              ref={searchReference}
              onChange={handleSearchSubmit}
            />
          </div>
        </form>
      </section>
    </>
  )
}

export default SearchForm

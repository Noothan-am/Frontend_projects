import React from 'react'

function Search({catogary}) {
    return (
        <div className='container'>
            <nav className="navbar my-3" style={{backgroundColor: "DodgerBlue"}}>
            <div className="container-fluid mx-3">
                <div className="navbar-brand text-white mx-3 fs-2">{catogary}</div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn btn-dark" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </div>
    )
}

export default Search
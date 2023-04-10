import React from 'react'

function Home() {
    return (
        <>
            <h1 className='text-center my-3 fw-bolder'>Store Passwords</h1>
            <form className="container my-3 w-50 border border-primary border-top-0 border-bottom-0 rounded rounded-3 fs-4 fw-bold border-5">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Title</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title" />
                </div>
                <div className="col-12 my-3">
                    <label for="inputPassword4" className="form-label">Catogary</label>
                    <select className="form-select " id="inlineFormSelectPref">
                        <option selected>General</option>
                        <option value="1">Study</option>
                        <option value="2">Random</option>
                        <option value="3">Collage</option>
                    </select>
                </div>
                <div className="col-12 my-3">
                    <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                    <label for="inputPassword4" className="form-label">Username</label>
                    <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                    </div>
                </div>
                <div className="col-12 my-3">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Password" id="inputPassword4" />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto my-3">
                    <button class="btn btn-outline-dark" type="button">Button</button>
                </div>
            </form>
        </>
    )
}

export default Home
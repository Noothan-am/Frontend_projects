import React from 'react'

function Navbar() {
    return (
        <>
            <div>
                <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="fw-bold mx-1 fs-4 navbar-brand" href="/passwords">OnePasswd</a>
                        <div class="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mx-3 mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link fs-6 active mx-3" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/passwords">Passwords</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
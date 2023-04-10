import React, { useEffect } from 'react'

function PswCard(props) {

    const style = {
        maxWidth: "48%",
        minWidth: "31%"
    }

    const { Websitename, Username, Password } = props;

    useEffect(() => {
        const elements = document.querySelectorAll('#h');
        elements.forEach(element => {
          element.addEventListener("click", () => {
            let c =element.parentNode.firstElementChild.innerHTML;
            navigator.clipboard.writeText(c)
          });
        });
      }, []);

      useEffect(() => {
        const elements = document.querySelectorAll('#hara');
        elements.forEach(element => {
          element.addEventListener("click", () => {
            let c =element.parentNode.firstElementChild.innerHTML;
            console.log(c);
            navigator.clipboard.writeText(c)
          });
        });
      }, []);

    return (
        <>
            <div className="card border-primary mb-3 m-2" style={style}>
                <div className="card-header text-white bg-dark fs-4">{Websitename}</div>
                <div className="mx-3 text-primary">
                    <h5 className="fs-5 my-3 d-flex justify-content-between">Unm: <span className='' id='usn'> {Username}</span>
                        <button className=" border-0 bg-white material-symbols-outlined" id='hara' style={{ color: "black" }}>content_copy</button>
                    </h5>
                    <h5 className="fs-5 my-3 d-flex justify-content-between">Pswd: <span className='' id='psw'> {Password}</span>
                    <button className=' border-0 bg-white material-symbols-outlined' id='h' style={{ color: 'black' }} >content_copy</button>
                    </h5>
                </div>
            </div>

        </>
    )
}

export default PswCard
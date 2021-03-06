import React from 'react';

const Form = ({dataInsert, setDataInsert}) => {

    const handleChange = e =>{
        setDataInsert({
            ...dataInsert,
            [e.target.name]: e.target.value  
        })
    }

    let {nombre, rut, direccion,telefono,email, contacto, imagen} = dataInsert;

    const handleSubmit = () =>{
        //validation of data
        if(nombre === '' || rut=== '' || direccion=== ''||telefono=== ''||email=== ''||contacto=== ''){
            alert ('Debe llenar todos los datos')
            return;
        }

        const requestInit = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dataInsert)
        }

        const insertDatos = async () =>{
            const res = await fetch('http://localhost:8000/empresa',requestInit)
            await res.text()
        }

        insertDatos();

        //Reinicia State de pagina
        setDataInsert({
            nombre:'', 
            direccion:'', 
            telefono:'', 
            mail:'', 
            contacto:'', 
            imagen:'', 
            rut:'', 
            estado:1
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Nombre</span>
                    <input 
                        name = "nombre"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                    />
                    <span className="input-group-text col-2">Rut</span>
                    <input 
                        name = "rut"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Direcci??n</span>
                    <input 
                        name = "direccion"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                    />
                    <span className="input-group-text col-2">Tel??fono</span>
                    <input 
                        name = "telefono"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Email</span>
                    <input 
                        name = "mail"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                    />
                    <span className="input-group-text col-2">Nombre de Contacto</span>
                    <input 
                        name = "contacto"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Logo</span>
                    <input 
                        name = "imagen"
                        onChange={handleChange}
                        className='form-control'
                        type="file" 
                        text="sdfsd"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar informaci??n</button>
            </div>
        </form>
     );
}
 
export default Form;
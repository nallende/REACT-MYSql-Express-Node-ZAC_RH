import React from 'react';

const Form = ({dataInsert, setDataInsert, setListUpdated}) => {

    const handleChange = e =>{
        setDataInsert({
            ...dataInsert,
            [e.target.name]: e.target.value  
        })
    }

    
    const handleSubmit = () =>{
        //validation of data
        if(dataInsert.nombre === ''){
            alert ('datos erroneos')
            return
        }

        const requestInit = {
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dataInsert)
        }

        const updateData = async id =>{
            const res = await fetch('http://localhost:8000/personal/' + id,requestInit)
            await res.text()
            setListUpdated(true);
        }
        updateData(dataInsert.idpersonal); 

        //Reinicia State de pagina
        setDataInsert({
            rut:'',
            nombre:'',
            apellidop:'',
            apellidom:'',
            direccion:'',
            telefono:'',
            email:'',
            estado:1
        })


    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='container'>
            <div className="input-group mb-3">
                    <span className="input-group-text col-2">Rut</span>
                    <input 
                        name = "rut"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.rut}
                    />
                    <span className="input-group-text col-2">Nombre</span>
                    <input 
                        name = "nombre"
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        value={dataInsert.nombre} 
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Apellido P.</span>
                    <input 
                        name = "apellidop"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.apellidop}
                    />
                    <span className="input-group-text col-2">Apellido M</span>
                    <input 
                        name = "apellidom"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.apellidom}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Dirección</span>
                    <input 
                        name = "direccion"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.direccion}
                    />
                    <span className="input-group-text col-2">Teléfono</span>
                    <input 
                        name = "telefono"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.telefono}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Email</span>
                    <input 
                        name = "email"
                        onChange={handleChange}
                        className='form-control'
                        type="mail"
                        value={dataInsert.email} 
                    />
                    <span className="input-group-text col-2">Estado</span>
                    <select className="form-select" 
                        name = "estado"
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        value={dataInsert.estado}
                    >
                        <option value="0">No Vigente</option>
                        <option value="1">Vigente</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Editar información</button>
            </div>
        </form>
     );
}
 
export default Form;
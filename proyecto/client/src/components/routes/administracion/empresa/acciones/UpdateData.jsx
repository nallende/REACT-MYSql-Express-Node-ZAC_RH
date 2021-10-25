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
            const res = await fetch('http://localhost:8000/empresa/' + id,requestInit)
            await res.text()
            setListUpdated(true);
        }
        updateData(dataInsert.idempresa); 

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
                        value={dataInsert.nombre}
                    />
                    <span className="input-group-text col-2">Rut</span>
                    <input 
                        name = "rut"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.rut}
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
                        name = "mail"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.mail}
                    />
                    <span className="input-group-text col-2">Nombre de Contacto</span>
                    <input 
                        name = "contacto"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.contacto}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Logo</span>
                    <input 
                        name = "imagen"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.imagen}
                    />
                    <span className="input-group-text col-2">Estado</span>
                    <select class="form-select" 
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
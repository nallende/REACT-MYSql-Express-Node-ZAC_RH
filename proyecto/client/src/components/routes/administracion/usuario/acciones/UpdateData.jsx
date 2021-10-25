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
            const res = await fetch('http://localhost:8000/usuario/' + id,requestInit)
            await res.text()
            setListUpdated(true);
        }
        updateData(dataInsert.idusuario); 

        //Reinicia State de pagina
        setDataInsert({
            nombre:'',
            apellido:'',
            email:'',
            login:'',
            password:'',
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
                    <span className="input-group-text col-2">Apellido</span>
                    <input 
                        name = "apellido"
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        value={dataInsert.apellido} 
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Email</span>
                    <input 
                        name = "email"
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        value={dataInsert.email} 
                    />
                    <span className="input-group-text col-2">Login</span>
                    <input 
                        name = "login"
                        onChange={handleChange}
                        className='form-control'
                        type="text" 
                        value={dataInsert.login}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Password</span>
                    <input 
                        name = "password"
                        onChange={handleChange}
                        className='form-control'
                        type="password"
                        value={dataInsert.password}
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
import React from 'react';

const Form = ({dataInsert, setDataInsert,selectDataUsuario, selectDataEmpresa}) => {

    const handleChange = e =>{
        setDataInsert({
            ...dataInsert,
            [e.target.name]: e.target.value  
        })
    }


    const handleSubmit = () =>{
        //validation of data


        const requestInit = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dataInsert)
        }

        const insertDatos = async () =>{
            const res = await fetch('http://localhost:8000/usuarioempresa',requestInit)
            await res.text()
        }

        insertDatos();

        //Reinicia State de pagina
        setDataInsert({
            idusuario:'', 
            idempresa:'', 
            estado:1
        })


    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className="input-group mb-3">
                    <span className="input-group-text col-2">Empresa</span>
                    <select className="form-select" 
                        name = "idempresa"
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                    >
                    <option value="0">Seleccione Opción</option>    
                    {
                        selectDataEmpresa.map(data => (
                            <option key={data.idempresa} value={data.idempresa}>{data.nombre}</option>
                        ))
                    }
                    </select>
                    <span className="input-group-text col-2">usuario</span>
                    <select className="form-select" 
                        name = "idusuario"
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                    >
                    <option value="0">Seleccione Opción</option> 
                    {
                        selectDataUsuario.map(data => (
                            <option key={data.idusuario} value={data.idusuario}>{data.nombre}</option>
                        ))
                    }
                    </select>
                </div>

             
              
                <button type="submit" className="btn btn-primary">Agregar información</button>
            </div>
        </form>
     );
}
 
export default Form;
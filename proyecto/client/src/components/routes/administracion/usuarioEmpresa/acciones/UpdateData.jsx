import React from 'react';

const Form = ({dataInsert, setDataInsert, setListUpdated,selectDataEmpresa,selectDataUsuario}) => {

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
            const res = await fetch('http://localhost:8000/usuarioempresa/' + id,requestInit)
            await res.text()
            setListUpdated(true);
        }
        updateData(dataInsert.idusuarioempresa); 

        //Reinicia State de pagina
        setDataInsert({
            nombre:'', estado:1
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
                        value={dataInsert.idempresa}
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
                        value={dataInsert.idusuario}
                    >
                    <option value="0">Seleccione Opción</option> 
                    {
                        selectDataUsuario.map(data => (
                            <option key={data.idusuario} value={data.idusuario}>{data.nombre}</option>
                        ))
                    }
                    </select>
                </div>
                <div className="input-group mb-3">
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
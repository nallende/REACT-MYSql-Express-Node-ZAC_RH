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
            const res = await fetch('http://localhost:8000/afp/' + id,requestInit)
            await res.text()
            setListUpdated(true);
        }
        updateData(dataInsert.idafp); 

        //Reinicia State de pagina
        setDataInsert({
            nombre:'', estado:1
        })


    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='container'>

                <div className="input-group mb-3">
                    <span className="input-group-text col-3">Nombre</span>
                    <input 
                        name = "nombre"
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        value={dataInsert.nombre} 
                    />
                    <span className="input-group-text col-3">Estado</span>
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
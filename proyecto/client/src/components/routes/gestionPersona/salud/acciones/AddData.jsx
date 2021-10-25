import React from 'react';

const Form = ({dataInsert, setDataInsert}) => {

    const handleChange = e =>{
        setDataInsert({
            ...dataInsert,
            [e.target.name]: e.target.value  
        })

        console.log(dataInsert)
    }

    let {nombre} = dataInsert;

    const handleSubmit = () =>{
        //validation of data
        if(nombre === ''){
            alert ('datos erroneos')
            return
        }

        const requestInit = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dataInsert)
        }

        const insertDatos = async () =>{
            const res = await fetch('http://localhost:8000/salud',requestInit)
            await res.text()
        }

        insertDatos();

        //Reinicia State de pagina
        setDataInsert({
            nombre:'',  estado:1
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
                    
                </div>

             
              
                <button type="submit" className="btn btn-primary">Ingresar Usuario</button>
            </div>
        </form>
     );
}
 
export default Form;
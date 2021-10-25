import React from 'react'

const List = (props) => {

    const handleDelete = (id) =>{
        const requestInit = {
            method:'DELETE'
        }

        const deleteData = async id =>{
            const res = await fetch('http://localhost:8000/usuarioempresa/' + id,requestInit)
            await res.text()
            props.setListUpdated(true);
        }
        deleteData(id);        
    }

    
    return (

        <table className="table">
            <thead>
                <tr>
                    <th>Empresa</th>
                    <th>Usuario</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.selectData.length > 0 ?
                    props.selectData.map(data =>(
                        <tr key={data.idusuarioempresa}>
                            <td>{data.empresa}</td>
                            <td>{data.usuario}</td>
                            <td>{data.estadotexto}</td>
                            <td>
                            <button 
                                className="btn btn-dark"
                                onClick = {() =>{
                                    props.editRow(data);
                                }}
                            >Edit</button>
                            <button 
                                className="btn btn-danger ms-2"
                                onClick={() =>{
                                    handleDelete(data.idusuarioempresa);
                                }}                                
                            >Delete</button>
                            </td>
                        </tr>

                    ))
                    :
                    (
                        <tr>
                            <td colSpan={3}>No hay información ingresada</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default List

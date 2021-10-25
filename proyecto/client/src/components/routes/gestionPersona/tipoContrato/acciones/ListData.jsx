import React from 'react'

const List = (props) => {

    const handleDelete = (id) =>{
        const requestInit = {
            method:'DELETE'
        }

        const deleteData = async id =>{
            const res = await fetch('http://localhost:8000/tipocontrato/' + id,requestInit)
            await res.text()
            props.setListUpdated(true);
        }
        deleteData(id);        
    }

    
    return (

        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.selectData.length > 0 ?
                    props.selectData.map(data =>(
                        <tr key={data.idtipocontrato}>
                            <td>{data.idtipocontrato}</td>
                            <td>{data.nombre}</td>
                            <td>{data.estado}</td>
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
                                    handleDelete(data.idtipocontrato);
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

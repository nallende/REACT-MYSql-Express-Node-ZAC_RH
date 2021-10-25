import React, {useState,useEffect} from 'react'
import ListData from './acciones/ListData'
import AddData from './acciones/AddData'
import UpdateData from './acciones/UpdateData'

const Personal
 = () => {

    //Select
    const [selectData, setSelectData] = useState([]);

    //Delete
    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getDatos = async () =>{
            const res = await fetch('http://localhost:8000/personal')
            const data = await res.json()
            setSelectData(data)
        }
        getDatos();
        setListUpdated(false);
    },[listUpdated])

    //Insert
    const [dataInsert, setDataInsert] = useState({
        rut:'',
        nombre:'',
        apellidop:'',
        apellidom:'',
        direccion:'',
        telefono:'',
        email:'',
        estado:1
    })


    //Update

    const [editing, setEditing] = useState(false)
    const editRow = (dato) =>{
      setEditing(true);
      setDataInsert({
        idpersonal:dato.idpersonal,
        rut:dato.rut,
        nombre:dato.nombre,
        apellidop:dato.apellidop,
        apellidom:dato.apellidom,
        direccion:dato.direccion,
        telefono:dato.telefono,
        email:dato.email,
        estado:dato.estado
      })
    }
    const updateUser = (id, updatedUser) =>{
      setEditing(false);
      setSelectData(selectData.map(user => (user.id === id ? updatedUser:user )))
    }


    return (
        <div className="container">
            <div className="row">
              <div className="col-12">
                {editing ?(
                  <div>
                    <h2 style={{textAlign:'center'}}>Editar Registro del personal</h2>
                    <UpdateData
                      dataInsert={dataInsert}
                      setDataInsert={setDataInsert}
                      updateUser={updateUser}
                    />
                  </div>
                ):(
                  <div>
                    <h2 style={{textAlign:'center'}}>Registro del personal</h2>
                    <AddData dataInsert ={dataInsert} setDataInsert={setDataInsert} />
                  </div>
                )
                }
                </div>
                <div className="col-12">
                    <h2 style={{textAlign:'center'}}>Lista del perssonal</h2>
                    <ListData dataInsert ={dataInsert} setDataInsert={setDataInsert} selectData={selectData} setListUpdated={setListUpdated} editRow={editRow}/>
                </div>
            </div>
        </div>
    )
}
export default Personal


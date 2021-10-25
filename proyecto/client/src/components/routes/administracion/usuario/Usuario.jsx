import React, {useState,useEffect} from 'react'
import ListData from './acciones/ListData'
import AddData from './acciones/AddData'
import UpdateData from './acciones/UpdateData'

const Usuario = () => {

    //Select
    const [selectData, setSelectData] = useState([]);

    //Delete
    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getDatos = async () =>{
            const res = await fetch('http://localhost:8000/usuario')
            const data = await res.json()
            setSelectData(data)
        }
        getDatos();
        setListUpdated(false);
    },[listUpdated])

    //Insert
    const [dataInsert, setDataInsert] = useState({
        nombre:'',
        apellido:'',
        email:'',
        login:'',
        password:'',
        estado:1
    })


    //Update

    const [editing, setEditing] = useState(false)
    const editRow = (dato) =>{
      setEditing(true);
      setDataInsert({
        idusuario:dato.idusuario,
        nombre:dato.nombre,
        apellido:dato.apellido,
        email:dato.email,
        login:dato.login,
        password:dato.password,
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
                    <h2 style={{textAlign:'center'}}>Editar Registro de usuario</h2>
                    <UpdateData
                      dataInsert={dataInsert}
                      setDataInsert={setDataInsert}
                      updateUser={updateUser}
                    />
                  </div>
                ):(
                  <div>
                    <h2 style={{textAlign:'center'}}>Registro de usuario</h2>
                    <AddData dataInsert ={dataInsert} setDataInsert={setDataInsert} />
                  </div>
                )
                }
                </div>
                <div className="col-12">
                    <h2 style={{textAlign:'center'}}>Lista de usuario</h2>
                    <ListData dataInsert ={dataInsert} setDataInsert={setDataInsert} selectData={selectData} setListUpdated={setListUpdated} editRow={editRow}/>
                </div>
            </div>
        </div>
    )
}
export default Usuario

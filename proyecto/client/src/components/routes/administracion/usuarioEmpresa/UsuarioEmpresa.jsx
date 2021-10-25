import React, {useState,useEffect} from 'react'
import ListData from './acciones/ListData'
import AddData from './acciones/AddData'
import UpdateData from './acciones/UpdateData'

const EmpresaEmpresa = () => {

    //Select
    const [selectData, setSelectData] = useState([]);
    const [selectDataUsuario, setselectDataUsuario] = useState([]);
    const [selectDataEmpresa, setSelectDataEmpresa] = useState([]);

    //Delete
    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getDatos = async () =>{
            const res = await fetch('http://localhost:8000/usuarioempresa')
            const data = await res.json()
            setSelectData(data[0])

            const resm = await fetch('http://localhost:8000/usuario')
            const datam = await resm.json()
            setselectDataUsuario(datam[0])

            const rese = await fetch('http://localhost:8000/empresa')
            const datae = await rese.json()
            setSelectDataEmpresa(datae[0])
        }
        getDatos();
        setListUpdated(false);
    },[listUpdated])

    //Insert
    const [dataInsert, setDataInsert] = useState({
      idusuario:'', 
      idempresa:'', 
      estado:1
    })


    //Update

    const [editing, setEditing] = useState(false)
    const editRow = (dato) =>{
      setEditing(true);
      setDataInsert({
        idusuarioempresa:dato.idusuarioempresa,
        idempresa:dato.idempresa,
        idusuario:dato.idusuario,
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
                    <h2 style={{textAlign:'center'}}>Editar Registro de Módulos por Empresa</h2>
                    <UpdateData
                      dataInsert={dataInsert}
                      setDataInsert={setDataInsert}
                      updateUser={updateUser}
                      selectDataUsuario={selectDataUsuario}
                      selectDataEmpresa={selectDataEmpresa} 
                    />
                  </div>
                ):(
                  <div>
                    <h2 style={{textAlign:'center'}}>Registro de Módulos por Empresa</h2>
                    <AddData 
                      dataInsert ={dataInsert} 
                      setDataInsert={setDataInsert} 
                      selectDataUsuario={selectDataUsuario}
                      selectDataEmpresa={selectDataEmpresa} 
                    />
                  </div>
                )
                }
                </div>
                <div className="col-12">
                    <h2 style={{textAlign:'center'}}>Lista de Módulos por Empresa</h2>
                    <ListData 
                      dataInsert ={dataInsert} 
                      setDataInsert={setDataInsert} 
                      selectData={selectData} 
                      selectDataUsuario={selectDataUsuario}
                      selectDataEmpresa={selectDataEmpresa} 
                      setListUpdated={setListUpdated} 
                      editRow={editRow}
                    />
                </div>
            </div>
        </div>
    )
}
export default EmpresaEmpresa

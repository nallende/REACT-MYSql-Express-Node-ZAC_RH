import React, {useState,useEffect} from 'react'
import ListData from './acciones/ListData'
import AddData from './acciones/AddData'
import UpdateData from './acciones/UpdateData'

const ModuloEmpresa = () => {

    //Select
    const [selectData, setSelectData] = useState([]);
    const [selectDataModulo, setSelectDataModulo] = useState([]);
    const [selectDataEmpresa, setSelectDataEmpresa] = useState([]);

    //Delete
    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getDatos = async () =>{
            const res = await fetch('http://localhost:8000/moduloempresa')
            const data = await res.json()
            setSelectData(data[0])

            const resm = await fetch('http://localhost:8000/modulo')
            const datam = await resm.json()
            setSelectDataModulo(datam[0])

            const rese = await fetch('http://localhost:8000/empresa')
            const datae = await rese.json()
            setSelectDataEmpresa(datae[0])
        }
        getDatos();
        setListUpdated(false);
    },[listUpdated])

    //Insert
    const [dataInsert, setDataInsert] = useState({
      idmodulo:'', 
      idempresa:'', 
      estado:1
    })


    //Update

    const [editing, setEditing] = useState(false)
    const editRow = (dato) =>{
      setEditing(true);
      setDataInsert({
        idmoduloempresa:dato.idmoduloempresa,
        idempresa:dato.idempresa,
        idmodulo:dato.idmodulo,
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
                      selectDataModulo={selectDataModulo}
                      selectDataEmpresa={selectDataEmpresa} 
                    />
                  </div>
                ):(
                  <div>
                    <h2 style={{textAlign:'center'}}>Registro de Módulos por Empresa</h2>
                    <AddData 
                      dataInsert ={dataInsert} 
                      setDataInsert={setDataInsert} 
                      selectDataModulo={selectDataModulo}
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
                      selectDataModulo={selectDataModulo}
                      selectDataEmpresa={selectDataEmpresa} 
                      setListUpdated={setListUpdated} 
                      editRow={editRow}
                    />
                </div>
            </div>
        </div>
    )
}
export default ModuloEmpresa

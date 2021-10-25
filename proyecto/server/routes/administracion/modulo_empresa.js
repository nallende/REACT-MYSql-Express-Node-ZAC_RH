const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('call moduloempresa()', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})

routes.get('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM modulo_empresa  WHERE idmoduloempresa = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})


routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('INSERT INTO modulo_empresa set ?',[req.body] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato ingresado correctamente')
        })
    })
})

routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('DELETE FROM modulo_empresa  WHERE idmoduloempresa = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato borrado correctamente')
        })
    })
})

routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE modulo_empresa set ? WHERE idmoduloempresa = ?',[req.body, req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato actualizado correctamente')
        })
    })
})

module.exports = routes;
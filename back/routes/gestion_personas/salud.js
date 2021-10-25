const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM salud', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})

routes.get('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM salud  WHERE idsalud = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})


routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('INSERT INTO salud set ?',[req.body] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato ingresado correctamente')
        })
    })
})

routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('DELETE FROM salud  WHERE idsalud = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato borrado correctamente')
        })
    })
})

routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE salud set ? WHERE idsalud = ?',[req.body, req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato actualizado correctamente')
        })
    })
})

module.exports = routes;
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM personal', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})

routes.get('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM personal  WHERE idpersonal = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})


routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('INSERT INTO personal set ?',[req.body] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato ingresado correctamente')
        })
    })
})

routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('DELETE FROM personal  WHERE idpersonal = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato borrado correctamente')
        })
    })
})

routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE personal set ? WHERE idpersonal = ?',[req.body, req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('Dato actualizado correctamente')
        })
    })
})

module.exports = routes;
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('call usuario()', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})

routes.get('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM usuario  WHERE idusuario = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})

routes.get('/:login/:password', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        //res.send(req.params)

        conn.query('SELECT * FROM usuario  WHERE login = ? and password =?',[req.params.login, req.params.password] , (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})

routes.get('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM usuario  WHERE idusuario = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
})

routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('INSERT INTO usuario set ?',[req.body] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('El libro ha sido ingresado')
            // res.json(rows);
        })
    })
})

routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('DELETE FROM usuario  WHERE idusuario = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('El libro ha sido eliminado saisfactoriamente')
            // res.json(rows);
        })
    })
})

routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE usuario set ? WHERE idusuario = ?',[req.body, req.params.id] , (err, rows)=>{
            if(err) return res.send(err);

            res.send('El libro ha sido actualizado')
            // res.json(rows);
        })
    })
})

module.exports = routes;
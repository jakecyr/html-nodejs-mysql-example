const express = require('express');
const database = require('../database');

const router = express.Router();

router
    .get('/', async (req, res) => {
        const users = await database.query(`
        SELECT
            *
        FROM
            User
        ORDER BY
            date_added DESC
    `);

        res.contentType('html');

        res.end(`
        ${users.map((user) => {
            return `<p>${user.first_name} ${user.last_name} is ${user.age} years old</p>`;
        }).join('')}
    `);
    })

    .post('/', async (req, res) => {
        const body = req.body;

        await database.execute(`
        INSERT INTO User (
            first_name,
            last_name,
            age,
            date_added
        ) VALUES (
            @firstName,
            @lastName,
            @age,
            NOW()
        )
    `, {
            firstName: body.first,
            lastName: body.last,
            age: body.age,
        });

        res.end('Added user');
    });

module.exports = router;

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const fs = require('fs');
const path = require('path');
const request = require('request');
// post endpoint
app.post('/start', (req, res) => {

    // get time and format it to hh:mm:ss
    let time = new Date().toLocaleTimeString();
    
    console.log(`${time} : démarré`)
    // check if the image exists
    request.post('https://discord.com/api/webhooks/1135267210890313779/WOOe5WA-lb8A660mEFppTw3V_8l2OOYUHQbdCtPcwCdE2qGJm7lDymMaqSL8V-hvdD99',
    { json: {content: 'Le détecteur de mouvement a démarré.'} },
    function (error, response, body) {
        if(!error && response.statusCode == 200) {
            console.log(body)
        }
        if(error) { console.log(error)}
    });
    res.send(`Le serveur a bien reçu le message du démarrage`)
});

// post endpoint
app.post('/motion', (req, res) => {

    // get time and format it to hh:mm:ss
    let time = new Date().toLocaleTimeString();
    
    console.log(`${time} : mouvement dans le garage`)
    request.post('https://discord.com/api/webhooks/1135267210890313779/WOOe5WA-lb8A660mEFppTw3V_8l2OOYUHQbdCtPcwCdE2qGJm7lDymMaqSL8V-hvdD99',
    { json: {content: '@everyone Il y a eu du mouvement dans le garage.'} },
    function (error, response, body) {
        if(!error && response.statusCode == 200) {
            console.log(body)
        }
        if(error) { console.log(error)}
    });
    res.send(`Le serveur a bien reçu le message du mouvement`)
});

app.get('/online', (req, res) => {
    res.send('Serveur en ligne !')
})

// start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
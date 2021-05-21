//import fs from 'fs'
const fs = require('fs');

function quando_o_botao_clicou()
{
    fs.appendFileSync('nosso_teste.txt', Math.random() + '\n');
}
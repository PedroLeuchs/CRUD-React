const { exec } = require("child_process");
const path = require("path");

// Caminho para a pasta onde executar o 'npm start'
const npmStartPath = path.join(__dirname, "pages");

// Caminho para a pasta onde executar o 'node index.js'
const nodeIndexJsPath = path.join(__dirname, "server");

// Comando para iniciar o servidor com 'npm start'
exec("npm start", { cwd: npmStartPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao iniciar o servidor: ${error}`);
    return;
  }
  console.log(`Servidor iniciado: ${stdout}`);
});

// Comando para executar 'node index.js'
exec("node index.js", { cwd: nodeIndexJsPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar 'node index.js': ${error}`);
    return;
  }
  console.log(`'node index.js' executado: ${stdout}`);
});

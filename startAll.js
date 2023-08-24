const { exec } = require('child_process');

// Comando para iniciar o servidor com 'npm start'
exec('npm start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao iniciar o servidor: ${error}`);
    return;
  }
  console.log(`Servidor iniciado: ${stdout}`);
});

// Comando para executar 'node index.js'
exec('node index.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar 'node index.js': ${error}`);
    return;
  }
  console.log(`'node index.js' executado: ${stdout}`);
});

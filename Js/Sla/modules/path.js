const path = require('path')

// Basename
console.log(path.basename(__filename))

// Nome do diretorio atual
console.log(path.dirname(__filename))

// Extenssão do arquivo
console.log(path.extname(__filename))

// Criar o objeto path
console.log(path.parse(__filename))

// Jutar os caminhos path
console.log(path.join(__dirname, "teste"))
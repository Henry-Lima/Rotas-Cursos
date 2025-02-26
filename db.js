import Sequelize from 'sequelize';

// Configuração da conexão com o banco de dados
const conexaoSequelize = new Sequelize('Programa', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Função assíncrona para testar a conexão
async function testarConexao() {
  try {
    await conexaoSequelize.authenticate();
    console.log('------------------------');
    console.log('Conexão feita com sucesso!');
  } catch (err) {
    console.error('Erro na conexão com o banco!', err);
  }
}

// Definição do modelo "Cursos"
const Cursos = conexaoSequelize.define('Cursos', {
  unidade: {
    type: Sequelize.STRING,
    allowNull: false, 
  },
  curso: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Função para sincronizar o modelo com o banco de dados
async function sincronizarTabela() {
  await Cursos.sync(); // Sincroniza a tabela (não usa 'force' em produção)
  console.log('Tabela sincronizada!');
}

// Função para criar um novo curso
async function criarCurso() {
  await Cursos.create({
    unidade: 'ITA',
    curso: 'RH',
  });
  console.log('Curso criado com sucesso!');
}

// Chama as funções
async function iniciar() {
  await testarConexao();
  await sincronizarTabela();
  await criarCurso();
}

iniciar();

export default Cursos;
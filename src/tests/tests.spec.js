import repository from '../repositories/jogadorRepository.js'
// import chai from "chai"
// import sinon from "sinon"
// import chaiHttp from "chai-http"
// import mocha from "mocha"

// var chai = require('chai'),

// const expect = chai.expect
// const describe = mocha.describe
// const it = chai.it

// chai.should();

//   sinon = require('sinon');
// var chaiHttp = require('chai-http');

// chai.use(chaiHttp);

/*/ describe.skip('Testes das rotas', () => {
  
//   it('Get básico', () =>{
//     chai.request('http://localhost:3000')
//       .get('/')
//       .end(function(err, res) {
//         expect(res).to.have.status(202);   
//       });
//   });


//   it('Get jogadores - status', () =>{
//     chai.request('http://localhost:3000')
//       .get('/jogadores')
//       .end(function(err, res) {
//         expect(res).to.have.status(200);   
//       });
//   });


//   it.skip('Post jogadores - status', () =>{
//     chai.request('http://localhost:3000')
//       .post('/jogadores')
//       .send({
//         "name" : "Roger",
//       	"coins" : 100
//       })
//       .end((err, res) => {
//         chai.expect(res).to.have.status(201); 
//       });
//   });


//   it('Put jogadores - status', () =>{

//     chai.request('http://localhost:3000')
//       .put('/jogadores/62794589cc3c47e27627f6f1')
//       .send({
//       	"coins" : 400
//       })
//       .end((err, res) => {
//         chai.expect(res).to.have.status(201); 
//       });
//   });
  

//   it.skip('Delete jogadores - status', () =>{

//     chai.request('http://localhost:3000')
//       .delete('/jogadores/')
//       .end((err, res) => {
//         chai.expect(res).to.have.status(201); 
//       });
//   });
// });*/

// console.log(chai)
// console.log(mocha)

describe('Jogador teste services e repositories', async () => {
  const sandbox = sinon.createSandbox({});

  //var repository = await import('../repositories/jogadorRepository.js')
  //var services = await import('../services/jogadorService.js');

  afterEach(() => {
    sandbox.restore();
  })

  it('should return an empty array if the I dont have any data saved on database', () =>{
    //ARRANGE
    sandbox.stub(repository, "jogadorFind").resolves([]);

    //ACT
    const response = services.lerJogador();

    //ASSERT
    expect(response).to.be.equal([]);
  })

})
var chai = require('chai'),
  expect = chai.expect;

chai.should();

var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe.skip('Testes das rotas', () => {
  
  it('Get básico', () =>{
    chai.request('http://localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(202);   
      });
  });


  it('Get jogadores - status', () =>{
    chai.request('http://localhost:3000')
      .get('/jogadores')
      .end(function(err, res) {
        expect(res).to.have.status(200);   
      });
  });


  it('Post jogadores - status', () =>{
    chai.request('http://localhost:3000')
      .post('/jogadores')
      .send({
        "name" : "Roger",
      	"coins" : 100
      })
      .end((err, res) => {
        chai.expect(res).to.have.status(201); 
      });
  });


  it('Put jogadores - status', () =>{

    chai.request('http://localhost:3000')
      .put('/jogadores/62794589cc3c47e27627f6f1')
      .send({
      	"coins" : 400
      })
      .end((err, res) => {
        chai.expect(res).to.have.status(201); 
      });
  });
  

  it.skip('Delete jogadores - status', () =>{

    chai.request('http://localhost:3000')
      .delete('/jogadores/')
      .end((err, res) => {
        chai.expect(res).to.have.status(201); 
      });
  });
});




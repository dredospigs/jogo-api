const repository = require('../repositories/jogadorRepository.js')
const services = require('../services/jogadorService')

var chai = require('chai')
 
const expect = chai.expect
sinon = require('sinon'); 

/*var chaiHttp = require('chai-http')
chai.use(chaiHttp)
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
        expect(res).to.have.status(201);   
      });
  });


  it.skip('Post jogadores - status', () =>{
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
      .put('/jogadores/628414e908b7922aab930001')
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
});*/


describe('Jogador teste services e repositories', async () => {
  const sandbox = sinon.createSandbox({});

  console.log('sandbox')

  afterEach(() => {
    sandbox.restore();
  })

  it('should return an empty array if the I dont have any data saved on database', async () =>{
    //ARRANGE
    sandbox.stub(repository, "jogadorFind").resolves([]);

    //ACT
    const response = await services.lerJogador();

    //ASSERT
    expect(response).to.be.deep.equal([]);
  })


  it('should calculate the right quantity of medals and trophies when the jogadorFind is called', async () => {
    //ARRANGE
    const findJogadorStub = sandbox.stub(repository, 'jogadorFind').resolves([
      {
        _id: '1',
        name: 'Bruno',
        coins: 60
      }
    ])

    //ACT
    const response = await services.lerJogador();

    //ASSERT
    expect(response).to.be.deep.equal([
      {
        _id: '1',
        name: 'Bruno',
        coins: 60,
        medals: 6,
        trophies: 2
      }
    ])
  })


  it('should have 2 values when jogadorFind is called', async () => {
    //ARRANGE
    const findJogadorStub = sandbox.stub(repository, 'jogadorFind').resolves([
      {
        _id: '1',
        name: 'Bruno',
        coins: 60
      },
      {
        _id: '2',
        name: 'Renan',
        coins: 35
      }
    ])

    //ACT
    const response = await services.lerJogador();

    //ASSERT
    expect(response.length).to.be.equal(2)
  })


  it('should confirm if the method jogadorCreate is called', async () => {
    //ARRANGE
    const stubCreate = sandbox.stub(repository, "jogadorCreate").resolves([{
      _id: '3',
      name: 'William',
      coins: 30
    }])

    //ACT    
    const response = await services.criarJogador()

    //ASSERT
    sinon.assert.calledOnce(stubCreate);
    expect(response).to.be.deep.equal([{
      _id: '3',
      name: 'William',
      coins: 30
    }])
  })

  it('should confirm if the method jogadorUpdate is called', async () => {
    //ARRANGE
    const stubUpdate = sandbox.stub(repository, "jogadorUpdate")

    //ACT    
    await services.atualizarJogador()

    //ASSERT
    sinon.assert.calledOnce(stubUpdate);
  })

  it('should confirm if the method jogadorDelete is called', async () => {
    //ARRANGE
    const stubDelete = sandbox.stub(repository, "jogadorDelete")

    //ACT    
    await services.deleteJogador()

    //ASSERT
    sinon.assert.calledOnce(stubDelete);
  })
})
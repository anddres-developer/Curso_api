const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000';

describe('Inserte el nombre y el precion', () => {
  it('Esperamos un name y un price', (done) => {
    chai
      .request(url)
      .post('/api/v1/products')
      .send({ name: 'Laptop', price: 500 })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});

/* const app = require('../index').app;

describe('Suite de prueba del curso', () => {
  it('Esperamos un Hola mundo', (done) => {
    chai
      .request('http://localhost:3000')
      .get('/')
      .end((err, res) => {
        console.log('A');
        chai.assert.equal(res.text, 'Hola mundo');
        done();
      });
    console.log('B');
  });
}); */

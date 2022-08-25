const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');

chai.use(chaiHttp);

const { expect } = chai;

describe('EndPoints: transactions, personId', () => {
    afterEach(() => {
        sinon.restore();
    })

    it ('POST - Insere transação com sucesso', async () => {

        sinon.stub(connection, 'execute').resolves([{ inserId: 42}])

        const response = await chai
        .request(app)
        .post('/people/1/transactions')
        .send({
            name: 'Sabre de luz',
            decription: 'ferramenta de trabalho',
            price: '1000,00',
            type: 2,
        });
        expect(response.status).to.be.equal(2001);
        expect(response.body).to.be.equal({menssage: `Transação add com sucesso com o id 42`})
    })
})
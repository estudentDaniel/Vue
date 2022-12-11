const app = require('../bin/www')
let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = chai.expect
const base_url = require('http://localhost:3000')
const user = require('../models/user')

chai.use(chaiHttp)
describe('teste de usuarios',()=>{
    let qtdUsuario = 0;
    before(done=>{
        let Usuario = require('../models/user')
        Usuario.count()
        .then(qtd => {
            qtdUsuario = qtd
        })
        .catch(err=> {
            console.log(err)
        })
    })
    let usertest = {
        email: 'arsthurcesar@gmail.com',
        passwordHash: 12345
    }
    let _idUsuario;
    it('criar um novo usuario', (done)=>{
       chai.request(base_url)
       .post('/user/signup')
       .send(usertest)
       .end((err, res)=>{
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        expect(res.body).to.have.property('email')
        expect(res.body.email).to.equals(usertest.email)
        _idUsuario = res.body._id
        done()
       })
    })
})
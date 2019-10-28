const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

function hello(name, cb) {
  cb('hello ' + name);
}

describe('Sample Unit Tests', function() {
  it('should pass 1 == 1 (canary test)', function() {
    const one = 1;
    one.should.equal(1);
  });

  it('should call callback with correct greeting', function() {
    const cb = sinon.spy();
    hello('foo', cb);
    cb.should.have.been.calledWith('hello foo');
  });
});

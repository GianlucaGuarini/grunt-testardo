// it should do nothing but showing OK
module.exports = {
  path: '/bootstrap/',
  test: function(sandbox, window, document) {
    setTimeout(function(){
      sandbox.done();
    },1000);
  }
};
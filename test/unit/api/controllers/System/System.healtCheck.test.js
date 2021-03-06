var request = require('supertest');

describe('System', function() {
  describe('healthChech', function() {
    it('should return 200', function(done) {
      request(sails.hooks.http.app)
        .get('/system/health')
        .expect(200)
        .end(function(err, res) {
          if (err) {
            return done(err); 
          }

          done();
        });
    });
  });
});

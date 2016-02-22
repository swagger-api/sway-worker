describe('basics', function(){

  it('should return an error for invalid swagger', function(done){

    var worker = new Worker('./index.js')

    worker.onmessage = function (msg) {
      try {
        expect(msg.data.errors.length).to.eql(1)
        expect(msg.data.errors[0].message).to.match(/Unable to identify the Swagger version/)
        done()
      } catch(e) {
        done(e)
      }
    }

    worker.onerror = done
    worker.postMessage({definition: {}})

  })

  it('should return no errors for valid swagger spec', function(done){

    var worker = new Worker('./index.js')

    worker.onmessage = function (msg) {
      try {
        expect(msg.data.errors.length).to.eql(0)
        done()
      } catch(e) {
        done(e)
      }
    }

    worker.onerror = done
    worker.postMessage({definition: { 
      swagger: '2.0',
      info: {
        title: 'Title',
        version: '1.0.0',
      },
      paths: {}
    }})

  })
})

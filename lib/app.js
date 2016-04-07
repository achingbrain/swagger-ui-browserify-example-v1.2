var SwaggerUi = require('swagger-ui-browserify')

window.swaggerUi = new SwaggerUi({
  url: 'https://api.pushpay.com/swagger',
  dom_id: 'swagger-ui-container',
  supportHeaderParams: true,
  onComplete: function (swaggerApi, swaggerUi) {
    console.log('Loaded SwaggerUI')
  },
  onFailure: function (error) {
    console.error('Unable to Load SwaggerUI', error)
  },
  apisSorter: 'alpha',
  operationsSorter: 'alpha',
  docExpansion: 'none'
})
window.swaggerUi.load()

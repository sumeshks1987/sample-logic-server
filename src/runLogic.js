const InitClient = require('initai-node')

module.exports = function runLogic(eventData) {
  return new Promise((resolve) => {
    const client = InitClient.create(eventData, {succeed: resolve})
    
    const provideOptions = client.createStep({
    	satisfied(){ return false },

    	promt() {
    		console.log("Test");
    		client.addTextResponse('Hi, how can help you with IndusInd Bank related queries. Here are some quick links')
    		client.addTextResponse('IFSC Code,Branches,Personal Banking,Corporate Banking,NRI Banking,Customer Support')
    		client.done()
    	}
    })

    client.runFlow({
    	streams: {
    		greeting: provideOptions,
    	},
    	classifications: {
    		greeting: 'response_greeting'
    	}
    })

    // Add your custom logic here!
    //client.addTextResponse('Responding from `runLogic.js`!')
    //client.done()
  })
}

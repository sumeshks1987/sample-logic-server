//const fetchWeather = require('./getIFSC-Info')
const InitClient = require('initai-node')

module.exports = function runLogic(eventData) {
  return new Promise((resolve) => {
    const client = InitClient.create(eventData, {succeed: resolve})
    
    const response_greeting = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test");
    		client.addTextResponse('Hi there - how can I help you with IndusInd Bank related queries. Here are some quick links')
    		client.addTextResponse('Personal Banking,Corporate Banking,NRI Banking,Branches,Customer Support')
    		client.done()
    	}
    })

    const personalBanking = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test1");
    		client.addTextResponse('Choose from the below given options')
    		client.addTextResponse('Accounts,Deposits,Loans,Insurance,Cards,Super Saver Pack,Investments,Foreign Exchange,Financial Inclusion')
    		client.done()
    	}
    })

    client.runFlow({
    	streams: {
    		main: [response_greeting],
    		personalBanking: [personalBanking],
    		response_greeting: [response_greeting],
    	},
    	classifications: {
    		greeting: 'response_greeting',
    		Option1: 'personalBanking'
    	}
    })

    // Add your custom logic here!
    //client.addTextResponse('Responding from `runLogic.js`!')
    client.done()
  })
}

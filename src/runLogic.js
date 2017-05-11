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

    const corporateBanking = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test2");
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/corporate-banking.html')
    		client.done()
    	}
    })

    const nriBanking = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test3");
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/nri-banking.html')
    		client.done()
    	}
    })

    const branches = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test4");
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/content/home/branch-details.html')
    		client.done()
    	}
    })

    const customerSupport = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test5");
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/footer/customer-care/contact-us.html')
    		client.done()
    	}
    })

    const accounts = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test6");
    		client.addTextResponse('Please select the type of account')
    		client.addTextResponse('Individual Savings Account,Defence Salary Account,Corporate Salary Account')
    		client.done()
    	}
    })

    const deposits = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test7");
    		client.addTextResponse('Please select the type of deposit')
    		client.addTextResponse('Fixed Deposit,Sweep In/Out Deposit,Regular Recurring Deposit,Senior Citizen Scheme,Young Saver Deposit,Deposit Plus,Value Added Recurring Deposit')
    		client.done()
    	}
    })

    const loans = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test8");
    		client.addTextResponse('Please select the loan type')
    		client.addTextResponse('Loan Against Property,Home Loan,Personal Loan,Car Loan,Two Wheeler Loan,Gold Loan,Loan Against Securities,Loan on Credit Cards,Indus Kisan')
    		client.done()
    	}
    })

    const insurance = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test9");
    		client.addTextResponse('Please select the type of insurance')
    		client.addTextResponse('Health Insurance,General Insurance,Life Insurance,Card Protection Plan')
    		client.done()
    	}
    })

    client.runFlow({
    	streams: {
    		main: [response_greeting],
    		personalBanking: [personalBanking],
    		corporateBanking: [corporateBanking],
    		nriBanking: [nriBanking],
    		branches: [branches],
    		customerSupport: [customerSupport],
    		accounts: [accounts],
    		deposits: [deposits],
    		loans: [loans],
    		insurance: [insurance],
    		response_greeting: [response_greeting],
    	},
    	classifications: {
    		greeting: 'response_greeting',
    		option1: 'personalBanking',
    		option2: 'corporateBanking',
    		option3: 'nriBanking',
    		option4: 'branches',
    		option5: 'customerSupport',
    		option_pbaccounts: 'accounts',
    		option_pbdeposits: 'deposits',
    		option_pbloans: 'loans',
    		option_pbinsurance: 'insurance',
    	}
    })

    // Add your custom logic here!
    //client.addTextResponse('Responding from `runLogic.js`!')
    client.done()
  })
}

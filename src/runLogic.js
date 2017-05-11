//const fetchWeather = require('./getIFSC-Info')
const InitClient = require('initai-node')

module.exports = function runLogic(eventData) {
  return new Promise((resolve) => {
    const client = InitClient.create(eventData, {succeed: resolve})
    
    const response_greeting = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test");
    		client.updateConversationState('option','select')
    		client.addTextResponse('Hi there - how can I help you with IndusInd Bank related queries. Here are some quick links')
    		client.addTextResponse('Personal Banking,Corporate Banking,NRI Banking,Branches,Customer Support')
    		client.done()
    	}
    })

    const personalBanking = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test1");
    		client.updateConversationState('selected','personal banking')
    		client.addTextResponse('Choose from the below given options')
    		client.addTextResponse('Accounts,Deposits,Loans,Insurance,Cards,Super Saver Pack,Investments,Foreign Exchange,Financial Inclusion')
    		client.done()
    	}
    })

    const corporateBanking = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test2");
    		client.updateConversationState('selected','corporate banking')
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/corporate-banking.html')
    		client.done()
    	}
    })

    const nriBanking = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test3");
    		client.updateConversationState('selected','nri banking')
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/nri-banking.html')
    		client.done()
    	}
    })

    const branches = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test4");
    		client.updateConversationState('selected','branches')
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/content/home/branch-details.html')
    		client.done()
    	}
    })

    const customerSupport = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test5");
    		client.updateConversationState('selected','customer support')
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/footer/customer-care/contact-us.html')
    		client.done()
    	}
    })

    const accounts = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test6");
    		client.updateConversationState('type','account')
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

    const individualSavingsAccount = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test10");
    		if(client.getConversationState().type == "account"){
    			client.addTextResponse('Visit this URL for more details - http://www.indusind.com/content/home/personal-banking/products/accounts/individual-savings-account.html')
    		} else {
    			client.addResponse('option_pbaccounts')
    		}
    		client.done()
    	}
    })

    const defenceSalaryAccount = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test11");
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/content/home/personal-banking/products/accounts/defence-accounts.html')
    		client.done()
    	}
    })

    const corporateSalaryAccount = client.createStep({
    	satisfied(){ return false },

    	prompt() {
    		console.log("Test12");
    		client.addTextResponse('Visit this URL for more details - http://www.indusind.com/content/home/personal-banking/products/accounts/corporate-account.html')
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
    		individualSavingsAccount: [individualSavingsAccount],
    		defenceSalaryAccount: [defenceSalaryAccount],
    		corporateSalaryAccount: [corporateSalaryAccount],
    		response_greeting: [response_greeting],
    	},
    	classifications: {
    		greeting: 'response_greeting',
    		option1: 'personalBanking',
    		cbtext: 'personalBanking',
    		option2: 'corporateBanking',
    		option3: 'nriBanking',
    		option4: 'branches',
    		option5: 'customerSupport',
    		option_pbaccounts: 'accounts',
    		pbaccount_type_text: 'accounts',
    		option_pbdeposits: 'deposits',
    		option_pbloans: 'loans',
    		option_pbinsurance: 'insurance',
    		option_pbaccounts_isa: 'individualSavingsAccount',
    		option_pbaccounts_dsa: 'defenceSalaryAccount',
    		option_pbaccounts_csa: 'corporateSalaryAccount'
    	}
    })

    // Add your custom logic here!
    //client.addTextResponse('Responding from `runLogic.js`!')
    client.done()
  })
}

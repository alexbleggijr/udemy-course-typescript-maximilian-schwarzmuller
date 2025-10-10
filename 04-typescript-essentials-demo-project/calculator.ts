type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type calculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): calculationResult {

};

function printResults(results) {};

const results = calculateInvestment() {};
printResults(results);
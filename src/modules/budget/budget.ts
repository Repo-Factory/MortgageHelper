import { convertRate } from 'utility/converter';
import { convertTerm } from 'utility/converter';
import { printBudget } from 'modules/budget/formatter';
import { Budget } from 'models/inputs/budget';

const calculateMaxPrice = (m: number, r: number, n: number): number => {
    const rate = 1 + r;
    const compound = rate ** n
    const numerator = r * compound;
    const denominator = compound - 1;
    return denominator / numerator * m;
}

export const calculateBudget = (budget: Budget) => {
    const maxPayment = budget.maxpayment;
    const term = budget.term;
    const rate = convertRate(budget.interest);
    const numPayments = convertTerm(term);
    const maxPrice = calculateMaxPrice(maxPayment, rate, numPayments);
    printBudget(maxPayment, maxPrice);
}
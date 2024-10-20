import { Mortgage } from 'models/mortage';
import { convertRate } from 'utility/converter';
import { convertTerm } from 'utility/converter';
import { readConfig } from 'utility/config';
import { printAmortization } from 'utility/formatter';

const calculateMonthlyPayment = (p: number, r: number, n: number): number => {
    const rate = 1 + r;
    const compound = rate ** n
    const numerator = r * compound;
    const denominator = compound - 1;
    return p * numerator / denominator;
}

const calculateAmortization = (mortgage: Mortgage) => {
    const price = mortgage.price;
    const term = mortgage.term;
    const rate = convertRate(mortgage.interest);
    const numPayments = convertTerm(term);
    const payment = calculateMonthlyPayment(price, rate, numPayments);
    printAmortization(price, numPayments, rate, payment);
}

const main = () => {
    const mortgage: Mortgage = readConfig();
    calculateAmortization(mortgage);
}

main();

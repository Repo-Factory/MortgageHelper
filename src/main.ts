import { readConfig } from 'utility/config';
import { Inputs } from 'models/inputs';
import { calculateAmortization } from 'modules/amortize/amortize';
import { calculateBudget } from 'modules/budget/budget';

const main = () => {
    const inputs: Inputs = readConfig();
    calculateAmortization(inputs.mortgage);
    calculateBudget(inputs.budget);
}

main();

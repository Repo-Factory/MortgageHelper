import { Percentage } from 'models/percentage';

const MONTHS_IN_YEAR = 12;

export const convertRate = (annualRate: number) => {
    return new Percentage(annualRate).asDecimal / MONTHS_IN_YEAR;
}

export const convertTerm = (term: number) => {
    return MONTHS_IN_YEAR * term;    
}

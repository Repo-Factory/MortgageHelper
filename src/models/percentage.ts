export class Percentage {
    asDecimal: number;
    constructor(percentage: number) {
        this.asDecimal = percentage / 100;
    }
}
export const printAmortization = (principal: number, numPayments: number, monthlyRate: number, monthlyPayment: number): void => {
    let remainingBalance = principal;

    console.log("Payment Number\tPayment\t\tPrincipal\tInterest\tRemaining Balance");
    for (let paymentNumber = 1; paymentNumber <= numPayments; paymentNumber++) {
        const interest = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interest;
        remainingBalance -= principalPayment;

        console.log(`${paymentNumber}\t\t${monthlyPayment.toFixed(2)}\t\t${principalPayment.toFixed(2)}\t\t${interest.toFixed(2)}\t\t${remainingBalance.toFixed(2)}`);
    }
}
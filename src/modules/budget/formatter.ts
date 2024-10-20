
export const printBudget = (maxPayment: number, maxPrice: number): void => {
    console.log();
    console.log();
    console.log(
        "If You Want To Pay " + maxPayment.toFixed(2) + 
        " Per Month, You Can Afford A House Up To $" + maxPrice.toFixed(2)
    );
}
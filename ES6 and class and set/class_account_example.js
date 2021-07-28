//create a class Account (AccountNo, Name, AccountType,Amount, MinBalance)
//create a class Transaction with Following Methods and its extends Account
// -- create Account
// -- Get Account Details(AccountID)
// -- Get Balance(AccountId)
// -- Desposit(amt)
// -- Withdraw(amt) //acccuntn should have the amount and after with draw balance amount should be equal or > not equal




class Account{
    constructor(AccNumber,AccName, AccType, AccAmount,AccMinBalance){
        this.AccNumber = AccNumber;
        this.AccName = AccName;
        this.AccType = AccType;
        this.AccAmount = AccAmount;
        this.AccMinBalance = AccMinBalance;
    }

    accountDetails(){
        console.log(`
            ANo: ${this.AccNumber} , AName: ${this.AccName} , AType: ${this.AccType} , AAmt: ${this.AccAmount} , ABal: ${this.AccMinBalance}
        `)
    }
}

// let accounts = [
//     new Account(001, "Naveen", "savings", 10000, 2000 ),
//     new Account(002, "Santhosh", "Current", 20000, 2000 ),
//     new Account(003, "Kumar", "savings", 1000, 2000 ),
//     new Account(004, "Lucky", "savings", 2000, 2000 )
// ]

// for (let acc of accounts){
//     acc.accountDetails(); 
// }


class Transaction extends Account{
    constructor(AccNumber,AccName, AccType, AccAmount,AccMinBalance){
        super();
        this.AccNumber = AccNumber;
        this.AccName = AccName;
        this.AccType = AccType;
        this.AccAmount = AccAmount;
        this.AccMinBalance = AccMinBalance;
    }

    get accountTransDetails(){

    }

    get accountTransBalance(){
        console.log(`AmountBalance :  ${this.AccAmount}`);
    }

    accountDeposit(){

    }

    accountWidthdrawn(){

    }
}
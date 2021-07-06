class Bank {
  constructor() {
    this._accounts = [];
  }

  static _nextNumber = 0;

  static getNextNumber() {
    return Bank._nextNumber++;
  }

  addAccount() {
    const nextNumber = Bank.getNextNumber();
    const newAccount = new Account(nextNumber);
    this._accounts[nextNumber] = newAccount;

    return nextNumber;
  }

  addSavingsAccount(interest) {
    const nextNumber = Bank.getNextNumber();
    const newAccount = new SavingsAccount(nextNumber, interest);
    this._accounts[nextNumber] = newAccount;

    return nextNumber;
  }

  addCheckingAccount(overdraft) {
    const nextNumber = Bank.getNextNumber();
    const newAccount = new CheckingAccount(nextNumber, overdraft);
    this._accounts[nextNumber] = newAccount;

    return nextNumber;
  }

  closeAccount(number) {
    this._accounts[number] = null;
  }

  accountReport() {
    return this._accounts
      .filter((item) => item !== null)
      .map((item) => item.toString())
      .join("\n");
  }

  endOfMonth() {
    return this._accounts
      .filter((item) => item !== null)
      .map((item) => item.endOfMonth())
      .join("\n");
  }
}

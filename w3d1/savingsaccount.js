class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  setInterest(interest) {
    if (interest < 0)
      throw new RangeError("Interest has to be equal or greater than zero");

    this._interest = interest;
  }

  addInterest() {
    const interest = (this._balance * this._interest) / 100;
    if (interest > 0) super.deposit(interest);

    return interest;
  }

  toString() {
    return "Savings Account " + this._number + ": balance " + this._balance;
  }

  endOfMonth() {
    return (
      "Interest added " + this.toString() + " interest: " + this.addInterest()
    );
  }
}

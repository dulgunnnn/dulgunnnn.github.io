describe("Account tests", () => {
  it("Checking constructor and getNumber()", () => {
    let acc = new Account(100);
    assert.strictEqual(100, acc.getNumber());
  });

  it("Checking getBalance()", () => {
    let acc = new Account(100);
    assert.strictEqual(0, acc.getBalance());
  });

  it("Checking deposit() and withdraw()", () => {
    let acc = new Account(300);
    acc.deposit(10);
    acc.deposit(24);
    acc.withdraw(9);
    acc.deposit(4);
    assert.strictEqual(29, acc.getBalance());
  });

  it("Checking rangeError of deposit()", () => {
    let acc = new Account(10);
    assert.throws(
      () => {
        acc.deposit(0);
      },
      RangeError,
      "Deposit amount has to be greater than zero"
    );
  });

  it("Checking rangeError exception of the withdraw()", () => {
    let acc = new Account(10);
    assert.throws(
      () => {
        acc.withdraw(-10);
      },
      RangeError,
      "Withdraw amount has to be greater than zero"
    );
  });

  it("Checking Error exception of the withdraw()", () => {
    let acc = new Account(10);
    assert.throws(
      () => {
        acc.withdraw(100);
      },
      Error,
      "Insufficient funds"
    );
  });
});

describe("SavingsAccount", () => {
  it("Checking setter and getter methods of Interest", () => {
    let acc = new SavingsAccount(100, 9.8);
    acc.setInterest(7.2);
    assert.strictEqual(7.2, acc.getInterest());
  });

  it("Checking addInterest()", () => {
    let acc = new SavingsAccount(230, 2);
    acc.deposit(200);
    assert.strictEqual(4, acc.addInterest());
    assert.strictEqual(204, acc.getBalance());
  });

  it("Checking endOfMonth()", () => {
    let acc = new SavingsAccount(150, 10);
    acc.deposit(100);
    assert.strictEqual(
      "Interest added Savings Account 150: balance 100 interest: 10",
      acc.endOfMonth()
    );
  });
});

describe("CheckingAccount", () => {
  it("Checking getter and setter methods of over draft limit", () => {
    let acc = new CheckingAccount(100, 240);
    acc.setOverdraftLimit(123);
    assert.strictEqual(123, acc.getOverdraftLimit());
  });

  it("Checking a RangeError exception of setOverdraftLimit()", () => {
    let acc = new CheckingAccount(100, 240);
    assert.throws(
      () => {
        acc.setOverdraftLimit(-10);
      },
      RangeError,
      "Overdraft limit has to be equal or greater than zero"
    );
  });

  it("Checking withdraw()", () => {
    let acc = new CheckingAccount(100, 21);
    acc.withdraw(3);
    acc.deposit(11);

    assert.strictEqual(8, acc.getBalance());
  });

  it("Checking the RangeError exception for zero number", () => {
    assert.throws(
      () => {
        new CheckingAccount(100, 10).withdraw(0);
      },
      RangeError,
      "Withdraw amount has to be greater than zero"
    );
  });

  it("Checking the RangeError exception for negative number", () => {
    assert.throws(
      () => {
        new CheckingAccount(100, 10).withdraw(-1);
      },
      RangeError,
      "Withdraw amount has to be greater than zero"
    );
  });

  it("Checking a Insufficient funds exception", () => {
    assert.throws(
      () => {
        new CheckingAccount(100, 10).withdraw(100);
      },
      Error,
      "Insufficient funds"
    );
  });

  it("Checking endOfMonth()", () => {
    assert.strictEqual(
      "CheckingAccount 100: balance 0: overdraft limit 13",
      new CheckingAccount(100, 13).endOfMonth()
    );
  });
});

describe("Bank", () => {
  it("Checking addAccount()", () => {
    let bank = new Bank();
    bank.addAccount();
    assert.strictEqual(new Account(0).toString(), bank.accountReport());
  });

  it("Checking addSavingsAccount()", () => {
    let bank = new Bank();
    bank.addSavingsAccount(1);
    assert.strictEqual(
      new SavingsAccount(1, 1).toString(),
      bank.accountReport().split("\n")[0]
    );
  });

  it("Checking addCheckingAccount()", () => {
    let bank = new Bank();
    bank.addCheckingAccount(1);
    assert.strictEqual(
      new CheckingAccount(2, 1).toString(),
      bank.accountReport().split("\n")[0]
    );
  });

  it("Checking closeAccount()", () => {
    let bank = new Bank();
    bank.addAccount();
    bank.closeAccount(1);
    bank.closeAccount(1);
    bank.closeAccount(1);
    assert.strictEqual(undefined, bank.accountReport().split("\n")[3]);
  });

  it("Checking accountReport()", () => {
    let bank = new Bank();
    bank.addAccount(1);
    bank.addSavingsAccount(3);
    bank.addCheckingAccount(4);

    assert.strictEqual(
      [new Account(4), new SavingsAccount(5, 0), new CheckingAccount(6, 4)]
        .map((item) => item.toString())
        .join("\n"),
      bank.accountReport()
    );
  });
});

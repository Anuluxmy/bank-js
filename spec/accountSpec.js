describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('Account has a balance when instatiated', function() {
    expect(account.balance).toEqual(0);
  })

  it('User can deposit 1000 to account and change the balance', function() {
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
  });

  it('user can withdraw 500 to account and change the balance', function() {
    account.deposit(1000);
    account.withdraw(500);
    expect(account.balance).toEqual(500);
  });

  it('Account holds a empty array of transaction', function() {
    expect(account.transactions).toEqual([]);
  });

  it('Account deposits are stored in the transactions array', function() {
    account.deposit(1000);
    expect(account.transactions.length).toEqual(1);
  });

  it('Account withdrawals are stored in the transactions array', function() {
    // account.deposit(1000);
    account.withdraw(500);
    expect(account.transactions.length).toEqual(1);
  });




});

function Account() {
  this.balance = 0
  this.transactions= []
  // this.date = date;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
  this.transactions.push({ credit: amount, debit: null, balance: this.balance })
};

Account.prototype.withdraw = function(amount) {
  this.balance -= amount;
  this.transactions.push({ credit: null, debit: amount, balance: this.balance })
};

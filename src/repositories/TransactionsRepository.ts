import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    const { transactions } = this;

    return transactions;
  }

  public getBalance(): Balance {
    const transactionsIncome = this.transactions.filter(
      transaction => transaction.type === 'income',
    );

    const transactionsOutcome = this.transactions.filter(
      transction => transction.type === 'outcome',
    );

    const income = transactionsIncome.reduce(el => el.value);

    const outcome = transactionsOutcome.reduce(el => el.value);

    const total = income - outcome;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;

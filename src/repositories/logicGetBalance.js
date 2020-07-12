const transactions = [
  {
    title: "Salário",
    value: 3000,
    type: "income"
  },
  {
    title: "Salário",
    value: 3000,
    type: "income"
  },
  {
    title: "Salário",
    value: 2000,
    type: "outcome"
  },
  // {
  //   title: "Salário",
  //   value: 500,
  //   type: "outcome"
  // },
]

console.log(transactions);


function getBaleance(){
  const income = transactions
  .filter(transactions => transactions.type === 'income')
  .reduce((sum, current) => {
   return sum + current.value
  }, 0);

const outcome = transactions
  .filter(transactions => transactions.type === 'outcome').reduce((sum, acc) => {return sum + acc.value}, 0);

console.log(outcome);

  return {
    income,
    outcome,
    total: income - outcome
  };
}

const test = [{
  id: 1,
  value: 500
}];


function sum(){
  const sum = test.reduce((sum, acc) => {
    return sum + acc.value
  }, 0);

  return sum;
}

console.log(sum());

console.log(getBaleance());


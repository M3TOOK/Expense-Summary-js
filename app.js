function calculateTotal(expenses) {
  return expenses.reduce((a, b) => a + b.amount, 0);
}

function calculateCategoryTotal(expenses, category) {
  return calculateTotal(
    expenses.filter((expense) => expense.category === category),
  );
}

function findLargestExpense(expenses) {
  return expenses.reduce((a, b) => (a.amount > b.amount ? a : b));
}

function createExpenseSummary(expenses) {
  return {
    total: calculateTotal(expenses),
    foodTotal: calculateCategoryTotal(expenses, "food"),
    transportTotal: calculateCategoryTotal(expenses, "transport"),
    largestExpense: findLargestExpense(expenses),
  };
}

const expenses = [
  { id: 1, category: "food", amount: 24 },
  { id: 2, category: "transport", amount: 15 },
  { id: 3, category: "food", amount: 18 },
  { id: 4, category: "books", amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, "food"));
console.log(calculateCategoryTotal(expenses, "health"));
console.log(findLargestExpense(expenses));

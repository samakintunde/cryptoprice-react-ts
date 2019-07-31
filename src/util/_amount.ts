const roundNumber = (num: string, dp: number = 2) =>
  parseFloat(num).toFixed(dp);

const formatAmount = (amount: number | string) =>
  amount
    .toString()
    .replace(",", "")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
export { formatAmount, roundNumber };

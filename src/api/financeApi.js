import { transactions } from "../data/mockData";



export function fetchTransactions() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(transactions);

    }, 1500);

  });

}
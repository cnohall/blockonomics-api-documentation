export interface API_ENDPOINT {
  name: string;
  url: string;
  method: string;
}

export const API_ENDPOINTS: Record<string, API_ENDPOINT> = {
  BALANCE: {
    name: "Balance",
    url: "https://www.blockonomics.co/api/balance",
    method: "POST",
  },
  SEARCH_HISTORY: {
    name: "Search History",
    url: "https://www.blockonomics.co/api/searchhistory",
    method: "POST",
  },
  TRANSACTION_DETAIL: {
    name: "Transaction Detail",
    url: "https://www.blockonomics.co/api/tx_detail?txid=",
    method: "GET",
  },
};

export const LOCAL_STORAGE_API_KEY = "apiKey";

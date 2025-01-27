import { newAddressNodeJS } from "../codeSnippets/newAddress/NodeJS";
import { newAddressPHP } from "../codeSnippets/newAddress/PHP";
import { newAddressPython } from "../codeSnippets/newAddress/Python";
import { httpCallbackPHP } from "../codeSnippets/httpCallback/PHP";

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
    url: "https://www.blockonomics.co/api/tx_detail?txid=c4978bfc9b4cd632fb37eb5f69c7c686ae364d9cb1b32ec01c0f8bae72530a4e",
    method: "GET",
  },
};

export const LOCAL_STORAGE_API_KEY = "apiKey";

export const MULTIPLE_CODE_SNIPPETS_VARIANTS = {
  NEW_ADDRESS: "New Address",
  HTTP_CALLBACK: "HTTP Callback"
}

export const MULTIPLE_CODE_SNIPPETS_LANGUAGES = {
  PHP: "PHP",
  PYTHON: "Python",
  NODEJS: "NodeJS"
}

export const MULTIPLE_CODE_SNIPPETS_BUTTON_STRINGS_BY_VARIANT = {
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.NEW_ADDRESS]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS,
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.HTTP_CALLBACK]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
  ]
}

export const MULTIPLE_CODE_SNIPPETS_CONTENT_STRINGS_BY_VARIANT = {
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.NEW_ADDRESS]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: newAddressPHP,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON]: newAddressPython,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS]: newAddressNodeJS,
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.HTTP_CALLBACK]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: httpCallbackPHP,
  }
};

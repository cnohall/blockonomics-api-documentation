import { newAddressNodeJs } from "../codeSnippets/newAddress/nodeJs";
import { newAddressPhp } from "../codeSnippets/newAddress/php";
import { newAddressPython } from "../codeSnippets/newAddress/python";
import { httpCallbackPHP } from "../codeSnippets/httpCallback/php";
import { usdtPaymentsCreatePaymentCurl } from "../codeSnippets/usdtPaymentsCreatePayment/curl";
import { usdtPaymentsCreatePaymentPhp } from "../codeSnippets/usdtPaymentsCreatePayment/php";
import { usdtPaymentsCreatePaymentNodeJs } from "../codeSnippets/usdtPaymentsCreatePayment/nodeJs";
import { usdtPaymentsCreatePaymentPython } from "../codeSnippets/usdtPaymentsCreatePayment/python";
import { usdtPaymentsCreatePaymentRuby } from "../codeSnippets/usdtPaymentsCreatePayment/ruby";
import { usdtPaymentsDisplayPaymentHtml } from "../codeSnippets/usdtPaymentsDisplayPayment/html";
import { usdtPaymentsDisplayPaymentCss } from "../codeSnippets/usdtPaymentsDisplayPayment/css";

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
  HTTP_CALLBACK: "HTTP Callback",
  USDT_PAYMENTS_CREATE_PAYMENT: "USDT Payments - Create Payment",
  USDT_PAYMENTS_DISPLAY_PAYMENT: "USDT Payments - Display Payment"
}

export const MULTIPLE_CODE_SNIPPETS_LANGUAGES = {
  CURL: "curl",
  PHP: "PHP",
  PYTHON: "Python",
  NODEJS: "NodeJS",
  RUBY: "Ruby",
  HTML: "HTML",
  CSS: "CSS",
}

export const MULTIPLE_CODE_SNIPPETS_BUTTON_STRINGS_BY_VARIANT = {
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.NEW_ADDRESS]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS,
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.HTTP_CALLBACK]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_CREATE_PAYMENT]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.CURL,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_DISPLAY_PAYMENT]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.HTML,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.CSS
  ]
}

export const MULTIPLE_CODE_SNIPPETS_CONTENT_STRINGS_BY_VARIANT = {
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.NEW_ADDRESS]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: newAddressPhp,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON]: newAddressPython,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS]: newAddressNodeJs,
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.HTTP_CALLBACK]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: httpCallbackPHP,
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_CREATE_PAYMENT]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.CURL]: usdtPaymentsCreatePaymentCurl,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: usdtPaymentsCreatePaymentPhp,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON]: usdtPaymentsCreatePaymentPython,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS]: usdtPaymentsCreatePaymentNodeJs,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY]: usdtPaymentsCreatePaymentRuby
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_DISPLAY_PAYMENT]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.HTML]: usdtPaymentsDisplayPaymentHtml,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.CSS]: usdtPaymentsDisplayPaymentCss
  }
};

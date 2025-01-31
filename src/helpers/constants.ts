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
import { usdtPaymentsTransactionHashPhp } from "../codeSnippets/usdtPaymentsTransactionHash/php";
import { usdtPaymentsTransactionHashPythonFlask } from "../codeSnippets/usdtPaymentsTransactionHash/pythonFlask";
import { usdtPaymentsTransactionHashNodeJsExpress } from "../codeSnippets/usdtPaymentsTransactionHash/nodeJsExpress";
import { usdtPaymentsTransactionHashRubySinatra } from "../codeSnippets/usdtPaymentsTransactionHash/rubySinatra";
import { usdtPaymentsMonitorTransactionCurl } from "../codeSnippets/usdtPaymentsMonitorTransaction/curl";
import { usdtPaymentsMonitorTransactionPhp } from "../codeSnippets/usdtPaymentsMonitorTransaction/php";
import { usdtPaymentsMonitorTransactionPython } from "../codeSnippets/usdtPaymentsMonitorTransaction/python";
import { usdtPaymentsMonitorTransactionNodeJs } from "../codeSnippets/usdtPaymentsMonitorTransaction/nodeJs";
import { usdtPaymentsMonitorTransactionRuby } from "../codeSnippets/usdtPaymentsMonitorTransaction/ruby";
import { usdtPaymentsRecieveCallbackPhp } from "../codeSnippets/usdtPaymentsRecieveCallback/php";
import { usdtPaymentsRecieveCallbackPythonFlask } from "../codeSnippets/usdtPaymentsRecieveCallback/pythonFlask";
import { usdtPaymentsRecieveCallbackNodeJsExpress } from "../codeSnippets/usdtPaymentsRecieveCallback/nodeJsExpress";
import { usdtPaymentsRecieveCallbackRubySinatra } from "../codeSnippets/usdtPaymentsRecieveCallback/rubySinatra";

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
  USDT_PAYMENTS_DISPLAY_PAYMENT: "USDT Payments - Display Payment",
  USDT_PAYMENTS_TRANSACTION_HASH: "USDT Payments - Transaction Hash",
  USDT_PAYMENTS_MONITOR_TRANSACTION: "USDT Payments - Monitor Transaction",
  USDT_PAYMENTS_RECIEVE_CALLBACK: "USDT Payments - Recieve Callback",
};

export const MULTIPLE_CODE_SNIPPETS_LANGUAGES = {
  CURL: "curl",
  PHP: "PHP",
  PYTHON: "Python",
  PYTHON_FLASK: "Python (Flask)",
  NODEJS: "NodeJS",
  NODEJS_EXPRESS: "NodeJS (Express)",
  RUBY: "Ruby",
  RUBY_SINATRA: "Ruby (Sinatra)",
  HTML: "HTML",
  CSS: "CSS",
};

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
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY,
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_DISPLAY_PAYMENT]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.HTML,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.CSS,
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_TRANSACTION_HASH]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON_FLASK,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS_EXPRESS,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY_SINATRA,
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_MONITOR_TRANSACTION]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.CURL,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY,
  ],
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_RECIEVE_CALLBACK]: [
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON_FLASK,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS_EXPRESS,
    MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY_SINATRA,
  ],
};

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
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY]: usdtPaymentsCreatePaymentRuby,
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_DISPLAY_PAYMENT]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.HTML]: usdtPaymentsDisplayPaymentHtml,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.CSS]: usdtPaymentsDisplayPaymentCss,
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_TRANSACTION_HASH]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: usdtPaymentsTransactionHashPhp,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON_FLASK]:
      usdtPaymentsTransactionHashPythonFlask,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS_EXPRESS]:
      usdtPaymentsTransactionHashNodeJsExpress,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY_SINATRA]:
      usdtPaymentsTransactionHashRubySinatra,
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_MONITOR_TRANSACTION]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.CURL]: usdtPaymentsMonitorTransactionCurl,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: usdtPaymentsMonitorTransactionPhp,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON]:
      usdtPaymentsMonitorTransactionPython,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS]:
      usdtPaymentsMonitorTransactionNodeJs,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY]: usdtPaymentsMonitorTransactionRuby,
  },
  [MULTIPLE_CODE_SNIPPETS_VARIANTS.USDT_PAYMENTS_RECIEVE_CALLBACK]: {
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PHP]: usdtPaymentsRecieveCallbackPhp,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.PYTHON_FLASK]:
      usdtPaymentsRecieveCallbackPythonFlask,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.NODEJS_EXPRESS]:
      usdtPaymentsRecieveCallbackNodeJsExpress,
    [MULTIPLE_CODE_SNIPPETS_LANGUAGES.RUBY_SINATRA]:
      usdtPaymentsRecieveCallbackRubySinatra,
  },
};

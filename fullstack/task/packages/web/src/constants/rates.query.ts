import { gql } from "@apollo/client";

export const RATES = gql`
  query ExchangeRate {
  exchangeRate {
    country
    currency
    amount
    code
    rate
  }
}
`;


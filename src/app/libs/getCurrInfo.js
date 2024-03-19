import currencyapi from "@everapi/currencyapi-js";
const API_KEY = "YOUR_API_KEY";

const getCurrencyCode = async () => {
  const currRes = new currencyapi(API_KEY);
  const { data } = await currRes.currencies();

  const res = Object.keys(data);

  return res;
};

const getLatestCurrencyData = async ({ fromCurrencyCode, toCurrencyCode }) => {
  const currRes = new currencyapi(API_KEY);

  const { data } = await currRes.latest({
    base_currency: fromCurrencyCode,
    currencies: toCurrencyCode,
  });

  return data;
};

export { getCurrencyCode, getLatestCurrencyData };

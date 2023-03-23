class ExchangeRateAPI {
    public async get(url: string): Promise<string> {
        const response: Response = await fetch(url);
        return await response.text();
    }
}
export const exchangeRateAPI = new ExchangeRateAPI();
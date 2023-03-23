import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ExchangeRate } from '@cuid/entities';
import { exchangeRateAPI } from '../../api/exchange-rate-api';

@Injectable()
export class ExchangeRateService {

    public getExchangeRates = async () => {
        const rates: ExchangeRate[] = [];

        // TODO: Implement the fetching and parsing of the exchange rates.
        // Use this method in the resolver.
        const result = await exchangeRateAPI.get(process.env.URL_CNB_CZ);
        const lines: string[] = result.split('\n');

        if (lines.length <= 0) throw new NotFoundException('Exchange-rate daily file not found');

        const fields = lines[1].split('|').map(field => field.toLowerCase());

        const exchangeRate = lines.filter((line, index) => line !== '' && index > 1)
            .map(line => fields.reduce((ac, field, index) => {
                const data = line.split('|')
                return {
                    ...ac,
                    [field]: [2, 4].includes(index) ? parseFloat(data[index]) : data[index]
                }
            }, {}));

        Object.keys(exchangeRate).forEach(key => {
            rates.push(exchangeRate[key]);
        });

        return rates;
    };
}

import { Query, Resolver } from '@nestjs/graphql';
import { ExchangeRate } from '@cuid/entities';
import { ExchangeRateService } from './exchange-rate.service';

@Resolver(ExchangeRate)
export class ExchangeRateResolver {
    constructor(private readonly exchangeRateService: ExchangeRateService) { }

    // TODO: Implement a GraphQL Query that returns the exchange rates
    @Query(() => [ExchangeRate], { name: 'exchangeRate' })
    async GetExchangeRate(): Promise<ExchangeRate[]> {
        return await this.exchangeRateService.getExchangeRates();
    }
}

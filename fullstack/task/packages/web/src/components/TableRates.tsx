import { useQuery } from '@apollo/client';
import { TableRatesRow } from './TableRatesRow';
import { TablesRatesHead } from './TablesRatesHead';
import { RATES } from '../constants/rates.query';
import { ExchangeRate } from '../interfaces/exchange-rate.interface';
import { LoadingBar } from './LoadingBar';
import { ErrorBar } from './ErrorBar';

export const TableRates = () => {
    const { loading, error, data } = useQuery(RATES);
    if (loading) return <LoadingBar />;
    if (error) return <ErrorBar />;
    return (
        <table className="table table-striped table-hover">
            <TablesRatesHead />
            <tbody>
                {data?.exchangeRate?.map((rateItem: ExchangeRate) => (
                    <TableRatesRow key={rateItem.code} rateItem={rateItem} />
                ))}
            </tbody>
        </table>
    );
};

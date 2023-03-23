export const TableRatesRow = ({ rateItem }: any) => {
    const { country, currency, amount, code, rate } = rateItem;
    return (
        <tr key={country}>
            <td scope="row">{country}</td>
            <td>{currency}</td>
            <td className="d-none d-md-table-cell">{amount}</td>
            <td className="d-none d-lg-table-cell">{code}</td>
            <td className="d-none d-lg-table-cell">{rate}</td>
        </tr>
    );
};

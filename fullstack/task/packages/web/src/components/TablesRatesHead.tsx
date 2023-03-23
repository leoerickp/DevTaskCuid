export const TablesRatesHead = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Country</th>
                <th scope="col">Currency</th>
                <th scope="col" className="d-none d-md-table-cell">
                    Amount
                </th>
                <th scope="col" className="d-none d-lg-table-cell">
                    Code
                </th>
                <th scope="col" className="d-none d-lg-table-cell">
                    Rate
                </th>
            </tr>
        </thead>
    );
};

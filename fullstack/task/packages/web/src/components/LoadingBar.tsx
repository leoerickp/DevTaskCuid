import { Spinner } from './Spinner';

export const LoadingBar = () => {
    return (
        <div className="d-flex gap-2">
            <Spinner />
            <p>Loading...</p>
        </div>
    );
};

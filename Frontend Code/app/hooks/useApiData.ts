import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

interface ApiResponse<T> {
    status: 'success' | 'error';
    data: T;
    message?: string;
}

const useApiData = <T = any>(
    endpoint: string,
    dataMapper: (data: ApiResponse<T>) => any = (data) => data
) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ApiResponse<T>>(`${API_BASE_URL}${endpoint}`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
                });

                const raw = response.data;

                if (raw?.status === 'success' && raw?.data) {
                    setData(dataMapper(raw));
                    setError(null);
                } else {
                    throw new Error(raw?.message || 'Unexpected response structure');
                }
            } catch (err: any) {
                setError(`Error fetching data from ${endpoint}: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, dataMapper]);

    return { data, loading, error };
};

export default useApiData;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { incrementPage, setCompanies } from '../store/slices/companySlice';
import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../config/config';

export const useCompany = () => {
	const dispatch = useDispatch();
	const { companies, page } = useSelector((state: RootState) => state.companies);
	const [fetching, setFetching] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchCompanies = async () => {
			if (fetching) {
				setLoading(true);
				try {
					const response = await axios.get(
						`${API_BASE_URL}${ENDPOINTS.COMPANIES}?page=${page}`
					);
					const { data } = response;
					dispatch(setCompanies([...companies, ...data.items]));
					dispatch(incrementPage());
				} catch (error) {
					console.error('Error fetching companies:', error);
				} finally {
					setLoading(false);
					setFetching(false);
				}
			}
		};

		fetchCompanies();
	}, [fetching]);

	return { companies, loading, setFetching };
};
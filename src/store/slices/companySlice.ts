import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Company } from '../../types/company';

interface CompaniesState {
	companies: Company[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: CompaniesState = {
	companies: [],
	status: 'idle',
	error: null,
};

// Создаем асинхронный thunk для загрузки данных с API
export const fetchCompanies = createAsyncThunk(
	'companies/fetchCompanies',
	async () => {
		const response = await axios.get('https://dd6b73fe40abba67.mokky.dev/companыies');
		return response.data
	}
);

const companySlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		selectCompany: (state, action: PayloadAction<number>) => {
			const company = state.companies.find((c) => c.id === action.payload);
			if (company) company.isSelected = !company.isSelected;
		},
		selectAllCompanies: (state, action: PayloadAction<boolean>) => {
			state.companies.forEach((company) => {
				company.isSelected = action.payload;
			});
		},
		addCompany: (state, action: PayloadAction<Omit<Company, 'id' | 'isSelected'>>) => {
			const newId = state.companies.length ? Math.max(...state.companies.map(c => c.id)) + 1 : 1;
			state.companies.push({ ...action.payload, id: newId, isSelected: false });
		},
		removeSelectedCompanies: (state) => {
			state.companies = state.companies.filter((company) => !company.isSelected);
		},
		updateCompany: (
			state,
			action: PayloadAction<{ id: number; name: string; address: string }>
		) => {
			const company = state.companies.find((c) => c.id === action.payload.id);
			if (company) {
				company.name = action.payload.name;
				company.address = action.payload.address;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCompanies.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCompanies.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.companies = action.payload; // сохраняем данные
			})
			.addCase(fetchCompanies.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to load companies';
			});
	},
});

export const { selectCompany, selectAllCompanies, addCompany, removeSelectedCompanies, updateCompany } = companySlice.actions;

export default companySlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../../data/companies.json';
import { Company } from '../../types/company';

interface CompaniesState {
	companies: Company[];
}

const initialState: CompaniesState = {
	companies: data.companies as Company[],
};

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
			const newId = state.companies.length ? Math.max(...state.companies.map(c => c.id)) + 1 : 1; // Генерация нового ID
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
});

export const { selectCompany, selectAllCompanies, addCompany, removeSelectedCompanies, updateCompany } = companySlice.actions;

export default companySlice.reducer;
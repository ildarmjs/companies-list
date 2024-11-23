import { useState } from 'react';

export const useEditableCompany = () => {
	const [editingNameId, setEditingNameId] = useState<number | null>(null);
	const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
	const [editedName, setEditedName] = useState('');
	const [editedAddress, setEditedAddress] = useState('');

	return {
		editingNameId,
		editingAddressId,
		editedName,
		editedAddress,
		setEditingNameId,
		setEditingAddressId,
		setEditedName,
		setEditedAddress,
	};
};
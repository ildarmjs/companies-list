import React from 'react'
import styles from '../../Table.module.scss'
import Textarea from '../../../ui/textarea/Textarea'
import Icon from '../../../ui/icon/Icon'

interface ITableEditFieldProps {
	value: string
	onChange: (value: string) => void
	onSave: () => void
	isEditing: boolean
	onEdit: () => void
}

const TableEditField: React.FC<ITableEditFieldProps> = ({
	value,
	onChange,
	onSave,
	isEditing,
	onEdit
}) => {
	return isEditing ? (
		<div className={styles.infoEdit}>
			<Textarea value={value} onChange={e => onChange(e.target.value)} />
			<Icon src='/images/save-icon.png' onClick={onSave} />
		</div>
	) : (
		<div className={styles.info}>
			<div>{value}</div>
			<Icon src='/images/edit-icon.png' onClick={onEdit} />
		</div>
	)
}

export default TableEditField

import { ChangeEvent, FC, useEffect, useRef } from 'react'
import styles from './Textarea.module.scss'

interface ITextareaProps {
	value: string
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: FC<ITextareaProps> = ({ value, onChange }) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (textareaRef.current) {
			// Сбрасываем высоту перед измерением
			textareaRef.current.style.height = 'auto'
			// Устанавливаем высоту равной содержимому
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
		}
	}, [value])
	return (
		<div className={styles.container}>
			<textarea
				className={styles.textarea}
				value={value}
				onChange={onChange}
			></textarea>
		</div>
	)
}

export default Textarea

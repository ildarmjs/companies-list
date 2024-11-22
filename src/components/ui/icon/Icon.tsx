import { FC } from 'react'
import styles from './Icon.module.scss'
interface IIconProps {
	src: string
	onClick: () => void
}

const Icon: FC<IIconProps> = ({ src, onClick }) => {
	return (
		<div className={styles.imageBlock}>
			<img width={20} src={src} alt='Иконка' onClick={onClick} />
		</div>
	)
}

export default Icon

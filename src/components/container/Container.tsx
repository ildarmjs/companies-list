import type { PropsWithChildren } from 'react'
import styles from './Container.module.scss'
const Container = ({ children }: PropsWithChildren<unknown>) => {
	return <div className={styles.container}>{children}</div>
}

export default Container

import { CSSProperties, FC, ReactNode } from 'react'
import styles from './index.module.css'

interface IPros {
  icon: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const IconButton: FC<IPros> = ({ style, icon, onClick }) => {
  return (
    <div className={styles["icon-button"]} style={style} onClick={onClick}>
      {icon}
    </div>
  )
}

export default IconButton;
import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarPros extends ImgHTMLAttributes<HTMLImageElement> {
    border?: boolean,
}

export function Avatar({ border = true, ...props }: AvatarPros) {
    return (
        <img
            className={border ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}
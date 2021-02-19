import React from 'react'
import Logo from '../../assets/Logo.svg'
import { Button } from './styles'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton = ({
    selected,
    isHome, 
    hasNotifications, 
    mentions
}: Props) => {
    return <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        selected={selected}
        className={selected ? 'active' : ''}
    >
        {isHome && <img src={Logo} alt='Rocketseat' />}
    </Button>
}

export default ServerButton



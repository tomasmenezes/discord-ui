import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import '../../styles/tippystyle.css'

import Logo from '../../assets/Logo.svg'
import { Button } from './styles'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    serverName?: string;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton = ({
    selected,
    isHome, 
    serverName,
    hasNotifications, 
    mentions
}: Props) => {
    return (
        <Tippy 
            content={serverName ? serverName : 'Default'} 
            inertia={true}
            placement={'right'}
            animation={'scale-subtle'}
            offset={[0,20]}
            duration={75}
            theme={'discord'}
        >
            <Button
                isHome={isHome}
                hasNotifications={hasNotifications}
                mentions={mentions}
                selected={selected}
                className={selected ? 'active' : ''}
            >
                {isHome && <img src={Logo} alt='Rocketseat' />}
            </Button>
        </Tippy>
    )
}

export default ServerButton



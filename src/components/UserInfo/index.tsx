import React from 'react'
import Tippy, { tippy } from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import '../../styles/tippyStyle.css'

import { Container, Profile, Avatar, UserData, Icons, SmallButton, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'

tippy.setDefaultProps({
    inertia:true,
    placement:'top',
    animation:'scale-subtle',
    offset:[0,15],
    duration:75,
    theme:'discord'
})

export interface StatusProps {
    status?: string;
}

const UserInfo = ({ status }: StatusProps) => {
    return (
        <Container>
            <Profile>
                <Avatar>
                    <div className={status}></div>
                </Avatar>
                <UserData>
                    <strong>Username</strong>
                    <span>#2689</span>
                </UserData>
            </Profile>

            <Icons>
                <Tippy content={'Mute'} >
                    <SmallButton>
                        <MicIcon />
                    </SmallButton>
                </Tippy>
                
                <Tippy content={'Deafen'} >
                    <SmallButton>
                        <HeadphoneIcon />
                    </SmallButton>
                </Tippy>

                <Tippy content={'User Settings'} >
                    <SmallButton>
                        <SettingsIcon />
                    </SmallButton>
                </Tippy>                    
            </Icons>
        </Container>
    );
}

export default UserInfo

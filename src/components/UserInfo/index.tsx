import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import '../../styles/tippyStyle.css'

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'

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
                <Tippy 
                    content={'Mute'} 
                    inertia={true}
                    placement={'top'}
                    animation={'scale-subtle'}
                    offset={[0,15]}
                    duration={75}
                    theme={'discord'}
                >
                    <MicIcon />
                </Tippy>
                
                <Tippy 
                    content={'Deafen'} 
                    inertia={true}
                    placement={'top'}
                    animation={'scale-subtle'}
                    offset={[0,15]}
                    duration={75}
                    theme={'discord'}
                >
                    <HeadphoneIcon />
                </Tippy>

                <Tippy 
                    content={'User Settings'} 
                    inertia={true}
                    placement={'top'}
                    animation={'scale-subtle'}
                    offset={[0,15]}
                    duration={75}
                    theme={'discord'}
                >
                    <SettingsIcon />
                </Tippy>                    
            </Icons>
        </Container>
    );
}

export default UserInfo

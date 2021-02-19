import React from 'react'

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
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
}

export default UserInfo

import React from 'react'

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
    channelName: string;
    selected?: boolean;
    notifications?: number;
}

const ChannelButton = ({ channelName, selected, notifications }: Props) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{channelName}</span>
            </div>
            <div className="channelTools">
                <InviteIcon />
                <SettingsIcon />
                {notifications && <span>{notifications}</span>}
            </div>
        </Container>
    );
}

export default ChannelButton

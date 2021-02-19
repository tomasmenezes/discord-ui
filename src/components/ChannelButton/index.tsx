import React from 'react'

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton = ({ channelName, selected }: Props) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{channelName}</span>
            </div>
            <div className="channelTools">
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    );
}

export default ChannelButton

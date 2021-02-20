import React from 'react'

import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList = () => {
    return (
        <Container>
            <Category>
                <span>Text channels</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="free-chat" selected notifications={32} />
            <ChannelButton channelName="work" />
            <ChannelButton channelName="random" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="memes" notifications={7} />
        </Container>
    );
}

export default ChannelList

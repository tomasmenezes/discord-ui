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

            <ChannelButton channelName="free-chat" selected />
            <ChannelButton channelName="work" />
            <ChannelButton channelName="random" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />
        </Container>
    );
}

export default ChannelList

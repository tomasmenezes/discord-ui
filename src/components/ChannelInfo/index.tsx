import React from 'react'
import { Container, HashtagIcon, Title, Separator, Description } from './styles'

const ChannelInfo = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>Free chat</Title>
            <Separator />
            <Description>Channel open for chat</Description>
        </Container>
    );
}

export default ChannelInfo

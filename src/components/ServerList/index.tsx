import React from 'react';

import ServerButton from '../ServerButton'
import { Container, Separator } from './styles';

const ServerList = () => {
    return (
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton selected />
            <ServerButton mentions={72} />
            <ServerButton />
        </Container>
    )
};

export default ServerList

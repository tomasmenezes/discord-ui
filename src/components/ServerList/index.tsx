import React from 'react';

import ServerButton from '../ServerButton'
import { Container, Separator } from './styles';

const ServerList = () => {
    return (
        <Container>
            <ServerButton isHome serverName={'Home'} />
            <Separator />
            <ServerButton />
            <ServerButton hasNotifications serverName={'Editing'} />
            <ServerButton mentions={3} serverName={'Gaming'} />
            <ServerButton />
            <ServerButton />
            <ServerButton selected serverName={'Noob server'} />
            <ServerButton mentions={72} />
            <ServerButton />
        </Container>
    )
};

export default ServerList

import React from 'react'

import { Grid } from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import UserList from '../UserList'

const Layout = () => {
    return <Grid>
        <ServerList />
        <ServerName />
        <ChannelInfo />
        <ChannelList />
        <UserInfo status='busy' />
        <UserList />
    </Grid>
}

export default Layout

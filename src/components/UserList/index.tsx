import React from 'react'
import { Container, User, Avatar, Role } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow = ({ nickname, isBot }: UserProps) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User> 
    )
}

const UserList = () => {
    return (
        <Container>
            <Role>Available - 1</Role>
            <UserRow nickname="Username" />
            
            <Role>Offline - 3</Role>
            <UserRow nickname="User-bot" isBot />
            <UserRow nickname="ReallyLongUsernameShouldOverflow" />
            <UserRow nickname="Player3" />
        </Container>
    );
}

export default UserList

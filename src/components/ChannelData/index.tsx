import React, { useRef, useEffect } from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    // key={n}
                    author="Username"
                    date="21/06/2020"
                    content="Today is my birthday!"
                />

                <ChannelMessage 
                    // key={n}
                    author="User-bot"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Username</Mention>, can you restart CS?
                        </>
                    }
                    hasMention
                    isBot
                />

                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="Default message to enable scroll behavior"
                />
                <ChannelMessage 
                    author="ReallyLongUsernameOverflow"
                    date="21/06/2020"
                    content="Buy GME!"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="To the moon!!!"
                />
                <ChannelMessage 
                    author="Player3"
                    date="21/06/2020"
                    content="Don't forget about AMC boys"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Player3"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="User-bot"
                    date="21/06/2020"
                    content="lol"
                    isBot
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
                <ChannelMessage 
                    author="Username"
                    date="21/06/2020"
                    content="lol"
                />
            </Messages> 
            
            <InputWrapper>
                <Input type="text" placeholder="Chat in #free-chat" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData

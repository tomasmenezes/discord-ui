import styled from "styled-components";
import { AlternateEmail } from 'styled-icons/material'

export const Container = styled.div`
    grid-area: CD;

    display:flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--primary);
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 0;

    max-height: calc(100vh - 46px - 68px); // Viewport - topnav - message input
    overflow-y: scroll;

    // transition: opacity .2s;

    /* &:hover {
        ::-webkit-scrollbar-thumb {
            opacity: 1;
        }
    } */

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
        // opacity: 0;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--quaternary);
        // opacity: 0;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;

    padding: 0 10px 0 56px;

    border-radius: 7px;

    color: var(--white);
    background-color: var(--chat-input);

    position: relative;

    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    }
`;

export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;
    
    color: var(--gray);
`;
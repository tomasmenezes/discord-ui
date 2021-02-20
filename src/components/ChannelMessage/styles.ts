import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 4px 16px;
    // margin-right: 4px;

    background-color: transparent;
    border-radius: 0 2px 2px 0;

    &:hover {
        background-color: #33353A;
    }

    &.mention {
        background-color: var(--mention-message);

        border-left: 2px solid var(--mention-detail);
        padding-left: 14px;
    }

    & + div {
        margin-top: 13px;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;

    flex-shrink: 0;

    background-color: var(--secondary);
    border-radius: 50%;

    &.bot {
        background-color: var(--mention-detail);
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 40px;

    margin-left: 17px;
`;

export const Header = styled.div`
    display: flex;
    align-items: baseline;

    > strong {
        color: var(--white);
        font-size: 1rem; // 16px
        font-weight: 500;
        line-height: 1.375rem;
    }

    > span {
        align-self: center;
        margin-left: 6px;
        
        background-color: var(--discord);
        color: var(--white);
        border-radius: 4px;
        padding: 4px 5px;

        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
    }

    > time {
        margin-left: 6px;
        
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Content = styled.div`
    text-align: left;
    font-size: 1rem; // 16px
    line-height: 1.375rem;

    color: #DCDDDE;// var(--white)
`;

export const Mention = styled.span`
    color: var(--link);
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const MentionToken = styled.span`
    background-color: #7289DA1A;
    border-radius: 3px;
    
    padding: 0 2px;
    
    font-weight: 500;
    color: var(--link);
    cursor: pointer;

    transition: 180ms ease-in-out;

    &:hover {
        background-color: var(--link);
        color: var(--white);
    }
`;
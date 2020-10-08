import React from 'react'
import { useDispatch } from 'react-redux'
import { sortIsDone, showActive, fetchNotes } from '../../Redux/noteReducer'
import styled from 'styled-components'

const SortStyle = styled.div`
display: flex;
margin-bottom: 5px;

`
const LinkItems = styled.div`
margin-left: 1rem;

a {
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
}


`
export const Sort = () => {

    const dispatch = useDispatch()

    const showIsDone = () => {
        dispatch(sortIsDone())
    }
    const showAllNotes = () => {
        dispatch(fetchNotes())
    }
    const showActiveNotes = () => {
        dispatch(showActive())
    }
    return (
        <SortStyle>
            <span>filter:</span>
            <LinkItems>
            <a href="#s" onClick={() => showAllNotes()}>All</a>
            <a href="#s" onClick={() => showActiveNotes()}>Active</a>
            <a href="#s" onClick={() => showIsDone()}>Done</a>
            </LinkItems>
      </SortStyle>
    )
}
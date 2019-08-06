import React from 'react';
import styled from "styled-components";




const Info = styled.h2`
    color: white;
    background-color: black;
    border: 2px solid yellow;
    width: 400px;
    display: flex;

`

const PeopleCard = props => {
    const people = props.name;
    //const mass = props.mass;
    return (
        <>
            <Info>name: {people} </Info>
            {/* <Info>mass: {mass} </Info> */}
        </>
    );
};


export default PeopleCard;
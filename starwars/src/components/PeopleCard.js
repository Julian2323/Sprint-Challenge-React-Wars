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
    //const people = props.name;
    //const mass = props.mass;
    //console.log(props.name)
    return (
        <>
            <div>
                <Info>name: {props.name} </Info>
            </div>
            <div>
                <Info>mass: {props.mass} </Info>
            </div>
            <div>
                <Info>height: {props.height} </Info>
            </div>
            <div>
                <Info>hair_color: {props.hair_color} </Info>
            </div>
        </>
    );
};


export default PeopleCard;
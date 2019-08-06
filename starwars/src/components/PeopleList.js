import React, { useState, useEffect } from 'react';
//import PeopleCard from './PeopleCard';
import axios from 'axios';
import PeopleCard from './PeopleCard';
//import styled from "styled-components";


const PeopleList = () => {
    //const [name, setName] = useState([]);
    const [people, setPeople] = useState([]);
    //const [mass, setMass] = useState([]);



    useEffect(() => {
        axios
        .get("https://swapi.co/api/people")
        .then((res) => {
            setPeople(res.data);
            //setMass(res.data.mass);
            console.log(res.data);
            //console.log(mass);
        })
        .catch(err => {
            console.log(err);
        });
    },[people])


    return (
        <div>
            <PeopleCard name={people}  />
        </div>
    )

    };
export default PeopleList;
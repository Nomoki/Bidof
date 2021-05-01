import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

export const Toy = ({catChange, setCatChange}) => {

    return (
    <>
    {catChange ? (
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange(!catChange)}>
    back
    </Button>
    ):  
    null} 
    </>
    )
}

export const Elect = ({catChange2, setCatChange2}) => {
    return (
    <>
    {catChange2 ? (
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange2(!catChange2)}>
    back2
    </Button>
    ):  
    null} 
    </>
    )
}

export const Food = ({catChange3, setCatChange3}) => {
    return (
    <>
    {catChange3 ? (
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange3(!catChange3)}>
    back3
    </Button>
    ):  
    null} 
    </>
    )
}

export const Fasions = ({catChange4, setCatChange4}) => {
    return (
    <>
    {catChange4 ? (
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange4(!catChange4)}>
    back4
    </Button>
    ):  
    null} 
    </>
    )
}

export const Automotive = ({catChange5, setCatChange5}) => {
    return (
    <>
    {catChange5 ? (
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange5(!catChange5)}>
    back5
    </Button>
    ):  
    null} 
    </>
    )
}

export const Books = ({catChange6, setCatChange6}) => {
    return (
    <>
    {catChange6 ? (
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange6(!catChange6)}>
    back6
    </Button>
    ):  
    null} 
    </>
    )
}
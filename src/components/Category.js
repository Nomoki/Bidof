import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

export const Toy = ({catChange, setCatChange}) => {

    return (
    <>
    {catChange ? (
    <div className="btncat">
    <Button variant="secondary" size="lg" className="btnbox" >
    detail
    </Button>
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange(!catChange)}>
    back
    </Button>
    </div>
    ):  
    null} 
    </>
    )
}

export const Elect = ({catChange2, setCatChange2}) => {
    return (
    <>
    {catChange2 ? (
     <div className="btncat">
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange2(!catChange2)}>
    back2
    </Button>
    </div>
    ):  
    null} 
    </>
    )
}

export const Food = ({catChange3, setCatChange3}) => {
    return (
    <>
    {catChange3 ? (
     <div className="btncat">
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange3(!catChange3)}>
    back3
    </Button>
    </div>
    ):  
    null} 
    </>
    )
}

export const Fasions = ({catChange4, setCatChange4}) => {
    return (
    <>
    {catChange4 ? (
    <div className="btncat">
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange4(!catChange4)}>
    back4
    </Button>
    </div>
    ):  
    null} 
    </>
    )
}

export const Automotive = ({catChange5, setCatChange5}) => {
    return (
    <>
    {catChange5 ? (
     <div className="btncat">
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange5(!catChange5)}>
    back5
    </Button>
    </div>
    ):  
    null} 
    </>
    )
}

export const Books = ({catChange6, setCatChange6}) => {
    return (
    <>
    {catChange6 ? (
     <div className="btncat">
    <Button variant="secondary" size="lg" className="btnbox" onClick={() => setCatChange6(!catChange6)}>
    back6
    </Button>
    </div>
    ):  
    null} 
    </>
    )
}
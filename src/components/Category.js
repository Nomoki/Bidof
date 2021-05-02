import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

export const Toy = ({ catChange, setCatChange }) => {

    return (
        <React.Fragment>
            {catChange ? (
                <div className="btncat1">
                    <h3>TOYS</h3>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Action figures</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Electronic toys</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Creative toys</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Physical activity and dexterity</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Executive toys</h1>
                    </Button>
                    <Button variant="Executive toysecondary" size="lg" className="btnbox" onClick={() => setCatChange(!catChange)}>
                        back
    </Button>
                </div>
            ) :
                null}
        </React.Fragment>
    )
}

export const Elect = ({ catChange2, setCatChange2 }) => {
    return (
        <React.Fragment>
            {catChange2 ? (
                <div className="btncat1">
                    <h3>ELECTRONIC</h3>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Computer & Accessories</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">TV & Video</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Smart Home</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Photography & Videography</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Cell Phones & Accessories</h1>
                    </Button>
                    <Button variant="Executive toysecondary" size="lg" className="btnbox" onClick={() => setCatChange2(!catChange2)}>
                        back
                    </Button>
                </div>
            ) :
                null}
        </React.Fragment>
    )
}

export const Food = ({ catChange3, setCatChange3 }) => {
    return (
        <React.Fragment>
            {catChange3 ? (
                <div className="btncat1">
                    <h3>Food & Beverage</h3>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Carbohydrate-rich food  </h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Fruit & Vegetable</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Heavy snack</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Light snack</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Alcohol</h1>
                    </Button>
                    <Button variant="Executive toysecondary" size="lg" className="btnbox" onClick={() => setCatChange3(!catChange3)}>
                        back
                    </Button>
                </div>
            ) :
                null}
        </React.Fragment>
    )
}

export const Fasions = ({ catChange4, setCatChange4 }) => {
    return (
        <React.Fragment>
            {catChange4 ? (
                <div className="btncat1">
                    <h3>Fashion</h3>
                    <h3>MEN</h3>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Men's Wear</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Men's Bags</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Watches</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Jewellery & Accessories</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Beauty & Personal Care</h1>
                    </Button>
                    <h3>WOMEN</h3>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Women'Apparel</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Women's Bags</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Watches</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Jewellery & Accessories</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Beauty & Personal Care</h1>
                    </Button>
                    <Button variant="Executive toysecondary" size="lg" className="btnbox" onClick={() => setCatChange4(!catChange4)}>
                        back
                    </Button>
                </div>
            ) :
                null}
        </React.Fragment>
    )
}

export const Automotive = ({ catChange5, setCatChange5 }) => {
    return (
        <React.Fragment>
            {catChange5 ? (
                <div className="btncat1">
                    <h3>Automotive</h3>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Car accessories</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Car care</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Car oil & Fluids</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Car electronics</h1>
                    </Button>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Services & Installation</h1>
                    </Button>   
                    <Button variant="Executive toysecondary" size="lg" className="btnbox" onClick={() => setCatChange5(!catChange5)}>
                        back
                    </Button>
                </div>
            ) :
                null}
        </React.Fragment>
    )
}

export const Books = ({ catChange6, setCatChange6 }) => {
    return (
        <React.Fragment>
            {catChange6 ? (
                <div className="btncat1">
                    <h3>BOOKS</h3>
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Dystopian</h1>
                    </Button>   
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Historical fiction</h1>
                    </Button>   
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Memoir</h1>
                    </Button>   
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Paranormal</h1>
                    </Button>   
                    <Button variant="secondary" size="lg" className="btnboxcat1" >
                        <h1 className="fontcat">Science fiction</h1>
                    </Button>   
                    <Button variant="Executive toysecondary" size="lg" className="btnbox" onClick={() => setCatChange6(!catChange6)}>
                        back
                    </Button>
                </div>
            ) :
                null}
        </React.Fragment>
    )
}
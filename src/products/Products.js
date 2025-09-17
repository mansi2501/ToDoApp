import React, { useEffect, useState } from 'react';
import Cards from "../component/Cards";

function Products() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(json => {
                setData(json.recipes)
            }
            );
    }, [])

    return (
        <>
            <div className='text-center'>
                <h1 className="text-decoration-underline text-success">Photo Gallary</h1>
            </div>

            {console.log("data", data[0])}
            {data.map((item, index) => (
                <>
                    <Cards id={index} name={item.name} src={item.image} />
                </>

            ))}

        </>
    );
}

export default Products;
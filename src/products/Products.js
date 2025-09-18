import { useEffect, useState } from 'react';
import Cards from "../component/Cards";
import { Container, Row, Col } from 'react-bootstrap';

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
                <h1 className="text-decoration-underline text-success pb-3">Photo Gallary</h1>
            </div>

            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col key={item.id} lg={4} md={4} sm={6} xs={12} className="mb-4">
                            <Cards id={index} name={item.name} src={item.image} inst={item.instructions} rating={item.rating} review={item.reviewCount} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
}

export default Products;
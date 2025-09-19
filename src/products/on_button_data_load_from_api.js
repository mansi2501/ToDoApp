import { useEffect, useState } from 'react';
import Cards from "../component/Cards";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Products() {

    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]); // shown recipes
    const [count, setCount] = useState(10);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(json => {
                setData(json.recipes)
                setVisibleData(json.recipes.slice(0, 10));
            }
            );
    }, [])

    const loadMore = () => {
        const newCount = count + 10;
        setVisibleData(data.slice(0, newCount));
        setCount(newCount);
    };

    return (
        <>
            <div className='text-center'>
                <h1 className="text-decoration-underline text-success pb-3">Photo Gallary</h1>
            </div>

            <Container>
                <Row>
                    {visibleData.map((item, index) => (
                        <Col key={item.id} lg={4} md={4} sm={6} xs={12} className="mb-4">
                            <Cards id={index} name={item.name} src={item.image} inst={item.instructions} rating={item.rating} review={item.reviewCount} />
                        </Col>
                    ))}
                </Row>

                {/* Show button only if more items exist */}
                {count < data.length && (
                    <div className="text-center mt-3">
                        <Button onClick={loadMore} variant="success">
                            Load More
                        </Button>
                    </div>
                )}
            </Container>

        </>
    );
}

export default Products;
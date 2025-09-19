import { useEffect, useState, useRef } from 'react';
import Cards from "../component/Cards";
import { Container, Row, Col, Spinner } from 'react-bootstrap';

function Products() {
    const [allData, setAllData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [count, setCount] = useState(5);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(json => {
                setAllData(json.recipes);
                setVisibleData(json.recipes.slice(0, 5));
            });
    }, []);

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && count < allData.length) {
                    loadMore();
                }
            },
            { threshold: 1 } // trigger when loader fully visible
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [count, allData]);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            const newCount = count + 5;
            setVisibleData(allData.slice(0, newCount));
            setCount(newCount);
            setLoading(false);
        }, 1000); // simulate delay
    };

    return (
        <>
            <div className='text-center'>
                <h1 className="text-decoration-underline text-success pb-3">
                    Photo Gallery
                </h1>
            </div>

            <Container>
                <Row>
                    {visibleData.map((item, index) => (
                        <Col key={item.id} lg={4} md={4} sm={6} xs={12} className="mb-4">
                            <Cards
                                id={index}
                                name={item.name}
                                src={item.image}
                                inst={item.instructions}
                                rating={item.rating}
                                review={item.reviewCount}
                            />
                        </Col>
                    ))}
                </Row>

                {/* Loader div (observer target) */}
                <div ref={loaderRef} className="text-center">
                    {loading && <Spinner animation="border" variant="success" />}
                </div>
            </Container>
        </>
    );
}

export default Products;

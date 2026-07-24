import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function Home() {

    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {

        fetch(`http://98.93.119.171:8000/api/v1/products?${searchParams}`)
            .then(res => res.json())
            .then(res => {
                setProducts(res.products);
            })
            .catch(error => {
                console.log(error);
            });

    }, [searchParams]);


    return (
        <Fragment>

            <h1 id="products_heading">
                Latest Products
            </h1>


            <section id="products" className="container mt-5">

                <div className="row">

                    {
                        products.map(product => (
                            <ProductCard 
                                key={product._id}
                                product={product}
                            />
                        ))
                    }

                </div>

            </section>

        </Fragment>
    )
}

import React, { lazy, Suspense, useState } from 'react';
//import Lazy from "../lazy/Lazy";

const Lazy = lazy(() => import("../lazy/Lazy"))

function LazyComponent() {

    const [load, setLoad] = useState(false);

    return (
        <>
            <div className='text-center'>
                <h1 className="text-decoration-underline text-success pb-3">
                    Lazy loading
                </h1>
            </div>

            <p className='text-center'>
                This is a lazily loaded component!
            </p>
            <button className="col-1 btn btn-success h-50 mt-3 mx-2" type="submit" onClick={() => setLoad(true)}>lazy loading</button>

            {load ? <Suspense fallback={<h3>Loading....</h3>}><Lazy /></Suspense> : null}
        </>
    );
}

export default LazyComponent;
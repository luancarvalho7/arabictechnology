import { Hero } from "../../components/hero/hero"
import { Cta } from "../../components/cta/cta"
import { Proof } from "../../components/proof/proof"
import { Benefits } from "../../components/Benefits/benefits"
import { Method } from "../../components/method/method"
import { Bonus } from "../../components/bonus/bonus"
import { Guarantee } from "../../components/guarantee/guarantee"
import { Qa } from "../../components/qa/qa"
import { Footer } from "../../components/footer/footer"

import React, { useState, useEffect } from 'react';
import { Comments } from "../../components/comments/comments"

export function Delayed() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log(isLoaded)
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 187200);
        console.log(isLoaded)

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Hero />
            
            {isLoaded && (
                <>
                    <Cta mobilePrice={false} />
                    <Proof />
                    <Benefits />
                    <Method />
                    <Bonus />
                    <Guarantee />
                    <Qa />
                </>
            )}
            <Comments />
            <Footer />


        </>)
}
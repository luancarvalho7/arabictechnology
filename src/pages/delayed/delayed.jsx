import { Hero } from "../../components/hero/hero"
import { Cta } from "../../components/cta/cta"
import { Benefits } from "../../components/Benefits/benefits"
import { Method } from "../../components/method/method"
import { Bonus } from "../../components/bonus/bonus"
import { Guarantee } from "../../components/guarantee/guarantee"
import { Qa } from "../../components/qa/qa"
import { Footer } from "../../components/footer/footer"

import React, { useState, useEffect } from 'react';

export function Delayed() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log(isLoaded)
        const timer = setTimeout(() => {
            setIsLoaded(true);
            localStorage.setItem('ctaShown', 'true');
        }, 480000);
        console.log(isLoaded)

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Hero />
            
            {(isLoaded || localStorage.getItem('ctaShown') === 'true') && (
                <>
                    <Cta mobilePrice={false} />
                    <Benefits />
                    <Method />
                    <Bonus />
                    <Guarantee />
                    <Qa />
                </>
            )}
            <Footer />


        </>)
}
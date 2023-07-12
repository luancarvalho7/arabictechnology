import "./cta.css"
import { Button } from "./button/button"
import React, { useState, useEffect } from 'react';

export function Cta({mobilePrice}) {
    const [isMobile, setIsMobile] = useState(false);

    if(mobilePrice == false){

        useEffect(() => {
            const checkMobile = () => {
                setIsMobile(window.innerWidth < 900);
            };
    
            // Initial check
            checkMobile();
    
            // Event listener for window resize
            window.addEventListener('resize', checkMobile);
    
            // Clean up event listener
            return () => {
                window.removeEventListener('resize', checkMobile);
            }
        }, []);
    }
   

    return (
        <section className={`ctaSection ${isMobile ? "" : "spacing"}`}>
            <div className="cta">
                <p>A Inteligência artificial não vai roubar seu emprego, alguém usando vai.</p>
                <div className="cta-separator"></div>
                <div className='cta-price'>
                    <div className="cp-hl" style={{ display: isMobile ? 'none' : 'flex' }}>
                        <h3>Por apenas 6x de</h3>
                        <h1>R$14,21</h1>
                    </div>
                    <Button />
                </div>
            </div>
        </section>
    )
}
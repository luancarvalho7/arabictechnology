import { Hero } from "../components/hero/hero"
import { Cta } from "../components/cta/cta"
import { Benefits } from "../components/Benefits/benefits"
import { Method } from "../components/method/method"
import { Bonus } from "../components/bonus/bonus"
import { Guarantee } from "../components/guarantee/guarantee"
import { Qa } from "../components/qa/qa"
import { Footer } from "../components/footer/footer"
export function Home() {
    return (
        <>
            <Hero />
            <Cta mobilePrice={false} />
            <Benefits />
            <Method />
            <Guarantee />
            <Footer />
        </>)
}
import { useRef } from "react";
import { Industry_card } from "./Industry_card";


export function Carsoul() {
        const element = useRef(null);
        const scrollCard = (scrollValue) => {
                element.current.scrollLeft += scrollValue;
        }
        const cards = [];
        const cards_objs = [
                { name: "MNCs", count: "1.9k" },
                { name: "Product", count: "894" },
                { name: "Banking & Finance", count: "321" },
                { name: "Hospitality", count: "1.9k" },
                { name: "Fintech", count: "104" },
                { name: "FMCG & Retail", count: "135" },
                { name: "Startups", count: "383" },
                { name: "Edtech", count: "153" },
                { name: "Healthcare", count: "500" },

        ]
        for (let i = 0; i < cards_objs.length; i++) {
                cards.push(
                        <Industry_card name={cards_objs[i].name} count={cards_objs[i].count} key={i} />
                )
        }
        return (
                <div ref={element} className=" px-20 py-4 whitespace-nowrap flex snap-y snap-mandatory overflow-x-hidden scroll-smooth overflow-y-hidden my-10 w-[90%] mx-auto">
                        {cards}
                        <button onClick={() => { return scrollCard(-800) }} className="absolute  bottom-[-150px] border  rounded-full pr-2 py-1.5 pl-1 flex left-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                        </button>

                        <button onClick={() => { return scrollCard(800) }} className="absolute bottom-[-150px] border  pl-2 pr-1 py-1.5  rounded-full right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                        </button>
                </div>
        )
}
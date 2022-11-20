import React from "react";

import Topo from "./Topo";
import Faixa from "./faixa";
import Comodoar from "./Comodoar";
import Carousel1 from "../../Components/Carousel1";
import Comopedir from "./Comopedir";
import Carousel2 from "../../Components/Carousel2";

function Home() {
    return(
        <div>
            <Topo />
            <Faixa />
            <Comodoar />
            <Carousel1 />
            <Comopedir />
            <Carousel2 />
        </div>
    );
}
export default Home;
import React from "react";

import { MySection } from "./styled";
import { faBicycle, faScrewdriverWrench, faShirt } from "@fortawesome/free-solid-svg-icons";
import SectionItem from "../SectionItem";


export default function Section() {
    return (
        <MySection>
            <SectionItem 
                icon={faBicycle}
                title='Bikes'
                description='Escolha sua bike dos sonhos'
            />
            <SectionItem 
                icon={faShirt}
                title='Acessórios'
                description='Acessórios de ciclismo'
            />
            <SectionItem 
                icon={faScrewdriverWrench}
                title='Ferramentas'
                description='Ferramentas Paktool'
            />
        </MySection> 
    )  
}
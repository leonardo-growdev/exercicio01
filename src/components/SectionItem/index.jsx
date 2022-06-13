import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item, Title, Description } from "./style";

export default function SectionItem(props) {
    return (
        <Item>
            <FontAwesomeIcon icon={props.icon} size='4x'/> 
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Item>
    )
}
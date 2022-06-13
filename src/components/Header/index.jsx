
import React from "react";

import { Title } from "./style";
import { Head } from "./style";

export default function Header({children}) {
    return <Head><Title>{children}</Title></Head>
}
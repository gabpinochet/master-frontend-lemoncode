import React from 'react';
import { createRoot } from "react-dom/client";
import { HolaMundo } from './holaMundo';

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <HolaMundo name="Mundo" />
    </div>
);
﻿module Microsoft.ApplicationInsights.Context {

    "use strict";

    export interface ILocation {
        /**
         * Client IP address for reverse lookup
         */
        ip: string;
    }
}
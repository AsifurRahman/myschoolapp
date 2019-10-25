/*
 * Globalize Culture pl
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function (window, undefined) {

    var Globalize;

    if (typeof require !== "undefined" &&
        typeof exports !== "undefined" &&
        typeof module !== "undefined") {
        // Assume CommonJS
        Globalize = require("globalize");
    } else {
        // Global variable
        Globalize = window.Globalize;
    }

    Globalize.addCultureInfo("pl", "default", {
        name: "pl",
        englishName: "Polish",
        nativeName: "polski",
        language: "pl",
        numberFormat: {
            ",": " ",
            ".": ",",
            "NaN": "nie jest liczbą",
            negativeInfinity: "-nieskończoność",
            positiveInfinity: "+nieskończoność",
            percent: {
                pattern: ["-n%", "n%"],
                ",": " ",
                ".": ","
            },
            currency: {
                pattern: ["-n $", "n $"],
                ",": " ",
                ".": ",",
                symbol: "zł"
            }
        },
        calendars: {
            standard: {
                "/": "-",
                firstDay: 1,
                days: {
                    names: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
                    namesAbbr: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                    namesShort: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"]
                },
                months: {
                    names: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień", ""],
                    namesAbbr: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru", ""]
                },
                monthsGenitive: {
                    names: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia", ""],
                    namesAbbr: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru", ""]
                },
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            }
        }
    });

}(this));

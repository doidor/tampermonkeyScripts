// ==UserScript==
// @name         RARBG Top 100 page IMDB scrapper
// @namespace    doidor/tampermonkey
// @downloadUrl  https://raw.githubusercontent.com/doidor/tampermonkeyScripts/master/rarbg.js
// @supportUrl   https://github.com/doidor/tampermonkeyScripts/blob/master/rarbg.js
// @version      1
// @description  Scrapes rarbg.to torrent pages for movies with the imdb score higher than X (default rating is 7)
// @author       You
// @match        https://rarbgp2p.org/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const minimumRating = 7;

    let tableRows = Array.from(document.getElementsByClassName("lista2"));

    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i];

        if (typeof row.children[1].children[3] !== "undefined") {
            let imdbRate = row.children[1].children[3].innerText.match(/IMDB: ([\d\D]+)\/10/i);

            if (imdbRate.length > 1) {
                let rating = parseFloat(imdbRate[1]);

                if (rating >= minimumRating) {
                    row.style = "background: bisque";
                }
            }
        }
    }
})();
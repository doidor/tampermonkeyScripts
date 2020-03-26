// ==UserScript==
// @name         RARBG Top 100 page IMDB scrapper
// @description  Scrapes rarbg.to torrent pages for movies with the imdb score higher than X (default rating is 7)
// @copyright    2020, Tudor Popa (https://tudorpopa.com/)
// @license      MIT
// @homepageURL  https://github.com/doidor/tampermonkeyScripts/
// @namespace    doidor/tampermonkey
// @downloadUrl  https://raw.githubusercontent.com/doidor/tampermonkeyScripts/master/rarbg.js
// @supportUrl   https://github.com/doidor/tampermonkeyScripts/
// @contributionURL https://github.com/doidor/tampermonkeyScripts/
// @updateURL https://github.com/doidor/tampermonkeyScripts/
// @version      1.0.0
// @author       Tudor Popa
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
            let imdbRatingExists = (imdbRate && imdbRate.length);

            if (imdbRatingExists) {
                let rating = parseFloat(imdbRate[1]);

                if (rating >= minimumRating) {
                    row.style = "background: bisque";
                }
            }
        }
    }
})();
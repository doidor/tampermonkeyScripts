// ==UserScript==
// @name         Intreprinderea 2400 Full Height
// @namespace    doidor/tampermonkey
// @copyright    2020, Tudor Popa (https://tudorpopa.com/)
// @license      MIT
// @homepageURL  https://github.com/doidor/tampermonkeyScripts/
// @namespace    doidor/tampermonkey
// @downloadUrl  https://raw.githubusercontent.com/doidor/tampermonkeyScripts/master/rarbg.js
// @supportUrl   https://github.com/doidor/tampermonkeyScripts/
// @contributionURL https://github.com/doidor/tampermonkeyScripts/
// @updateURL https://github.com/doidor/tampermonkeyScripts/
// @version      1.0.0
// @description  Simple script to make the "Intreprinderea 2400" page look nice on portrait displays (or displays with really large height)
// @author       Tudor Popa - https://tudorpopa.com/
// @match        http*://intreprinderea-2400.piticigratis.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        document.querySelector("#style-scrollbar").style.height = "auto";

        const mElMain = document.querySelector(".et_pb_row.et_pb_row_0_tb_body.et_pb_row_fullwidth.et_pb_equal_columns.et_pb_gutters1.et_pb_row_1-4_1-2_1-4");
        const mElArticle = document.querySelector(".et_pb_row.et_pb_row_1_tb_body.et_pb_row_fullwidth.et_pb_equal_columns.et_pb_gutters1.et_pb_row_1-4_1-2_1-4");

        if (mElMain) {
            mElMain.style.height = "auto";
        }

        if (mElArticle) {
            mElArticle.style.height = "auto";
        }
    }, false);
})();
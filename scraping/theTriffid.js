"use strict";

const scrapeIt = require("../lib");

// Promise interface
scrapeIt("http://thetriffid.com.au/gigs/", {
    title: {
        listItem: "div div div div div h2",
    },

    time: {
        listItem: "span.date-start",
        data: {
            url: {
                selector: "span",
                attr: "title"
            }
        }
    },
    image: {
        listItem: ".g-l-image a",
        data: {
            url: {
                selector: "img",
                attr: "src"
            }
        }

    }
}).then(page => {
    console.log(page);
});

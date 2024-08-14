#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testSwissCows() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.swisscows(query);
        console.log("SwissCows Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testSwissCows();


# Newline Delimited JSON Sanitiser

This package can be used to ingest a Newline Delimited JSON, convert it into a normal JSON, modify/sanitise its data as per the business needs, and then
convert it back to a Newline Delimited JSON (if needed) using the [JQ package](https://stedolan.github.io/jq/).

## Prerequisites

- [JQ package](https://stedolan.github.io/jq/)
- [NPM, Node.js](https://nodejs.org/en/download/)

## Instructions to run

To run this program for your JSONs, add the sanitising logic for your JSON under the `readJson()` function in `jsonSanitiser.js` and add the JSON to the
root directory of the project. Also, make sure the `path` variable in `jsonSanitiser.js` points to your JSON file name.

Once all the above is done, run `npm run start`.

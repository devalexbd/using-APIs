# Using APIs

This was a project for learning how to pull in data from a website via an API.

----

## Asynchronous Functions

![Screenshot of an async function fetching data with an API](https://github.com/devalexbd/using-APIs/blob/main/documentation/api_1.JPG?raw=true)

When using an API, I have to first create an asynchronous function. "Async" means that the rest of the code will continue to function sequentially while this function will wait until a certain operation or piece of data has been retrieved, therefore being executed out of sync.

The reason for using this is because there is a delay between the program making a fetch request for the data and that data arriving. Due to this, using "async" and "await" will mean my code will continue to run as intended as this function waits for this to happen.


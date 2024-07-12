# Using APIs

This was a project for learning how to pull in data from a website via an API.

----

## Asynchronous Functions

![Screenshot of an async function fetching data with an API](https://github.com/devalexbd/using-APIs/blob/main/documentation/api_1.JPG?raw=true)

When using an API, I have to first create an asynchronous function. "Async" means that the rest of the code will continue to function sequentially while this function will wait until a certain operation is completed or a piece of data has been retrieved, therefore being executed out of sync.

The reason for using this is because there is a delay between the program making a fetch request for the data and that data arriving. Due to this, using "async" and "await" will mean my code will continue to run as intended as this function waits for this to happen.

![Screenshot of an unfulfilled promise](https://github.com/devalexbd/using-APIs/blob/main/documentation/unfulfilled_promise.JPG?raw=true)

This screenshot shows that without asynchronous functionality, the promise for data is left unfulfilled and therefore the .json() function doesn't work. Therefore breaking this section of the code and not displaying an image.

----

## API Seeds

For the Lorem Picsum API, you can input seeds into the fetch URL. This will change the image displayed as the seed will correspond to a particular picture from their website. The initial seed when loading my API site is "test", which will always show an image by Sérgio Rola with an ID of 951.

For this second function's fetch request, I use string interpolation to insert a variable into the URL. This variable comes from whatever value is passed into the async function's "imgSeed" parameter.

![Screenshot of my second fetch quest from the Lorem Picsum website](https://github.com/devalexbd/using-APIs/blob/main/documentation/api_2.JPG?raw=true)

After the initial seed, there are then two buttons that generate new pictures in different ways.

One generates images randomly by creating a random number between 0 and 9999 and then making that number the seed.

The other takes the value from a user's input in an input field. The website URL accepts both numerical and alphabetical values, so this works perfectly.

![Screenshot of the Lorem Picsum buttons](https://github.com/devalexbd/using-APIs/blob/main/documentation/change_seed.JPG?raw=true)

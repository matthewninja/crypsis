# crypsis <img src="https://github.com/matthewninja/sfw-helper/blob/master/Logo2.png" width="50">
Chrome extension to make web content SFW while still allowing access to the site.


## Motivation 
Sanitation of webcontent as protection against innappropriate images through the replacement by a harmless image. For use in public administrative, professional, and parental environments. The user-chosen censorship of multimedia protect against taboo content. 

## Features

<p float="left">
<img src="https://media.giphy.com/media/QYv0BzS6i8GIti8WTz/giphy.gif" width="600" height="400" />
</p>

#### General Features

* Established standard of error for filter (45%+)
* Option for advanced settings for requested filters
   * Block entry into sites containing restricted images
   * Selectively restricting keywords
   * Blocking manual input user-selected domains
* Password protected user-settings
* Registered accounts to be used on multiple devices
* Help/Documentation Support
  * FAQ
  * Contacts list

#### Neutralizing Features

* Blocks porn and other adult content
* Blocks gore involving graphic violence
* Blocks innappropriate keywords and phrases

## Installation

#### Download 

1.  Access the page of Chrome extensions (chrome://extensions/)

2. Enable **Developer Mode**

3. Click **Load unpacked** 

4. Select file

#### Activation

1. [Visit the Extension Webstore](https://chrome.google.com/webstore/category/extensions) 

2. Search **Crysis** 

3. Select **Add to Chrome**

## Usage

#### Image Replacement

Through the utilization of Tensorflow models and creating neural networks, when an undesirable image is detected, it is replaced by an appropriate image

```
if (predictions[i].className.match(/cat/g) && predictions[i].probability >= 0.50) {
            images[i].src = "./images/dog.jpg";
 }
```
*Here, once the probability of the image being a cat is greater than 50%, it is replaced with an image of a dog*

#### Image Updating

The page might load new images and ads dynamically, use a loop to periodically update images.

```
var mainLoopId = setInterval(function(){
    console.log("updating images...");
    updateImages();
}, 5000);
```
*Runs only when new images are loaded, otherwise, no updates and no new replacements*

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Future Expansion

Additional analysis of potential bias in sources through NLP and cultural/political association

#### Tech Updates

Incorporate NLP to specify restricted content, eg. Select keywords

#### Business Development

Personal plan for family/individual use
  * Account sign-in on multiple devices

Enterprise subscription based plan for large institutions
  * Set-up for many users

## Credit
<p float="left">
<p>
    <img src="https://avatars0.githubusercontent.com/u/14874215?s=400&v=4" width="75">
   
   Matthew Ham: Solutions Architect [:computer:] 
   [Github](https://github.com/matthewninja) - [LinkedIn](https://www.linkedin.com/in/matthewninja/)
</p>

<p>
    <img src="https://avatars3.githubusercontent.com/u/44846748?s=400&v=4" width="75">
   
   Eric Rabiner: Software Developer [:computer:]
   [Github](https://github.com/ericrabiner) - [LinkedIn](https://www.linkedin.com/in/ericrabiner/)
</p>

<p>
    <img src="https://avatars0.githubusercontent.com/u/23428969?s=400&v=4" width="75">
   
   Fardeen Chowdhury: UX/UI Designer [:pencil2:] 
   [Github](https://github.com/peppermyangus) - [LinkedIn](https://www.linkedin.com/in/fardeen-chowdhury/)
</p>
<p>
    <img src="https://avatars1.githubusercontent.com/u/54465230?s=400&v=4" width="75">
   
   Jenny Wu: Project Lead [:notebook:] 
   [Github](https://github.com/jennywwei) - [LinkedIn](https://www.linkedin.com/in/jenny-wu-1641b811b/)
</p>
</p>




## Contributing

1. Fork it (<https://github.com/matthewninja/sfw-helper/fork>)
2. Create your feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin new-feature`
5. Create a new Pull Request


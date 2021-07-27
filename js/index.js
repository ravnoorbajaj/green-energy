// Load your images on page-load

 function preloader() {
        const imagesPaths = [
            "./img/green1.jpg",
            "./img/green2.jpg",
            "./img/green3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready for use

        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };
    window.addEventListener("load", preloader);

    //NodeList

    let myNodelist = document.getElementsByTagName('button');

    //resources

    const data = {
        partial1: {
            heading: 'Head 1',
            imageURL: '/img/green1.jpg',
            imageAlt: 'green1',
            bodyText: 'Enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology'
        },
        partial2: {
            heading: 'Head 2',
            imageURL: '/img/green2.jpg',
            imageAlt: 'green2',
            bodyText: 'Expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States, and land-locked developing countries, in accordance with their respective programmes of support'
        },
        partial3: {
            heading: 'Head 3',
            imageURL: '/img/green3.jpg',
            imageAlt: 'green3',
            bodyText: 'Double the global rate of improvement in energy efficiency,increase substantially the share of renewable energy in the global energy mix'
        }
    }


    //reference acquiring

    const markupElements =
{
    wind: `<h1>${data.partial1.headingContent}</h1>
            <img src="${data.partial1.imageURL}" alt="${data.partial1.imageAlt}" />
            <p>${data.partial1.bodyText}</p>`,


    wind2: `<h1>${data.partial2.headingContent}</h1>
            <img src="${data.partial2.imageURL}" alt="${data.partial2.imageAlt}" />
            <p>${data.partial2.bodyText}</p>`,


    wind3: `<h1>${data.partial3.headingContent}</h1>
            <img src="${data.partial3.imageURL}" alt="${data.partial3.imageAlt}" />
            <p>${data.partial3.bodyText}</p>`

}

let $dc = document.getElementById('dynamic-content');

//Markup

    let markup1 = `<h1>${data.partial1.headingContent}</h1>
    <img src="${data.partial1.imageURL}" alt="${data.partial1.imageAlt}" />
    <p>${data.partial1.bodyText}</p>`;

    $dc.innerHTML = markup1;

    function OnClick(ev) {
        let currentItem = ev.target;

        for (let i = 0; i < listItems.length; i++) {

            if (listItems[i].hasAttribute('id')) {

                //remove the attribute

                listItems[i].removeAttribute('id');
            }

            currentItem.setAttribute('id', 'btn-active');

        }

        //Conditions to display dynamic content
   
        if(ev.target == listItems[0])
        {
            $dc.innerHTML = markupElements.wind;
        }
        else if(ev.target == listItems[1])
        {
            $dc.innerHTML = markupElements.wind2;
        }
        else if(ev.target == listItems[2])
        {
            $dc.innerHTML = markupElements.wind3;
        }

    }

    //click event

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', OnClick);
    }

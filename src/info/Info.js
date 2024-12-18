import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Geraldin",
    lastName: "Andira",
    initials: "ga", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Grapich Design lover!",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Bandung'
        },
        {
            emoji: "💼",
            text: "Bachelor's Degree of Meteorology at Bandung Institut of Technology"
        },
        {
            emoji: "📧",
            text: "cahyaraniputri@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/geraldinandira/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://www.linkedin.com/in/geraldinandiraitb/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Geraldin. I'm a grad student of Groundwater Engineering and I studied Meteorology at Bandung Institut of Technology, I enjoy doing graphic design, and I believe aesthetics have important roll in every aspects especially in advertising. You should hire me!",
    skills:
        {
            proficientWith: ['Canva', 'python', 'Capcut' ],
            exposedTo: ['figma','Procreate']
        }
    ,
    hobbies: [
        {
            label: 'music',
            emoji: '📖'
        },
        {
            label: 'designing',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Design Procreate 1",
            live: "https://www.canva.com/design/DAGLORlm3o0/SO7dshYfIR8iupdaq6WMyw/view?utm_content=DAGLORlm3o0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h315fb36a62", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock1
        },
        {
            title: "Design Procreate 2",
            live: "https://www.canva.com/design/DAGLORlm3o0/SO7dshYfIR8iupdaq6WMyw/view?utm_content=DAGLORlm3o0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h315fb36a62",
            image: mock2
        },
        {
            title: "A Design for Kahf Contest",
            live: "https://www.canva.com/design/DAFapj9xgAc/5AdrtyV5tXFngFZYVdeXPw/view?utm_content=DAFapj9xgAc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3d4d3ae9ef",
            image: mock3
        },
        {
            title: "Canva Poster Webinar",
            live: "https://www.canva.com/design/DAFapj9xgAc/5AdrtyV5tXFngFZYVdeXPw/view?utm_content=DAFapj9xgAc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3d4d3ae9ef",
            image: mock4
        },
        {
            title: "Canva Power Point Design 1",
            live: "https://www.canva.com/design/DAFfxGeu4_c/CF54FGoNpqTYEqgsCSi_Vg/view?utm_content=DAFfxGeu4_c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h497a086a5d",
            image: mock5
        }, 
        {
            title: "Canva Power Point Design 2",
            live: "https://www.canva.com/design/DAFapj9xgAc/5AdrtyV5tXFngFZYVdeXPw/view?utm_content=DAFapj9xgAc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3d4d3ae9ef",
            image: mock6
        },
        {
            title: "Canva Power Point Design 3",
            live: "https://www.canva.com/design/DAFapj9xgAc/5AdrtyV5tXFngFZYVdeXPw/view?utm_content=DAFapj9xgAc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3d4d3ae9ef",
            image: mock7
        },
    ]
}
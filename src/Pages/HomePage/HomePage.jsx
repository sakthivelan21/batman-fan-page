import React from 'react';
import Heading from '../../Components/Heading/Heading.jsx';
import SubParagraphContainer from '../../Components/SubParagraphContainer/SubParagraphContainer.jsx'

const subParagraphList=[
    {
        title:'Batman',
        imgSrc:'dark-knight.jpg',
        paragraph:`Batman is a bat-masked vigilante bringing justice upon the criminal underworld of Gotham City.
        Batman learned from the pain of losing his parents and vowed to never break. He's a symbol of where passion, tenacity, and self-motivation can get you.
        Commissioner Gordon said, "he's the hero Gotham deserves, but not the one it needs right now. So, we'll hunt him, because he can take it. Because he's not our hero: He's a silent guardian, a watchful protector... a Dark Knight".`
    },
    {
        title:'Bruce Wayne',
        imgSrc:'bruce_wayne.jpg',
        paragraph:`A billionaire socialite who, after witnessing his parents' death in a mugging at age 8, travels around the world seven years before returning home to inherit his family 
        company Wayne Enterprises whilst operating at night as a bat-masked vigilante bringing justice upon the criminal underworld of Gotham City.
        He resides on the outskirts of Gotham City in his personal residence, Wayne Manor. 
        Wayne averts suspicion by acting the part of a superficial playboy idly living off his family's fortune and the profits of Wayne Enterprises, his inherited conglomerate.
        He supports philanthropic causes through his nonprofit Wayne Foundation, which in part addresses social issues encouraging crime as well as assisting victims of it, but is more widely known as a celebrity socialite.
        In public, he frequently appears in the company of high-status women, which encourages tabloid gossip while feigning near-drunkenness with consuming large quantities of disguised ginger ale since Wayne is actually a strict teetotaler to maintain his physical and mental prowess.
        Although Bruce Wayne leads an active romantic life, his vigilante activities as Batman account for most of his time.`
    },
    {
        title:'Abilities',
        imgSrc:'training.jpg',
        paragraph:`Batman has no inherent superhuman powers; he relies on "his own scientific knowledge, detective skills, and athletic prowess". 
        Batman's inexhaustible wealth gives him access to advanced technologies, and as a proficient scientist, he is able to use and modify these technologies to his advantage.
        Batman utilizes a vast arsenal of specialized, high-tech vehicles and gadgets in his war against crime, the designs of which usually share a bat motif. 
        In a Bhutan prison, he meets Henri Ducard, who recruits him to the League of Shadows led by Ra's al Ghul. After completing his training in ninja methods and purging his fears.`
    },

]
function HomePage(){
    return(
        <div className='page-container'>
            <Heading heading='Dark Knight'/>
            {
                subParagraphList.map((subParagraph,index)=>
                    <SubParagraphContainer
                    key={index}
                    {...subParagraph}
                    />
                )
            }
        </div>
    )
}

export default React.memo(HomePage);
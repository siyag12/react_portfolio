import React from 'react'
import './portfolio.css'
import P1 from '../../assets/p1.png'
import P2 from '../../assets/p2.png'
import P3 from '../../assets/p3.png'
import P4 from '../../assets/p4.jpg'
import P5 from '../../assets/p5.png'
import P6 from '../../assets/p6.jpg'

const data = [
    {
        id: 1,
        image: P1,
        title: 'Visual Wildlife Segmentation',
        link: 'https://drive.google.com/file/d/17N0IHatsdR3YMjSgP-MPM2orKOSNWOAq/view?usp=sharing'
    },
    {
        id: 2,
        image: P2,
        title: 'Moo-Sic',
        link: 'https://github.com/siyag12/ML-Project-Sem-5'
    },
    {
        id: 3,
        image: P3,
        title: 'Study Chum',
        link: 'https://github.com/himanshi510/Study-Chum'
    },
    {
        id: 4,
        image: P5,
        title: 'Distracted Driver Detection',
        link: 'https://github.com/drishyae22/Distracted-Driver-Detection'
    },
    {
        id: 5,
        image: P4,
        title: 'Neural Machine Translation',
        link: 'https://github.com/drishyae22/Neural-Machine-Translation'
    },
    {
        id: 6,
        image: P6,
        title: 'Will Hero Game Clone',
        link: 'https://github.com/siyag12/AP-Project'
    }
]
export const Portfolio = () => {
    return (
        <section id={'portfolio'}>
            <h5> My Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, link}) => {
                        return (
                            <article className={'portfolio__item'}>
                                <div className={'portfolio__item-img'}>
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__links">
                                    <a href={link} className={'btn'} target={'_blank'}>View Project</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio

import React from 'react'


function Course({ course }) {
    console.log(course)
    const { id, title, desc, price, link, image } = course;
    return (
        <div className='course'>
            <img className='course-img' src={image} width={230} height={200} />
            <h4 className='course-title'>{title}</h4>
            <h5>{desc}</h5>
            <h3>{price}</h3>
            <a href={link}>izle</a>
        </div>
    )
}

export default Course
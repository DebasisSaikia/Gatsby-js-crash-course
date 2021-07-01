import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import DateIcon from 'images/calendar.svg'
import TimeIcon from 'images/watch.svg'
import { TextWrapper, ImgWrapper, StatWrapper, DateWrapper, ReadingTimeWrapper, BlogWrapper, } from './BlogCard.styles'

const BlogCard = ({ slug, title, date, readingTime, excerpt, image }) => (
    <BlogWrapper>
        <ImgWrapper>
            <GatsbyImage image={image} alt={title} />
        </ImgWrapper>
        <TextWrapper>
            <Link to={slug}>
                <h2>{title}</h2>
            </Link>
            <StatWrapper>
                <DateWrapper>
                    <img src={DateIcon} alt="date" />
                    {date}
                </DateWrapper>
                <ReadingTimeWrapper>
                    <img src={TimeIcon} alt="time" />
                    {readingTime}
                </ReadingTimeWrapper>
            </StatWrapper>
            <p>{excerpt}</p>
        </TextWrapper>
    </BlogWrapper>
)

export default BlogCard

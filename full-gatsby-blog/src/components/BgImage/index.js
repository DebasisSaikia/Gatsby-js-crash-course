import React from 'react'
import { BgWrapper, Content, MainImage } from './Bgimage.styles'

const BgImage = ({ image, className, children, alt }) => {
    return (
        <BgWrapper>
            <MainImage image={image} alt={alt} />
            <Content className={className}>{children}</Content>
        </BgWrapper>
    )
}

export default BgImage

import React from 'react'
import { Image, View, ScrollView, TouchableHighlight, Text } from 'react-native'
import { Container, Titulo, ImageLibro, Subtitulo, Texto, ContImage, ContTexto } from './styled'


const Card = books => {

    //const {items} = books;
    //console.log(items);
    //const {volumeInfo} = items;
    //const {title} = volumeInfo;

    return (
        <Container style={{ flex: 1, flexDirection: 'row' }}>

           
            <ContImage>
            <ImageLibro
                source={{ uri: 'http://books.google.com/books/content?id=wvU9kjQxUF8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' }}
            />
             </ContImage>

            <ContTexto>
                <Titulo>
                 
            </Titulo>

                <Subtitulo>
                    Stephen King
            </Subtitulo>

                <Texto>
                    Una escalofriante revisión del mito del hombre lobo por el rey de la literatura de terror, Stephen King. El terror empezó en enero, con la luna llena...
                </Texto>
            </ContTexto>

        </Container>
    )
}

export default Card
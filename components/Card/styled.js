import styled from 'styled-components'

const Container = styled.View `
    width: 90%;
    margin: 0 auto;
    background-color: #232323;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
`

const Titulo = styled.Text `
    font-size: 20px;
    font-weight: 800;
    color: white;
    
`

const Subtitulo = styled.Text `
    font-size: 16px;
    color: grey;
    
`

const Texto = styled.Text `
    font-size: 16px;
    color: white;
    
`

const ImageLibro = styled.Image `
    width: 100%;
    height: 180;

`
const ContImage = styled.View `
    width: 35%;

`

const ContTexto = styled.View `
    width: 65%;
    margin-left: 20px;

`

export {Container, Titulo, ImageLibro, Subtitulo, Texto, ContImage, ContTexto}
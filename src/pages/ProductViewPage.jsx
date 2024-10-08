import React from 'react';
import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import styled from 'styled-components';
import BuyBox from "../components/BuyBox";
import ProductOption from "../components/ProductOption";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

const images = [
    { src: '/sapato2.jpg'},
    { src: '/sapato3.jpg'},
    { src: '/sapato4.jpg'},
    
];

const ProductView = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #f5f5f5;
`;


const GalleryProduct = styled.div`
  .product-gallery img {
    width: 700px;
    height: 570px;
    border-radius: 4px;
    padding: 0;
    margin: 0;

  }

    .gallery {
    margin: 0;
    padding: 0;
    padding-left: 30px;
    padding-right: 40px;
    width: 100%;
  }

  .navigationgallery {
    display: flex;
    justify-content: space-between;
    align-items: right;
    position: absolute;
    top: 70%;
    width: 580px;
    padding-left: 40px;
    transform: translateY(-50%);
  }

  .navigationgallery button {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    width: 20px;
    height: 20px;
  }
  .navigationgallery button img{
  }

  .navigationgallery button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .navigationgallery button:hover {
    opacity: 1;
  }

  .thumbnails {
    display: flex;
    justify-content: start;
    padding-left: 29px;
    margin-top: 10px;
    gap: 15px;
  }

  .thumbnail {
    width: 90px;
    height: 80px;
    margin: 0 5px;
    border-radius: 4px;
    cursor: pointer;
    transition: border 0.3s ease;
  }
  .thumbnail.active {
    border: 2px solid #C92071;
  }

`;

const productsData = [
  {
    name: 'tênis Olympikus Eros/165 Branco',
    imagem: "https://vulcabras.vtexassets.com/arquivos/ids/252925-1300-1300?v=637965288197900000&width=1300&height=1300&aspect=true",
    price: 100
  },

];


const ProductViewPage = () => {

    const {nome} = useParams();
    const options = ['36', '38', '39', '40', '42'];
    const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

    const linkObject = {
      text: 'Ver todos ➔',
      href: '/products'
    };

    const productsData = [
      {
        name: 'tênis Olympikus Eros/165 Branco',
        imagem: "https://vulcabras.vtexassets.com/arquivos/ids/252925-1300-1300?v=637965288197900000&width=1300&height=1300&aspect=true",
        price: 170
      },
      {
        name: 'tênis Olympikus Eros/165 Branco',
        imagem: "https://vulcabras.vtexassets.com/arquivos/ids/252925-1300-1300?v=637965288197900000&width=1300&height=1300&aspect=true",
        price: 170
      }
      
    
    ];

    return ( 
        <>
            <ProductView>
            <div>
            <GalleryProduct >
              <Gallery images={images} className="product-gallery"/> 
            </GalleryProduct>
            </div>
              <BuyBox
                name="Tênis Olympikus Eros/165 Branco"
                reference="3297689"
                stars={4.6}
                rating={99}
                price={170.00}
                priceDiscount={400.00}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              >
              <h4>Tamanho</h4>
                <ProductOption options={options} radius="5px" shape="square" type="text" />
              <h4>Cor</h4>
                <ProductOption options={colors} radius="50%" shape="circle" type="color" />
              </BuyBox>
            </ProductView>

            <Section
            title="Produtos Relacionados" 
            titleAlign="left" 
            link={linkObject}
            />
            <ProductListing products = {productsData}/>
            </>
     );
}
 
export default ProductViewPage;
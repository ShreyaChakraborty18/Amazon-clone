import React, { useEffect } from 'react'
import "./Home.css";
import Product from "./Product";
//import { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                {/* <img
                  className="home_image"
                  src="https://m.media-amazon.com/images/I/61yokUZfL5L._SX3000_.jpg"
                  alt=""
              /> */}
                <ImageSlider slides={SliderData} />;

                <div className='home_row'>
                    <Product
                        id="1"
                        title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
                        price="10,499"
                        image="https://images-eu.ssl-images-amazon.com/images/I/416npwZlh7L._SX300_SY300_QL70_FMwebp_.jpg"
                        rating={4}
                    />

                    <Product
                        id="4"
                        title="Acer Nitro 5 AN515-57 Gaming Laptop | Intel Core i5-11400H |NVIDIA GeForce RTX 3050 Laptop Graphics | 15.6"
                        price='69,990'
                        image="https://m.media-amazon.com/images/I/71evs2WKJjS._AC_SS450_.jpg"
                        rating={5}
                    />

                    <Product
                        id="2131"
                        title="Bryan & Candy Scented Candles Valentine Gift Set for Women and Men, Neroli & Honeycomb, Lavender & Chamomile , Aromatherapy Candles,100 gm Each Soy Wax Eco Friendly Tin Container (Pack of 2)"
                        price="560"
                        image="https://m.media-amazon.com/images/I/91MzDqbTWzL._SL1500_.jpg"
                        rating={4}
                    />

                    <Product
                        id="21312"
                        title="Medieval Arts Iron Decorative Showpiece/ Figurine for Home Decoration (Style 5)"
                        price="680"
                        image="https://m.media-amazon.com/images/I/81YC8+guzCL._SL1500_.jpg"
                        rating={4}
                    />

                </div>

                <div className='home_row'>
                    <Product
                        id="3"
                        title="Titan Autumn-Winter 19 Analog Silver Dial Men's Watch"
                        price="2,156"
                        image="https://m.media-amazon.com/images/I/71BwxyFeJdL._AC_SS450_.jpg"
                        rating={3}
                    />
                    <Product
                        id="4"
                        title="HP Pavilion Gaming (Intel i5-10300H 10th Gen/NVIDIA GeForce GTX 1650 Ti Graphics 4GB/LED/144Hz/8GB/256GB SSD + 1TB HDD/15.6 inches/Windows 10 Home/2.28kg) Laptop"
                        price="67,790"
                        image="https://m.media-amazon.com/images/I/611VHOvjkES._AC_SS450_.jpg"
                        rating={5}
                    />

                    <Product
                        id="2"
                        title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers"
                        price='39,990'
                        image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SS450_.jpg"
                        rating={3}
                    />
                    <Product
                        id="1314"
                        title="Amazon Brand - Solimo Vivid Stripes 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Mustard and Brown, Striped"
                        price="557"
                        image="https://m.media-amazon.com/images/I/91fR2qEOH0L._AC_UL480_QL65_.jpg"
                        rating={4}
                    />
                </div>

                <div className='home_row'>
                    <Product
                        id="1"
                        title="Cadbury Oreo Dipped Cookie, 150 g"
                        price="51"
                        image="https://m.media-amazon.com/images/I/61wTbGwg7iL._SL1500_.jpg"
                        rating={4}
                    />

                    <Product
                        id="4"
                        title="Online Zone | Kapur Dani Electrical Camphor Diffuser. Glass Kapoor Dani & Essential Oil Diffuser with On Off Switch to Toggle Between Burner & Lamp (Star Multi)"
                        price="245"
                        image="https://m.media-amazon.com/images/I/61A+Sw78NtL._SL1010_.jpg"
                        rating={4}
                    />

                    <Product
                        id="2131"
                        title="Pure Source India Aroma Diffuser Oil (Lavender, Lemongrass, Rose, Jasmine, Sandalwood and Mogra), 15ml Each, Multicolour - Set of 6"
                        price="399"
                        image="https://m.media-amazon.com/images/I/71nVBNnsd+L._SL1500_.jpg"
                        rating={5}
                    />

                    <Product
                        id="21312"
                        title="Reiki Crystal Products Citrine Stone Tree 100 Beads Crystal Tree Stone Tree Showpiece
                        Visit the Reiki Crystal Products Store"
                        price="349"
                        image="https://m.media-amazon.com/images/I/61QzmV5lsQL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />

                </div>

                <div className='home_row'>
                    <Product
                        id="1"
                        title="Amazon Brand - Solimo 100% Cotton 2 Piece Bath Towel Set, 500 GSM (Iris Blue and Spanish Red)"
                        price="859"
                        image="https://m.media-amazon.com/images/I/81Gi+0M4rXL._SL1500_.jpg"
                        rating={4}
                    />

                    <Product
                        id="4"
                        title="Amazon Brand - Solimo Jasmine Zest 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Blue, Floral"
                        price="899"
                        image="https://m.media-amazon.com/images/I/91cVgrUtA-L._SL1500_.jpg"
                        rating={3}
                    />

                    <Product
                        id="2131"
                        title="ALI EXPRESS Plug-in Electric Round Heater Fan Air Warmer 400 Watts Handy Room Heate with Remote Control,The Wall Outlet Space Heater Blower Adjustable Timer Digital Display for Office/Camper"
                        price="989"
                        image="https://m.media-amazon.com/images/I/61myAy0Om8L._SL1500_.jpg"
                        rating={5}
                    />

                </div>

                <div className='home_row'>
                    <Product
                        id="1"
                        title="Adidas Women's Mesh Duramo Sl Cblack/Ftwwht/Carbon Running Shoes - 5 UK"
                        price="3,733"
                        image="https://m.media-amazon.com/images/I/71DFsBviEuL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />

                    <Product
                        id="4"
                        title="American Tourister Casual Backpack"
                        price="1,299"
                        image="https://m.media-amazon.com/images/I/81KEKEDFUcL._UY741_.jpg"
                        rating={5}
                    />

                    <Product
                        id="2131"
                        title="Pure Source India Aroma Diffuser Oil (Lavender, Lemongrass, Rose, Jasmine, Sandalwood and Mogra), 15ml Each, Multicolour - Set of 6"
                        price="399"
                        image="https://m.media-amazon.com/images/I/71nVBNnsd+L._SL1500_.jpg"
                        rating={3}
                    />

                    <Product
                        id="21312"
                        title="WildHorn® RFID Protected Genuine High Quality Leather Wallet for Men(Brown)"
                        price="440"
                        image="https://m.media-amazon.com/images/I/71zu2w170EL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />

                </div>

                <div className='home_row'>
                    <Product
                        id="5"
                        title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                        price={3499}
                        image="https://m.media-amazon.com/images/G/31/kindle/journeys/eFu8CFvlYoIj2FKRtRoGVbg0fIKXUEyL3Ry8GNVsaMyM3D/NjMzNjQ1MWYt._CB660320008_.png"
                        rating={5}
                    />

                    <Product
                        id="4"
                        title="FunBlast Unicorn Soft Bag for Kids – School & Picnic Bag for Baby,Boys,Girls / Lightweight Travel School Mini Backpack for Kids - Multi Color"
                        price="616"
                        image="https://m.media-amazon.com/images/I/61GrKAEIzUL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />

                    <Product
                        id="2131"
                        title="OnePlus 125.7 cm (50 inches) U Series 4K LED Smart Android TV 50U1S (Black) (2021 Model)"
                        price="40,999"
                        image="https://m.media-amazon.com/images/I/71Sdj04A8dS._SL1500_.jpg"
                        rating={3}
                    />

                    <Product
                        id="21312"
                        title="Nurturing Green Lucky Bamboo Plant (Small:2 Layer Bamboo, Glass Pot)"
                        price="236"
                        image="https://m.media-amazon.com/images/I/41-knssZyGL.jpg"
                        rating={5}
                    />

                </div>

            </div>
        </div>
    );
}

export default Home


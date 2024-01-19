import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    
    return(
        <div className="home"> 
            <div className="home_container">
                <img  className="home_image" src="https://img.freepik.com/premium-photo/3d-illustration-neon-magnifying-glass-lies-grocery-cart-concept-searching-goods-services-online-stores-marketing-research_116124-12799.jpg"  alt=""
                 /> 
              
              
                <div className="home_row"> 
                     <Product 
                     id="11"
                     title="OnePlus Nord Buds True Wireless in Ear Earbuds with Mic,Playback:Up to 30hr case, 4-Mic Design(Blue Agate)"
                     price={2799}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/51eIHcTAdeL._SL1500_.jpg"
                    />
                     
                     <Product 
                     id="12"
                     title="Noise Pulse Go Buzz Smart Watch Bluetooth Calling with 1.69,Heart Rate Tracking,Auto Detection, Longer Battery (Jet Black)"
                     price={1899}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg"
                    />
                    <Product 
                     id="13"
                     title="Canon M50 Mark II 15-45mm f3.5-6.3 is STM Digital Zoom Camera (Black)"
                     price={56990}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/61zne3JPlQS._SL1200_.jpg"
                    />
                    
                </div>
                <div className="home_row"> 
                <Product
                id="21"
                title="FOGG Men's Long-lasting Fresh and Soothing Fragrance Impressio Scent, Eau De Parfum -100ml "
                price={387}
                rating={3}
                image="https://m.media-amazon.com/images/I/81M9ZNu2IiL._SL1500_.jpg"
               />
                <Product
                id="22"
                title="Bella Vita Organic Unisex Luxury Perfume Gift Set 4x20 ML For Men & Women | Luxury Scent with Long Lasting Fragrance Eau De Parfum | SKAI | FRESH | WHITEOUD | PATCHOULI"
                price={594}
                rating={2}
                image="https://m.media-amazon.com/images/I/61yHSJE-cZL._SL1500_.jpg"
                 />
               
                </div>
                <div className="home_row"> 
                     <Product
                     id="31"
                     title="Froh Feet Women's Laceup Heel"
                     price={849}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/61F+kDiOo+L._UL1500_.jpg"
                     />
                     <Product
                     id="32"
                     title="Vector X CS-2100 Court Shoes for Boys & Girls"
                     price={989 }
                     rating={5}
                     image="https://m.media-amazon.com/images/I/51+jkG2bVGL._SL1100_.jpg"
                     />
                     <Product
                     id="33"
                     title="Puma Mens Future Z 4.4 It Football Shoe"
                     price={3695}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/61zE2p0snWL._UL1200_.jpg"
                    />

                     
                     
                </div>
                <div className="home_row"> 
                     <Product 
                     id="41"
                     title="Half Moon Large 37L Laptop Bag Backpack for menं Women Boys and Girls Luggage Travel Bags with 17.3 inches Laptop Compartment & Rain Cover"
                     price={849}
                     rating={3}
                     image="https://m.media-amazon.com/images/I/61+w+ERVanL._UL1398_.jpg"
                    />
                     
                     <Product 
                     id="42"
                     title="uppercase Medium 17L Backpack 1700EBP1 School Backpack 3x more water resistant sustainable bag with Rainproof zippers for Men, Women, Boys and Girls, 750 Days warranty"
                     price={1100}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/51Ec8S007kL._UL1500_.jpg"
                    />
                    
                    
                </div>
                <div className="home_row"> 
                     <Product 
                     id="51"
                     title="Fargo Handbag For Women And Girls COMBO SET OF 5 (Light5pc)"
                     price={479}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/51-+SFrhYFL._UL1019_.jpg"
                    />
                     
                     <Product 
                     id="52"
                     title="Dervin UV Protected Aviator Sunglasses for Men and Women"
                     price={243}
                     rating={3}
                     image="https://m.media-amazon.com/images/I/61GseaDl8SL._UL1500_.jpg"
                    />
                    <Product 
                     id="53"
                     title="Dervin Unisex Adult Round Sunglasses"
                     price={449}
                     rating={2}
                     image="https://m.media-amazon.com/images/I/61hYoX8tG2L._UL1500_.jpg"
                    />
                    
                </div>
                <div className="home_row"> 
                     <Product 
                     id="61"
                     title="Naughty Ninos girls Clothing Sets"
                     price={769}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/619Vhv9vKYL._UL1440_.jpg"
                    />
                     
                     <Product 
                     id="62"
                     title="BRANDONN Unisex Baby Flannel Jumpsuit Panda Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear (Grey Scars, 9-12 Months)"
                     price={664}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/61kqhTCKtgL._SL1100_.jpg"
                    />
                    
                    
                </div>
                <div className="home_row"> 
                     <Product 
                     id="71"
                     title="Apple iPhone 12 (64GB) - Purple Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode,Smart HDR 3"
                     price={55990}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
                    />
                     
                     <Product 
                     id="72"
                     title="Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6 (39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB)"
                     price={58999}
                     rating={3}
                     image="https://m.media-amazon.com/images/I/61WNxdAeAoL._SL1000_.jpg"
                    />
                    <Product 
                     id="73"
                     title="Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6 FHD Thin & Light Laptop(8GB/512GB SSD/Windows )"
                     price={37487}
                     rating={5}
                     image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg"
                    />
                    
                </div>
                <div className="home_row"> 
                     <Product 
                     id="81"
                     title="The Power of Subconscious Mind: The Practical Guide to Master Living (Grapevine edition) "
                     price={262}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/41bZfUZn0ZL._SX311_BO1,204,203,200_.jpg"
                    />
                     
                     <Product 
                     id="82"
                     title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living "
                     price={179}
                     rating={3}
                     image="https://m.media-amazon.com/images/P/B07H9WSFQG.01._SCLZZZZZZZ_SX500_.jpg"
                    />
                   
                    
                </div>
                
            </div>
        </div>
    );
}
export default Home;
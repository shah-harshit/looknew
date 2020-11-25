import React from 'react';
import '../index.css';
import HeaderProductPage from './HeaderProductPage';
import useFirestore from '../hooks/useFirestore';

const MansShoesPage = () => {
  const price399  = useFirestore('MansShoes-399');
  const price499 = useFirestore('MansShoes-499');
  const price599 = useFirestore('MansShoes-599');
  const price749 = useFirestore('MansShoes-749');
  const price999 = useFirestore('MansShoes-999');
  const price1199 = useFirestore('MansShoes-1199');
  const price1499 = useFirestore('MansShoes-1499');
  const price1749 = useFirestore('MansShoes-1749');
  const price1999 = useFirestore('MansShoes-1999');
  const price2000 = useFirestore('MansShoes-moreThan2000');

  const handleButtonClick = (id, productType, productPrice) => {
    const newDocUrl = "https://docs.google.com/forms/d/e/1FAIpQLSczlbBWMSBpGjDluajwv9fqpzVuIIt7SjBfpehgu7bFyPe-_Q/viewform?usp=pp_url&entry.99468049=" + id + "&entry.724771602=" + productType + "&entry.582945548=" + productPrice; 
    window.open(newDocUrl , "_blank");
  }
        return (
            <div className="" id="products">
                <HeaderProductPage />
                <div class="container-individual-product" id="product-image-list">
                  { price399 && <h2 class="heading">Price 399</h2>}
                  { price399 && price399.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price499 && <h2 class="heading">Price 499</h2>}
                  { price499 && price499.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price599 && <h2 class="heading">Price 599</h2>}
                  { price599 && price599.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price749 && <h2 class="heading">Price 749</h2>}
                  { price749 && price749.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price999 && <h2 class="heading">Price 999</h2>}
                  { price999 && price999.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price1199 && <h2 class="heading">Price 1199</h2>}
                  { price1199 && price1199.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price1499 && <h2 class="heading">Price 1499</h2>}
                  { price1499 && price1499.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price1749 && <h2 class="heading">Price 1749</h2>}
                  { price1749 && price1749.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price1999 && <h2 class="heading">Price 1999</h2>}
                  { price1999 && price1999.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                      <div>
                        <button className="btn" onClick={() => handleButtonClick(doc.id, doc.productType, doc.productPrice)}>
                          <p className="btn-text">Buy now</p>
                        </button>
                      </div>
                    </div>
                  ))}
                  { price2000 && <h2 class="heading">Price More than 2000</h2>}
                    <div className="product-section-description">
                      Please send us the screenshot of the product
                    </div>
                  { price2000 && price2000.map(doc => (
                    <div style={{display: 'block', flexDirection: 'horizontal', marginTop: '20px'}}>
                      <img src={doc.url} key={doc.id} alt="Mans-shoes" className="product-type" id="individual-product-image"/>
                    </div>
                  ))}

                </div>
            </div>
        )
    }

export default MansShoesPage;
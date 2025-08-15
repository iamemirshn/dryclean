import React, { useState, useEffect } from "react";
import { products } from "../../api/products/products";
import "./TabMenu.css";

const ITEMS_PER_PAGE = 16;

const TabMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kurutemizleme");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(4);

  const categories = Object.keys(products);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 600) {
        setColumns(2); // Küçük ekranlar için 2 sütun
        setRows(8); // Küçük ekranlar için 8 satır
      } else {
        setColumns(4); // Diğer ekranlar için 4 sütun
        setRows(4); // Diğer ekranlar için 4 satır
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setSearchTerm("");
  }, [selectedCategory]);

  const currentProducts = products[selectedCategory] || [];

  const filteredProducts = currentProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const maxPage = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    if (currentPage > maxPage) {
      setCurrentPage(1);
    }
  }, [searchTerm, filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="tab-menu">
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="İstediğiniz Ürünü Arayın ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div
          className="product-grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, auto)`,
          }}
        >
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.img} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>

                  <div className="rating">
                    <div className="category-label">{selectedCategory}</div>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <div className="price">
                    <span className="original-price">
                      {(product.price * 1.2).toFixed(2)} TL
                    </span>
                    <span className="current-price">{product.price} TL</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Görüntülenebilecek ürün bulunmuyor.</p>
          )}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`page-button ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;

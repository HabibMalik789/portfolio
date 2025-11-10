import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  { id: 1, name: "All Projects" },
  { id: 2, name: "HTML/CSS" },
  { id: 3, name: "React" },
  { id: 4, name: "Node.js" },
  { id: 5, name: "WP/Wix" },
];

const allData = [
  {
    id: 1,
    name: "Aidlink-FYP Project",
    category: ["React"],
    image: "images/portfolio/03.png",
    slug: "work-space",
    url: "https://habibmalik789.github.io/aidlink/",
  },
  {
    id: 2,
    name: "Organic Food Website-Bootstrap",
    category: ["HTML/CSS"],
    image: "images/portfolio/01.png",
    slug: "creative-art",
    url: "https://habibmalik789.github.io/Organic-Food/",
  },
  {
    id: 3,
    name: "Ecommerce landing Page-HTML/CSS",
    category: ["HTML/CSS"],
    image: "images/portfolio/02.png",
    slug: "apple-usb",
    url: "https://habibmalik789.github.io/e-commerce/",
  },
  {
    id: 4,
    name: "Andrews Creation Developed on Wix",
    category: ["WP/Wix"],
    image: "images/portfolio/04.png",
    slug: "creative-bulb",
    url: "https://www.andrewscreation.com/",
  },
  {
    id: 5,
    name: "Real Estate Services website developed on Wix.",
    category: ["WP/Wix"],
    image: "images/portfolio/05.png",
    slug: "creative-bulb",
    url: "https://hmdesign789.wixsite.com/portfolio",
  },
  {
    id: 6,
    name: "E-commerce accessories store, designed and developed on Wix.",
    category: ["WP/Wix"],
    image: "images/portfolio/06.png",
    slug: "creative-bulb",
    url: "https://fawadhasssan.wixsite.com/arzoosid-1/shop-all",
  },
  {
    id: 7,
    name: "Children donation website, designed and developed on Wix.",
    category: ["WP/Wix"],
    image: "images/portfolio/07.png",
    slug: "creative-bulb",
    url: "https://chikadinaka.wixsite.com/mysite-2",
  },
  {
    id: 8,
    name: "The Zone – Athlete Mental Wellness | WordPress.",
    category: ["WP/Wix"],
    image: "images/portfolio/08.png",
    slug: "creative-bulb",
    url: "https://www.itsthezone.com/who-we-are",
  },
  {
    id: 9,
    name: "Hoboken Custom Craft | WordPress",
    category: ["WP/Wix"],
    image: "images/portfolio/09.png",
    slug: "creative-bulb",
    url: "https://www.hobokencustomcraft.com/",
  },
  {
    id: 10,
    name: "Worktop Experts – Granite & Quartz Worktops | WordPress",
    category: ["WP/Wix"],
    image: "images/portfolio/10.png",
    slug: "creative-bulb",
    url: "https://yandsmarble.co.uk/",
  },
];

function Portfolios() {
  const getAllItems = allData;
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState(filters[0].name);
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

 
  useEffect(() => {
    let filteredData;
    if (activeFilter === filters[0].name) {
      filteredData = getAllItems.slice(0, dataVisibleCount);
    } else {
      filteredData = getAllItems.filter((item) =>
        item.category.includes(activeFilter)
      );
      filteredData = filteredData.slice(0, dataVisibleCount);
    }
    setVisibleItems(filteredData);

    if (dataVisibleCount >= getAllItems.length) {
      setNoMorePost(true);
    } else {
      setNoMorePost(false);
    }
  }, [dataVisibleCount, activeFilter]);


  const handleChange = (e) => {
    e.preventDefault();
    const targetFilter = e.target.value || e.target.textContent;
    setActiveFilter(targetFilter);
    setDataVisibleCount(6); // reset when switching filters
  };


  const handleLoadmore = (e) => {
    e.preventDefault();
    setDataVisibleCount((prevCount) => prevCount + dataIncrement);
  };

  return (
    <>
      {/* FILTER BUTTONS */}
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      {/* MOBILE FILTER DROPDOWN */}
      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      {/* PORTFOLIO GRID */}
      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block"
            >
              <Portfolio portfolio={item} />
            </a>
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {!noMorePost && (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;

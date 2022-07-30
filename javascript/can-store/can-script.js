fetch("product.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error : ${response.status}`);
    }

    return response.json();
  })
  .then((json) => {
    initialize(json);
  })
  .catch((err) => {
    console.log(`Fetch problem : ${err.message}`);
  });

/**
 *
 * @param {array} products
 */
function initialize(products) {
  const category = document.querySelector("#category");
  const searchTerm = document.querySelector("#searchTerm");
  const searchBtn = document.querySelector("button");
  const main = document.querySelector("main");

  let lastCategory = category.value;
  let lastSearch = "";

  let categoryGroup;
  let finalGroup;

  finalGroup = products;
  updateDisplay();

  categoryGroup = [];
  finalGroup = [];

  searchBtn.addEventListener("click", selectCategory);

  /**
   *
   * @param {*} e
   * @returns {*}
   */
  function selectCategory(e) {
    e.preventDefault();

    categoryGroup = [];
    finalGroup = [];

    if (
      category.value === lastCategory &&
      searchTerm.value.trim() === lastSearch
    ) {
      return;
    } else {
      lastCategory = category.valu;
      lastSearch = searchTerm.value.trim();

      if (category.value === "All") {
        categoryGroup = products;
        selectProducts();
      } else {
        const lowerCaseType = category.value.toLowerCase();
        categoryGroup = products.filter(
          (product) => product.type === lowerCaseType
        );

        selectProducts();
      }
    }
  }

  /**
   * return {*}
   */
  function selectProducts() {
    if (searchTerm.value.trim() === "") {
      finalGroup = categoryGroup;
    } else {
      const lowerCaseSearchTerm = searchTerm.value.trim().toLowerCase();
      finalGroup = categoryGroup.filter((product) =>
        product.name.includes(lowerCaseSearchTerm)
      );
    }
    updateDisplay();
  }

  /**
   *
   */
  function updateDisplay() {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    if (finalGroup.length === 0) {
      const para = document.createElement("p");
      para.textContent = "No results to display!";
      main.appendChild(para);
    } else {
      for (const product of finalGroup) {
        fetchBlob(product);
      }
    }
  }

  /**
   *
   * @param {array} product
   */
  function fetchBlob(product) {
    const url = `images/${product.image}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error : ${response.status}`);
        }

        return response.blob();
      })
      .then((blob) => showProduct(blob, product))
      .catch((err) => {
        console.log(`Fetch Error: ${err.message}`);
      });
  }

  /**
   *
   * @param {*} blob
   * @param {*} product
   */
  function showProduct(blob, product) {
    const objectURL = URL.createObjectURL(blob);
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    const para = document.createElement("p");
    const image = document.createElement("img");

    section.setAttribute("class", product.type);

    heading.textContent = product.name.replace(
      product.name.charAt(0),
      product.name.charAt(0).toUpperCase()
    );

    para.textContent = `$${product.price.toFixed(2)}`;

    image.src = objectURL;
    image.alt = product.name;

    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
    section.appendChild(image);
  }
}

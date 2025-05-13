const perfumes = [
    {
      name: "Armani Code",
      image: "code.webp",
      description: "Notat: Limon, Lëkurë, Tonka Bean. Aromë misterioze, e rafinuar dhe shumë mashkullore."
    },
    {
      name: "Acqua di Giò",
      image: "dio.webp",
      description: "Notat: Deti, Bergamot, Neroli, Cedar. Freski dhe pastërti që të çon drejt bregut të detit."
    },
    {
      name: "Stronger With You",
      image: "stronger.jpg",
      description: "Notat: Kardamom, Kastanjë, Vanilje. Aromë e ëmbël dhe pasionante për burrat modernë."
    },
    {
      name: "My Way",
      image: "way.webp",
      description: "Notat kryesore të My Way Giorgio Armani janë: Bargamot, Lule Portokalli."
    }
  ];


  const brands = [
    { name: "DIOR", link: "dior.html" },
    { name: "LOUIS VUITTON", link: "luis.html" },
    { name: "TOM FORD", link: "tomford.html" },
    { name: "Home", link: "index.html" }
  ];

  
  const perfumeList = document.getElementById("perfume-list");
  perfumes.forEach(perfume => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
      <img src="${perfume.image}" alt="${perfume.name}">
      <h3>${perfume.name}</h3>
      <p>${perfume.description}</p>
    `;
    perfumeList.appendChild(card);
  });

 
  const brandList = document.getElementById("brand-list");
  brands.forEach(brand => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${brand.link}">${brand.name}</a>`;
    brandList.appendChild(listItem);
  });
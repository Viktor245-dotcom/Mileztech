window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000);
});



// ── Year ──
      document.getElementById("year").textContent = new Date().getFullYear();

        const products = [
  {
    name: "Apple Ecosystem",
    price: "iPhones • MacBooks • AirPods",
    img: "images/apple.png"
  },
  {
    name: "Samsung Galaxy Series",
    price: "Phones • Tablets • Watches",
    img: "images/samsung.png"
  },
  {
    name: "Gaming Consoles",
    price: "PS5 • Xbox • Nintendo",
    img: "images/ps5.png"
  },
  {
    name: "Laptop Collection",
    price: "HP • Dell • Acer • Lenovo",
    img: "images/hp.png"
  },
  {
    name: "Audio Collection",
    price: "JBL • Onyx • Sony",
    img: "images/jbl.png"
  },
  {
    name: "Smart Accessories",
    price: "Watches • Earbuds • Gadgets",
    img: "images/smartwatch.png"
  }
];

    const grid = document.getElementById("products-grid");

products.forEach((p, i) => {
  const msg = encodeURIComponent(
    `Hi MilezTech, I'm interested in your ${p.name}.`
  );

  const delay = (i * 0.06).toFixed(2);

  grid.insertAdjacentHTML(
    "beforeend",
    `
    <div class="product-card fade-in" style="transition-delay:${delay}s">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>

      <div class="product-name">${p.name}</div>

      <div class="product-price">
        ${p.price}
      </div>

      <a href="https://wa.me/2349023769407?text=${msg}"
         target="_blank"
         rel="noopener"
         class="btn btn-order">
        <i class="fa-brands fa-whatsapp"></i>
        Explore Collection
      </a>
    </div>
    `
  );
});

      // ── Scroll fade-in ──
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(".fade-in")
        .forEach((el) => observer.observe(el));

        

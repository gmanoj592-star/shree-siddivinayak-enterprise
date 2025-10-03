const spices = [
  {
    name: "Red Chili Powder (Lal Mirch)",
  image: "assets/images/Red-chili.png",
    description: "Premium red chili powder for vibrant color and spicy flavor."
  },
   {
    name: "Turmeric Powder",
    image: "assets/images/Turmeric.png?auto=format&fit=crop&w=120&q=80",
    description: "Turmeric powder for rich color and mild spice."
  },
  {
    name: "Coriander Powder (Dhania)",
  image: "assets/images/Coriander.png",
    description: "Aromatic coriander powder, perfect for curries and garnishing."
  },
  {
    name: "Cumin Powder (Jeera)",
  image: "assets/images/cumin-powder.png",
    description: "Earthy cumin powder, essential for Indian and global cuisines."
  },
  {
    name: "Black Pepper Powder",
  image: "assets/images/Black-peper.png",
    description: "Finely ground black pepper for a spicy kick."
  },
  {
    name: "Garam Masala",
  image: "assets/images/garam-masala.png",
    description: "Classic garam masala blend for rich, aromatic flavor."
  },
  {
    name: "Sabji Masala",
  image: "assets/images/sabji.png",
    description: "Versatile Sabji masala for all vegetable dishes."
  },
   {
    name: "Kitchen King Masala",
  image: "assets/images/kitchen-king.png",
    description: "Versatile Sabji masala for all vegetable dishes."
  },
  {
    name: "Kasuri Methi",
  image: "assets/images/kasuri.png",
    description: "Kasuri methi powder made from dried Kasuri."
  }
];

function loadSpices() {
  const container = document.getElementById("spices-list");
  container.innerHTML = "";
  spices.forEach((spice, i) => {
    const card = document.createElement("div");
    card.className = "spice-card";
    card.innerHTML = `
      <img src="${spice.image}" alt="${spice.name}">
      <h3>${spice.name}</h3>
      <p>${spice.description}</p>
    `;
    container.appendChild(card);
    // Animate each card in sequence
    setTimeout(() => {
      card.classList.add('animated');
    }, 120 * i);
  });
  // Add hover effect with GSAP
  setTimeout(() => {
    document.querySelectorAll('.spice-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {scale: 1.07, boxShadow: '0 8px 32px #ffd70044', duration: 0.3});
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {scale: 1, boxShadow: '0 2px 12px rgba(166,124,82,0.10)', duration: 0.3});
      });
    });
  }, 120 * spices.length);
}

document.addEventListener("DOMContentLoaded", loadSpices);

const spices = [
  {
    name: "Red Chili Powder (Lal Mirch)",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=120&q=80",
    description: "Premium red chili powder for vibrant color and spicy flavor."
  },
  {
    name: "Kashmiri Chili Powder",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=120&q=80",
    description: "Kashmiri chili powder for rich color and mild spice."
  },
  {
    name: "Coriander Powder (Dhania)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80",
    description: "Aromatic coriander powder, perfect for curries and garnishing."
  },
  {
    name: "Cumin Powder (Jeera)",
    image: "https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=120&q=80",
    description: "Earthy cumin powder, essential for Indian and global cuisines."
  },
  {
    name: "Black Pepper Powder",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=120&q=80",
    description: "Finely ground black pepper for a spicy kick."
  },
  {
    name: "Garam Masala",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=120&q=80",
    description: "Classic garam masala blend for rich, aromatic flavor."
  },
  {
    name: "Chaat Masala",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80",
    description: "Tangy chaat masala to spice up snacks and salads."
  },
  {
    name: "Kitchen King Masala",
    image: "https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=120&q=80",
    description: "Versatile Kitchen King masala for all vegetable dishes."
  },
  {
    name: "Curry Powder",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=120&q=80",
    description: "A Western-style curry powder for global recipes."
  },
  {
    name: "Asafoetida (Hing)",
    image: "https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=120&q=80",
    description: "Strong and aromatic asafoetida, used in small quantities."
  },
  {
    name: "Dry Ginger Powder (Saunth)",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=120&q=80",
    description: "Pure dry ginger powder for warmth and flavor."
  },
  {
    name: "Amchur Powder (Dry Mango)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80",
    description: "Tangy amchur powder made from dried mango."
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

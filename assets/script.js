const spices = [
  {
    name: "Coriander Powder",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80",
    description: "Aromatic and fresh coriander powder, perfect for curries and garnishing."
  },
  {
    name: "Red Chilli Powder",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=80&q=80",
    description: "Premium red chilli powder for vibrant color and spicy flavor."
  },
  {
    name: "Turmeric Powder",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=80&q=80",
    description: "Pure turmeric powder, rich in color and health benefits."
  },
  {
    name: "Cumin Powder",
    image: "https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=80&q=80",
    description: "Earthy cumin powder, essential for Indian and global cuisines."
  },
  {
    name: "Sabji Masala",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=80&q=80",
    description: "Special blend for vegetable dishes, adds authentic taste."
  },
  {
    name: "Kabab Masala",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=80&q=80",
    description: "Flavorful kabab masala for perfect grilled and tandoori kababs."
  },
  {
    name: "Chicken Masala",
    image: "https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=80&q=80",
    description: "Rich chicken masala for delicious and aromatic chicken curries."
  },
  {
    name: "Chat Masala",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80",
    description: "Tangy chat masala to spice up snacks and salads."
  }
];

function loadSpices() {
  const container = document.getElementById("spices-list");
  container.innerHTML = "";
  spices.forEach(spice => {
    const card = document.createElement("div");
    card.className = "spice-card";
    card.innerHTML = `
      <img src="${spice.image}" alt="${spice.name}">
      <h3>${spice.name}</h3>
      <p>${spice.description}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadSpices);

const spices = [
  {
    name: "Coriander Powder",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Aromatic and fresh coriander powder, perfect for curries and garnishing."
  },
  {
    name: "Red Chilli Powder",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Premium red chilli powder for vibrant color and spicy flavor."
  },
  {
    name: "Turmeric Powder",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Pure turmeric powder, rich in color and health benefits."
  },
  {
    name: "Cumin Powder",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Earthy cumin powder, essential for Indian and global cuisines."
  },
  {
    name: "Sabji Masala",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Special blend for vegetable dishes, adds authentic taste."
  },
  {
    name: "Kabab Masala",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Flavorful kabab masala for perfect grilled and tandoori kababs."
  },
  {
    name: "Chicken Masala",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Rich chicken masala for delicious and aromatic chicken curries."
  },
  {
    name: "Chat Masala",
  image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=120&h=120&fit=crop",
    description: "Tangy chat masala to spice up snacks and salads."
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

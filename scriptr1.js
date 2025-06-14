const menuData = [
    {
      category: "Paneer",
      items: [
        { name: "Matar Paneer", half: 80, full: 120 },
        { name: "Kaju Paneer", half: 120, full: 170 },
        { name: "Sahi Paneer", half: 80, full: 120 },
        { name: "Chola Paneer", half: 80, full: 120 },
        { name: "Kaju Kari", half: 100, full: 150 }
      ]
    },
    {
      category: "Dal",
      items: [
        { name: "Dal Fry", half: 60, full: 90 },
        { name: "Dak Tadka", half: 70, full: 100 },
        { name: "Dal Paneer", half: 70, full: 100 }
      ]
    },
    {
      category: "Rice",
      items: [
        { name: "Plain Rice", half: 30, full: 50 },
        { name: "Jeera Rice", half: 40, full: 60 },
        { name: "Masala Rice", half: 50, full: 70 },
        { name: "Lapeta", half: 60, full: 90 }
      ]
    },
    {
      category: "Sabji",
      items: [
        { name: "Sev Masala", half: 60, full: 90 },
        { name: "Sev Bhaji", half: 70, full: 100 },
        { name: "Sev Tamatar", half: 60, full: 90 },
        { name: "Tamatar Masala", half: 60, full: 90 },
        { name: "Tamatar Chatni", half: 60, full: 90 },
        { name: "Khadi Pakoda", half: 60, full: 90 },
        { name: "Khadi Tadka", half: 70, full: 100 }
      ]
    },
    {
      category: "Roti",
      items: [
        { name: "Tawa Roti", price: 6 },
        { name: "Tawa Butter Roti", price: 8 },
        { name: "Tandoori Roti", price: 7 },
        { name: "Tandoori Butter Roti", price: 8 },
        { name: "Lachha Paratha", price: 25 }
      ]
    },
    {
      category: "Other",
      items: [
        { name: "Papad Dry", price: 20 },
        { name: "Papad Masala", price: 30 },
        { name: "Bati", price: 10 },
        { name: "Dahi (Half)", price: 30 },
        { name: "Dahi (Full)", price: 50 },
        { name: "Water Bottle (Small)", price: 10 },
        { name: "Water Bottle (Large)", price: 20 }
      ]
    }
  ];
  
  const menuContainer = document.getElementById("menu-content");
  
  menuData.forEach(section => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";
    categoryDiv.innerHTML = `<h2>${section.category}</h2>`;
  
    section.items.forEach(item => {
      let priceText = '';
      if (item.half && item.full) {
        priceText = `Half: ₹${item.half} | Full: ₹${item.full}`;
      } else {
        priceText = `₹${item.price}`;
      }
  
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";
      itemDiv.innerHTML = `<strong>${item.name}</strong> - ${priceText}`;
      categoryDiv.appendChild(itemDiv);
    });
  
    menuContainer.appendChild(categoryDiv);
  });
  
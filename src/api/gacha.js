export default function handler(req, res) {
    const items = [
      { name: "Red seed", rarity: "Common" },
      { name: "Blue seed", rarity: "Common" },
      { name: "Green seed", rarity: "Uncommon" },
      { name: "Normal Fertilizer", rarity: "Uncommon" },
      { name: "Good Fertilizer", rarity: "Rare" },
      { name: "Super Fertilizer", rarity: "Epic" },
      { name: "Watering Pot", rarity: "Uncommon" }
    ];
  
    const randomIndex = Math.floor(Math.random() * items.length);
    const result = items[randomIndex];
  
    res.status(200).json({
      result
    });
  }




  
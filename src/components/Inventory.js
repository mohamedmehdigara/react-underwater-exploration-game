import React, { useState } from 'react';
import { InventoryContainer, ItemList, Item, ItemDetails, ItemStatus } from './Styled';
import { FaCheckCircle } from 'react-icons/fa'; // Import icons for item status

function Inventory({ items }) {
  // State for sorting and filtering
  const [sortType, setSortType] = useState('name'); // Default sorting by name
  const [filterType, setFilterType] = useState('all'); // Default filtering all items

  // Function to handle sorting selection
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  // Function to handle filtering selection
  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  // Function to handle item usage
  const handleUseItem = (item) => {
    // Logic to use the item
    console.log(`Item ${item.name} used`);
  };

  return (
    <InventoryContainer>
      {/* Sorting and filtering controls */}
      <div>
        <label>Sort by:</label>
        <select value={sortType} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="rarity">Rarity</option>
        </select>
        <label>Filter by:</label>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="consumable">Consumable</option>
          <option value="equipment">Equipment</option>
        </select>
      </div>
      {/* Inventory items list */}
      <ItemList>
        {items &&
          items
            .filter((item) => filterType === 'all' || item.type === filterType)
            .sort((a, b) => {
              if (sortType === 'name') {
                return a.name.localeCompare(b.name);
              } else if (sortType === 'type') {
                return a.type.localeCompare(b.type);
              } else {
                return a.rarity - b.rarity;
              }
            })
            .map((item, index) => (
              <Item key={index}>
                {/* Render each item in the inventory */}
                <ItemDetails>
                  <span>{item.name}</span>
                  <p>Description: {item.description}</p>
                  <p>Rarity: {item.rarity}</p>
                  <button onClick={() => handleUseItem(item)}>Use</button>
                </ItemDetails>
                <ItemStatus used={item.used}>
                  {item.used && <FaCheckCircle color="green" />} {/* Render checkmark icon if item is used */}
                  {item.used ? 'Used' : 'Unused'}
                </ItemStatus>
              </Item>
            ))}
      </ItemList>
    </InventoryContainer>
  );
}

export default Inventory;

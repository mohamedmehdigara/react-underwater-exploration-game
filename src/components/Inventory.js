// Inventory.js
import React from 'react';
import { InventoryContainer, ItemList, Item, ItemDetails } from './Styled';
import { FaCheckCircle } from 'react-icons/fa'; // Import icons for item status

function Inventory({ items }) {
  return (
    <InventoryContainer>
      <h2>Inventory</h2>
      <ItemList>
        {items && items.map((item, index) => (
          <Item key={index}>
            {/* Render each item in the inventory */}
            <ItemDetails>
              <span>{item.name}</span>
              <button onClick={() => handleUseItem(item)}>Use</button>
            </ItemDetails>
            {item.used && <FaCheckCircle color="green" />} {/* Render checkmark icon if item is used */}
          </Item>
        ))}
      </ItemList>
    </InventoryContainer>
  );
}

function handleUseItem(item) {
  // Logic to use the item
  console.log(`Item ${item.name} used`);
}

export default Inventory;

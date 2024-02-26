import React from 'react';
import { InventoryContainer, ItemList, Item, ItemDetails, ItemStatus } from './Styled';
import { FaCheckCircle } from 'react-icons/fa'; // Import icons for item status

function Inventory({ items }) {
  function handleUseItem(item) {
    // Logic to use the item
    console.log(`Item ${item.name} used`);
  }

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

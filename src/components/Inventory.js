// Inventory.js
import React from 'react';
import { InventoryContainer, ItemList, Item } from './Styled';

function Inventory({ items }) {
  return (
    <InventoryContainer>
      <h2>Inventory</h2>
      <ItemList>
        {items && items.map((item, index) => (
          <Item key={index}>
            {/* Render each item in the inventory */}
            {item.name}
          </Item>
        ))}
      </ItemList>
    </InventoryContainer>
  );
}

export default Inventory;

import React, { useState, useEffect } from 'react';

const ItemList = ({ items, onRemoveItem }) => {
  const [itemList, setItemList] = useState(items);

  useEffect(() => {
    setItemList(items);
  }, [items]);

  return (
    <div className="my-4">
      {itemList.length < 2 && (
        <p className="text-red-400 pb-2">
          No items added yet. Add at least two items to randomly select one.
        </p>
      )}

      {itemList.map((item) => (
        <div
          key={item.text}
          className="bg-white rounded-lg shadow-md p-4 my-2 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{item.text}</p>
            <p className="text-gray-500">Priority: {item.weight}</p>
          </div>

          <button
            onClick={() => onRemoveItem(item)}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

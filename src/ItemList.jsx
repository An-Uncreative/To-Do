import LineItem from "./LineItem.jsx";
export default function ItemList({ items, handleCheck, deleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}

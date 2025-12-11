import { FaTrashAlt } from "react-icons/fa";

export default function LineItem({ item, handleCheck, deleteItem }) {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => deleteItem(item.id)}
      />
    </li>
  );
}

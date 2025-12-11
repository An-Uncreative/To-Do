import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

export default function AddItems({ newItems, setNewItems, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem"> Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
        ref={inputRef}
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}

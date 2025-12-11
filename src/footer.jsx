const Footer = ({ size }) => {
    const today = new Date();
    return (
        <footer>
            <p>{size} List {size === 1 ? "Item" : "Items"}</p>
            <p>&copy; {today.getFullYear()} My React App</p>
        </footer>
    );
 }
export default Footer;
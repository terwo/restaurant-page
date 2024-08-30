export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Our Menu</h1>
        <p>Indulge in our exquisite selection of macarons, each crafted to perfection:</p>
        <ul>
            <li>
                <h3>Classic Vanilla Bean</h3>
                <p>Smooth, creamy, and utterly irresistible.</p>
            </li>
            <li>
                <h3>Decadent Dark Chocolate</h3>
                <p>Rich and intense, for the true chocolate lover.</p>
            </li>
            <li>
                <h3>Zesty Lemon</h3>
                <p>A burst of citrus in every bite.</p>
            </li>
            <li>
                <h3>Lavender Dreams</h3>
                <p>Delicately floral, reminiscent of Provence.</p>
            </li>
            <li>
                <h3>Salted Caramel</h3>
                <p>The perfect balance of sweet and salty.</p>
            </li>
            <li>
                <h3>Pistachio Paradise</h3>
                <p>Nutty, creamy, and oh-so-green.</p>
            </li>
        </ul>
        <h2>Seasonal Specials</h2>
        <p>Don't miss our rotating selection of seasonal flavors! Ask our staff about today's special macaron.</p>
        <h2>Beverages</h2>
        <p>Complement your macarons with our selection of fine teas, artisanal coffees, and refreshing house-made lemonades.</p>
    `;
}



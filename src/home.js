export default function loadHome() {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = "Franklin's MAcarons";

    const p = document.createElement('p');
    p.textContent = "Franklin's Macarons is a family-owned bakery that has been serving the community for over 10 years. We specialize in French macarons, a gluten-free pastry that comes in a variety of flavors. Our other offerings include croissants, pastries, and coffee. We are open every day from 6am to 6pm.";

    content.appendChild(h1);
    content.appendChild(p);
}
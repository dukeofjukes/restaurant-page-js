const loadHome = () => {
  const content = document.querySelector(".content");

  content.innerHTML = ` 
    <h2>Home</h2>
    <div class="card">
      <h2>About</h2>
      <p>Fusion restaurant serving all day coffee and cocktails.</p>
    </div>
    <div class="card">
      <h2>Hours</h2>
      <p>Mon-Thu: 12pm-11pm</p>
      <p>Fri-Sun: 12pm-2am</p>
    </div>
    <div class="card">
      <h2>Location</h2>
      <p>123 Bugg Ln, Bugg City, Texas</p>
    </div>
  `;
};

const loadMenu = () => {
  const content = document.querySelector(".content");

  content.innerHTML = `
    <h2>Menu</h2>   
    <div class="card">
      <h2>Birria Okonomiyaki</h2>
        <p>Cabbage and scallion pancake topped with pork belly, oaxaca cheese, birria reduction, white onions, and cilantro.</p>
    </div>
    <div class="card">
      <h2>Chicken Karaage</h2>
      <p>Thigh, drumstick, and breast fried in crisp karaage-style batter. Served with steamed vegetables, biscuit, and tomatillo-lime hot sauce.</p>
      <p>Try it boneless in a sandwich or two tacos.</p>
    </div>
  `;
};

const loadContact = () => {
  const content = document.querySelector(".content");

  content.innerHTML = `
    <h2>Contact</h2>
    <div class="card">
      <h2>Call us</h2>
      <p>(555)123-1234</p>
    </div>
  `;
};

export { loadHome, loadMenu, loadContact };

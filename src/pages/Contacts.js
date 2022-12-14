const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Lviv, Ukraine</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p><a href="tel:+380953910033">+38(095)-391-01-33</a></p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p><a href="malito:maxim.sv143@gmail.com">maxim.sv143@gmail.com</a></p>
            </li>
          </ul>  
      </div>
    </main>
  );
}
 
export default Contacts;
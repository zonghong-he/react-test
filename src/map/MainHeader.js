import { useState } from 'react';
import SearchGroup from './SearchGroup';

function MainHeader() {
  const [activeText, setActiveText] = useState('');
  const menuItem = ['Home', 'About Us', 'Proudct', 'Seveice', 'Information'];
  return (
    <>
      <header className="main-header">
        <div className="logo-group">
          <a href="#/">
            <img className="logo" src="#" />
          </a>
          <p>Name</p>
        </div>
        <div>
          <SearchGroup></SearchGroup>
          <nav className="main-nav">
            <ul className="list-unstyled">
              {menuItem.map((item) => {
                return (
                  <li key={Math.random().toString(36).replace('0.', '')}>
                    <a
                      href="#/"
                      className={activeText === item ? 'active' : ''}
                      onClick={() => {
                        setActiveText(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
              {/* <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/">About As</a>
              </li>
              <li>
                <a href="#/">Proudct</a>
              </li>
              <li>
                <a href="#/">Severice</a>
              </li>
              <li>
                <a href="#/">Information</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default MainHeader;

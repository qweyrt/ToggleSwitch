import React from 'react';
import './App.css';
import ToggleTest from './Containers/ToggleTest.js'
function App() {
  const plans = [{
    logo: "shopping-cart",
    name1: "Basic",
    price: "$100",
    privilege: [
      { name: '01 Seat', included: true },
      { name: 'Tea & Coffee Breaks', included: false },
      { name: 'Wifi Available', included: false },
      { name: 'Exclusive Seatings', included: false }
    ]
  }, {
    logo: "car",
    name1: "Standard",
    price: "$200",
    privilege: [
      { name: '02 Seat', included: true },
      { name: 'Tea & Coffee Breaks', included: true },
      { name: 'Wifi Available', included: false },
      { name: 'Exclusive Seatings', included: false }
    ]
  }, {
    logo: "rocket",
    name1: "Premium",
    price: "$300",
    privilege: [
      { name: '04 Seat', included: true },
      { name: 'Tea & Coffee Breaks', included: true },
      { name: 'Wifi Available', included: true },
      { name: 'Exclusive Seatings', included: true }
    ]
  }];

  const props = [{
    icon: "microphone",
    numbers: "36+",
    words: "Unique Seasons"
  }, {
    icon: "male",
    numbers: "12",
    words: "Amazing Speakers"
  }, {
    icon: "coffee",
    numbers: "45",
    words: "Food Stalls"
  }, {
    icon: "book",
    numbers: "2350+",
    words: "Books Available"
  }, {
  }];
  const toggles = [
    { name: "Email notification" },
    { name: "Push notification" },
    { name: "Monthly reports" },
    { name: "Quarter reports" }
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {toggles.map(t =>
            <div className="col-8">
              <h6>{t.name}</h6>
            </div>
          )}
          <div className="col">
            <ToggleTest />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {plans.map(p =>
            <div className="card col-md-3 mx-4 text-center">
              <div className="header mt-4">
                <i className={`fa fa-${p.logo}`} />
                <p className="header2">{p.name1}</p>
              </div>
              <div className="body align-self-center">
                <h1>{p.price}</h1>
                <p>including all taxes</p>
                <div className="mt-4 text-left">
                  {p.privilege.map(p =>
                    <div className={p.included ? 'Privilege-included' : 'Privilege-excluded'}>
                      <i className={`fas fa-${p.included ? 'check' : 'times'}`}></i>
                      <span className="px-2">{p.name}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="my-4">
                <button className="btn btn-primary py-1 px-5 button">
                  <i className="fas fa-ticket-alt"></i>
                  <span className="mx-2">Buy now</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container mt-5">
        <header className="row" style={{ background: '#e3f7f8', borderRadius: '50px' }}>
          {props.map(p =>
            <div className="row col-md-3">
              <div className="col-sm-4 align-self-center icon">
                <span className="float-right">
                  <i className={`fas fa-${p.icon}`}></i>
                </span>
              </div>
              <div className="col-md-8">
                <h2 className="my-0">{p.numbers}</h2>
                <p className="words">{p.words}</p>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}

export default App;

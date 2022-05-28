import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restaurents from "./components/Restaurents";
import userinfo from "./Data/UserInfo.json";
import offers from "./Data/offer.json";
import restaurents from "./Data/restaurents.json";
import { useState } from "react";

function App() {
  const [filterby, setFilterby] = useState(0);
  const [data, setData] = useState(restaurents);

  const fiters = {
    1: "Cost High to Low",
    2: "Cost Low to High",
    3: "Ratings",
    4: "Delivery Time",
    5: "Relevance",
    6: "Card",
    7: "Online",
  };

  const updateFilter = (id) => {
    id = Number(id);
    setFilterby(id);
    switch (id) {
      case 1:
        let HighToLow = data.sort((a, b) => {
          if (b.costfortwo > a.costfortwo) return 1;
          if (b.costfortwo < a.costfortwo) return -1;
        });
        //  console.log(HighToLow)
        setData(HighToLow);
        break;

      case 2:
        let LowToHigh = data.sort((a, b) => {
          if (a.costfortwo > b.costfortwo) return 1;
          if (a.costfortwo < b.costfortwo) return -1;
        });
        //  console.log(HighToLow)
        setData(LowToHigh);
        break;

      case 3:
        let newReatingData = data.sort((a, b) => {
          console.log(a.rating);
          if (b.rating > a.rating) return 1;
          if (b.rating < a.rating) return -1;
        });
        setData(newReatingData);
        console.log(newReatingData);
        break;

        case 6:
          let cardData = data.filter((item)=> { return item.Payment_method.card==true})
          setData(cardData);
          break;
          case 7:
            let CashData = data.filter((item)=> { return item.Payment_method.cash==true})
            setData(CashData);
            break;
      default:
    }
  };

  return (
    <div>
      <Navbar {...userinfo.location} />
      <Offers offers={offers} />
      <section classNameName="near-you">
        <Filters
          Filters={fiters}
          newFilter={updateFilter}
          filterby={filterby}
        />
        <Restaurents restaurents={data} />
      </section>
    </div>
  );
}

export default App;

import React from "react";
import img from "./ugur-img.jpeg";
import funny from "./funny.png";
import "./App.css";
import MessagesList from "./components/MessagesList";
import AddMessages from "./components/AddMessages";

function App() {
  return (
    <div className="App">
      <div className="container my-4 align-items-center">
        <div className="col-md-12 text-center mb-5">
          <h4>Uğur Türkmen'in anısına bir şiir</h4>
          <p>
            Unutma şimdi evsiz kalacak çocuklar <br />
            Güneş doğmazsa büyüyemez çiçekler <br />
            Umudumuzu yitirtme hayata karşı <br />
            Rüzgar ol tekrar gel sabah olmadan. <br />
            <br />
            Sen ki en büyük bug'ların azılı düşmanı <br />
            Sen ki çıkan sürümlerin tek master'ı <br />
            Sen ki roket takımının bonus kafası <br></br>
            Rüzgar ol tekrar gel sabah olmadan. <br />
            <br />
            Yazdığın kodlarda çıkmazdı hata <br />
            Görmedim işinde henüz fix be aga <br />
            Herkes gider sen kalırdın yanımda <br />
            Rüzgar ol yine gel sabah olmadan. <br />
            <br />
            Uzun uzun bakacak herkes arkandan. <br />
            Jira'da çıkacak ismin bir süre <br />
            Ardında yaşlı gözler olsa da <br />
            Seni hep yaşatacağız, sen git sadece. <br />
          </p>
        </div>
        <div className="col-md-12">
          <img width="100%" src={funny} alt="bonus" />
        </div>
      </div>

      <img className="ugur mt-5" src={img} alt="ugur-turkmen-bonus-kafa" />
      <div className="container my-5">
        <p className="fs-6">
          Bu site artık aramızda olmayacak olan Uğur Türkmen'in anısına Yasin
          Eryılmaz tarafından yapılmıştır.
        </p>
        <h2 className="mb-4">Ona bir hatıra mesajı bırak...</h2>

        <AddMessages />

        <MessagesList />
      </div>
    </div>
  );
}

export default App;

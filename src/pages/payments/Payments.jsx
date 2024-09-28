import React from 'react';
import { Navbar } from "../../components";

import "./payments.css";
import { Footer } from "../../containers";

const Payments = () => {
  return (
    <div>
      <Navbar />
      <div className="bars__payments section__padding">
        <h1>Fizetési és Szállítási módok</h1>
        <h2>Árak</h2>
        <p>Az árak forintban értendő, bruttó ár. A számlák kiállítása ALANYI ADÓMENTES – AAM (0%). Az árak tájékoztató
          jellegűek, az árváltozás jogát fenntartjuk.</p>
        <h2>Fizetési módok</h2>
        <h3>Banki átutalás</h3>
        <p>A szolgáltatások ellenértékét banki átutalás útján is rendezheti. Az átutaláshoz szükséges adatok:<br />
          Kedvezményezett neve: Pál Gabriella EV<br />
          Kedvezményezett bankja: Unicredit Bank<br />
          Kedvezményezett számlaszáma: 12345678-12345678<br />
          IBAN: HU771234567812345678
        </p>
        <h3>Készpénzes fizetés</h3>
        <p>Természetesen lehetőség van a helyszínen is fizetni készpénzben.</p>
        <h2>Árak</h2>
        <p>
          Az árak forintban értendő, bruttó ár. A számlák kiállítása ALANYI ADÓMENTES – AAM (0%).<br />
          Az árak tájékoztató jellegűek, az árváltozás jogát fenntartjuk.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Payments;

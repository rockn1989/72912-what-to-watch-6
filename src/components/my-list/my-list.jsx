import React from "react";
import CardList from '../card-list/card-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useSelector} from 'react-redux';
import {NameSpace} from '../../store/root-reducer';

const MyList = () => {
  const {films} = useSelector((state) => state[NameSpace.FILMS_DATA]);

  return (
    <div className="user-page">
      <Header className={`user-page__head`}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <CardList filmsList={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyList;

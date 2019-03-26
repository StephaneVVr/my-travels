import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Travel from './travel';

const travelOne = {
    destination: 'Quelque part',
    country: 'Dans le monde',
    image: 'https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/07/inspiration-voyage.jpg',
    distance: 'Loin'
};

const travelTwo = {
    destination: 'Banane',
    country: 'Courgette',
    image: 'http://www.unmonde.fr/wp-content/uploads/2014/05/Fotolia_43783967_Subscription_S.jpg',
    distance: '45 000km'
};

const App = () => <div>
    <Travel {...travelOne} /> 
    <Travel {...travelTwo} />
</div>
    
ReactDOM.render(<App />, document.getElementById('root'));
    

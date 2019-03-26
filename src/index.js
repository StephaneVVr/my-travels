import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Travel from './travel';

const travelArray = [

    {
        destination: 'Quelque part',
        country: 'Dans le monde',
        image: 'https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/07/inspiration-voyage.jpg',
        distance: 'Loin'
    },
    {
        destination: 'Banane',
        country: 'Courgette',
        image: 'http://www.unmonde.fr/wp-content/uploads/2014/05/Fotolia_43783967_Subscription_S.jpg',
        distance: '45 000km'
    },
    {
        destination: 'Banane',
        country: 'Courgette',
        image: 'http://www.unmonde.fr/wp-content/uploads/2014/05/Fotolia_43783967_Subscription_S.jpg',
        distance: '45 000km'
    },
    {
        destination: 'Banane',
        country: 'Courgette',
        image: 'http://www.unmonde.fr/wp-content/uploads/2014/05/Fotolia_43783967_Subscription_S.jpg',
        distance: '45 000km'
    },
    {
        destination: 'Banane',
        country: 'Courgette',
        image: 'http://www.unmonde.fr/wp-content/uploads/2014/05/Fotolia_43783967_Subscription_S.jpg',
        distance: '45 000km'
    }
];

class Files extends Component {
    render() {
        return ( 
            travelArray.map((array) => {
            return <Travel {...array} />
        }))
        
    }
};

ReactDOM.render(<Files />, document.getElementById('root'));


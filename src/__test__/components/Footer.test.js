import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer/Footer';


describe('Footer Snapshot', () => {

test('Comprobar la UI del componente Footer sea siempre la misma Madafaka', () => {
    
    const footer = create(<Footer />);
    expect (footer.toJSON()).toMatchSnapshot();

});


});
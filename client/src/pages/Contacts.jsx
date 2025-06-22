import React from 'react';
import ContactsIntro from '../components/contacts/ContactsIntro';
import ContactsLink from '../components/contacts/ContactsLink';
import LocationMap from '../components/contacts/LocationMap';
import Faq from '../components/about/Faq';

function Contacts() {
  return (
    <div>
      <ContactsIntro />
      <ContactsLink />
      <Faq />
      <LocationMap />
    </div>
  );
}

export default Contacts;

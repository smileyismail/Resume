import React from "react";

import { contacts } from "../data/contacts";

const Contacts = () => {
  return (
    <div className="h-full flex flex-col justify-evenly">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          className="flex justify-start items-center gap-1 text-sm"
          target="_"
        >
          <div className="text-2xl text-accent">{contact.icon}</div>
          <p className="mb-0.5 text-sm text-neutral-100">{contact.title}</p>
        </a>
      ))}
    </div>
  );
};

export default Contacts;

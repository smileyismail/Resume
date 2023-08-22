import React from "react";

import { contacts } from "../data/contacts";

const Contacts = () => {
  return (
    <div className="h-full text-sm flex flex-col justify-evenly">
      {contacts.map((contact: any) => (
        <a
          key={contact.id}
          href={contact.link}
          className="flex justify-start items-center gap-1 text-sm"
          target="_"
        >
          <div className="text-2xl text-accent">{contact.icon}</div>
          <p className="mb-0.5 text-neutral-100">{contact.title}</p>
        </a>
      ))}
    </div>
  );
};

export default Contacts;

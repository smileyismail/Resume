import { callCenterContacts } from "../data/contacts";

const Contacts = () => {
  return (
    <div
      className={`h-full flex flex-col ${
        callCenterContacts.length === 6 ? "justify-evenly" : "justify-evenly"
      }`}
    >
      {callCenterContacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          className="flex justify-start items-center gap-1 text-sm"
          target="_"
        >
          <div className="text-2xl text-accent">{contact.icon}</div>
          <p className="mb-0.5 text-sm text-neutral-100 mt-1">
            {contact.title}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Contacts;

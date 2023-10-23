import { developerContacts } from "../data/contacts";

const Contacts = () => {
  return (
    <div
      className={`h-full flex flex-col ${
        developerContacts.length === 6 ? "justify-evenly" : "justify-evenly"
      }`}
    >
      {developerContacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          className="flex justify-start items-center gap-1"
          target="_"
        >
          <div className="text-2xl text-accent">{contact.icon}</div>
          <p className="text-[15px] font-semibold text-neutral-100 my-1">
            {contact.title}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Contacts;

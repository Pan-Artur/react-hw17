import { useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { StyledPhoneList } from "./StyledPhoneList";

export const PhoneList = ({ contacts, onDelete, value, onChange }) => {
  const prevContactsRef = useRef();

  useEffect(() => {
    if (prevContactsRef.current !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    prevContactsRef.current = contacts;
  }, [contacts]);

  const hasContacts = contacts.length > 0;

  return (
    <StyledPhoneList>
      <h2>Contacts</h2>
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </div>

      {!hasContacts && <p>No contacts yet...</p>}

      {hasContacts && (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <FaPhoneAlt />
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </StyledPhoneList>
  );
};
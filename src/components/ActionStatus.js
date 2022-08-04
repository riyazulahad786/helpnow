import React from "react";

const ActionStatus = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.title}</td>
      <td>{contact.description}</td>
      <td>{contact.status}</td>
      <td>
        <button style={{  backgroundColor:" rgb(117, 201, 250)"}}
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button style={{  backgroundColor:"  rgb(199, 53, 53)"}}
        type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ActionStatus;

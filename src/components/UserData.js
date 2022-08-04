import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
// import "./App.css";
import data from "../mock-data.json";
import ActionStatus from "../components/ActionStatus";
import UpdateData from "../components/updateData";
import { Header } from "../components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";



 export const UserData = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
   description: "",
    status: "",
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      title: addFormData.title,
      description: addFormData.description,
      status: addFormData.status,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      title: editFormData.title,
      description: editFormData.description,
      status: editFormData.status,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      title: contact.title,
      description: contact.description,
      status: contact.status,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    
    <div className="app-container">
    <div>
    
    
    </div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>status</th>
              <th>Action</th>
              {/* <th>DateTime</th> */}
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
              
                {editContactId === contact.id ? (
                  <UpdateData
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ActionStatus
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="add_contact" >Add </h2>
      <form className="postData" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
          <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a description..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="status"
          required="required"
          placeholder="Enter a something..."
          onChange={handleAddFormChange}
        />
      
        <button type="submit" className="btn">save</button>
      </form>
    </div>
  );
};


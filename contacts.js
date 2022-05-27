const fs = require("fs/promises");
const path = require("path");
const {v4} = require("uuid");

// // contacts.js

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactsPath);

// // TODO: задокументировать каждую функцию

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}

// async function getContactById(contactId) {
//     const contacts = await listContacts();
//     const data = contacts.find(contact => contact.id === contactId);
//     // console.log(data)
//     return data ? data : null; 
// }

async function removeContact(contactId) {
    const newContacts = await listContacts();
    const index = newContacts.findIndex(item => item.id === contactId);
    if (index === -1) {
        return null
    };
    const [removeContact] = newContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    return removeContact;
}

// async function addContact(name, email, phone) {
//     const newContact = {
//         id: v4(),
//         name: name,
//         email: email,
//         phone: phone
//     };
//     const allContacts = await listContacts();
//     allContacts.push(newContact);
//     await fs.writeFile(contactsPath, JSON.stringify(allContacts));      
//     return newContact;
// }

// addContact(name: "asd", email: "asvad@vdf.com" , phone: "816161")

// module.exports =  {listContacts, getContactById, removeContact, addContact};
module.exports =  {removeContact};





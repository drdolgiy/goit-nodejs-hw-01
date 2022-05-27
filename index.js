const contactsOperations = require("./contacts");
const {v4} = require("uuid");


const invokeAction = async ({ action, id, data }) => {
    switch (action) {
        // case "list":
        //     const list = await contactsOperations.listContacts();
        //     // console.log(data);
        //     break;
        // case "getById":
        //     const contact = await contactsOperations.getContactById(id);
        //     if (!contact) {
        //         throw new Error("not found!")
        //     }
        //     // console.log(contact);
        //     break;
        // case "addContact":
        //     const newContact = await contactsOperations.addContact(data);
        //     console.log(newContact);
        //     break;
        case "removeContact":
            const removeContact = await contactsOperations.removeContact(id);
            console.log(removeContact);
            break;
        default:
            console.log("Unknown action")
    }
}
// const id = "1"
// const newContact = {
//     id: v4(),
//     name: "name",
//     email: "email",
//     phone: "phone",
// };

invokeAction({ action: "removeContact", id });
// invokeAction({ action: "getById", id});
// invokeAction({action : "getContactById", id});
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const arr = hideBin(process.argv);
const { argv } = yargs(arr).option("id", {
    type: "string"
});
const contactsOperations = require("./contacts");

async function invokeAction ({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const getList = await contactsOperations.listContacts();
            console.table(getList);
            break;
        case "get":
            const contact = await contactsOperations.getContactById(id);
            if (!contact) {
                throw new Error("not found!")
            };
            console.log(contact);
            break;
        case "add":
            const newContact = await contactsOperations.addContact(name, email, phone);
            console.log(newContact);
            break;
        case "remove":
            const removeContact = await contactsOperations.removeContact(id);
            console.log(removeContact)
            break;
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);
import asyncHandler from "express-async-handler";

export const contactControllers = {

//@desc Get all contacts
//route GET/api/contacts 
//Access public

    getContacts: asyncHandler(async (req, res) => {
        res.status(200).json({message: "Get all response"})
    }),

//@desc Create new contact
//route POST/api/contacts 
//Access public

    createContact: asyncHandler(async (req, res) => {
        console.log("the request body is :", req.body);
        const { name, email, phone} = req.body;
          if (!name|| !email || !phone ) {
            res.status(400);
            throw new Error ("all fields are mandatory !"); 
          }

        res.status(201).json({message: "Create contact"});
    }),

//@desc Get contact
//route GET/api/contacts/:id 
//Access public

    getContact: asyncHandler(async (req, res) => {
        const id = req.params.id;
    res.status(200).json({message:`Get contact for ${id}` })
    }),

//@desc Update new contact
//route PUT/api/contacts/:id 
//Access public

    updateContact: asyncHandler(async (req, res) => {
        const id = req.params.id;
    res.status(200).json({message:`update contact for ${id}` })
    }),

//@desc Delete a contact
//route DELETE/api/contacts/:id  
//Access public
    deleteContact: asyncHandler(async (req, res) => {
        const id = req.params.id;
    res.status(200).json({message: `delete contact for ${id}` })
}),

};


import { Router } from "express";

import { contactControllers } from "./../controllers/contactControllers.mjs";

const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = contactControllers;

const router = Router();

router.route("/").get(getContacts);
router.route("/").post(createContact);
router.route("/:id").get(getContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);

export default router

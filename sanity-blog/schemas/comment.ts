import { defineField, defineType } from "sanity";

export default defineType({
    name: 'comment',
    title: 'comment',
    type: "document",
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            title: 'Approved',
            name: 'Approved',
            type: "boolean",
        }),
        defineField({
            name: 'email',
            type: 'string',
        }),
        defineField({
            name: 'post',
            type: 'reference',
            to: {type: "post"},
        }),
    ],
})
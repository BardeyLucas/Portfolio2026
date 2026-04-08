// schemas/BookType.ts
import { defineType } from 'sanity'

export const bookType = defineType({
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
        {
        name: 'priority',
        title: 'Priority',
        type: 'number',
        initialValue: 999,
        },
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        initialValue: 'Placeholder Title',
        },
        {
        name: 'tinyTitle',
        title: 'Tiny Title',
        type: 'string',
        initialValue: 'Placeholder Title',
        },
        {
            name: 'cover',
            title: 'Cover',
            type: 'array',
            of: [
                {
                type: 'image',
                options: {
                    hotspot: true,
                },
                fields: [
                    {
                    name: 'alt',
                    title: 'Texte alternatif',
                    type: 'string',
                    validation: (rule) => rule.required(),
                    },
                ],
                },
            ],
            validation: (rule) => rule.required(),
        },
        {
            name: 'heroImage',
            title: 'Hero',
            type: 'array',
            of: [
                {
                type: 'image',
                options: {
                    hotspot: true,
                },
                fields: [
                    {
                    name: 'alt',
                    title: 'Texte alternatif',
                    type: 'string',
                    validation: (rule) => rule.required(),
                    },
                ],
                },
            ],
            validation: (rule) => rule.required(),
        },
        {
            name: 'etiquettes',
            title: 'Etiquettes',
            type: 'array',
            of: [
                {
                type: 'object',
                name: 'etiquette',
                title: 'Etiquette',
                fields: [
                    {
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                    validation: (rule) => rule.required(),
                    },
                    {
                    name: 'affichage',
                    title: 'Affichage',
                    type: 'boolean',
                    initialValue: false,
                    validation: (rule) => rule.required(),
                    },
                ],
                preview: {
                    select: {
                    title: 'label',
                    affichage: 'affichage',
                    },
                    prepare({ title, affichage }: { title?: string; affichage?: boolean }) {
                    return {
                        title: title ?? 'Sans label',
                        subtitle: affichage ? 'Affiché (Vert)' : 'Masqué (Rouge)',
                        media: () => affichage ? '🟢' : '🔴',
                    }
                    },
                },
                },
            ],
            initialValue: [{ label: 'Placeholder Label', affichage: false }],
        },
        {
            title: 'Description',
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
        name: 'proportion',
        title: 'Proportion',
        type: 'number',
        initialValue: 6,
        validation: (rule) => rule.required().min(4).max(8),
        },
    ],
})
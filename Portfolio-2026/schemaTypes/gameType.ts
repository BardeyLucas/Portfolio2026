// schemas/GameType.ts
import { defineType } from 'sanity'

export const gameType = defineType({
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      initialValue: 999,
    },
    {
      name: 'hero',
      title: 'Faut il l\'afficher dans le hero ?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'title',
      title: 'Title',
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
      name: 'mecanique',
      title: 'Mécanique',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'mecanique',
          title: 'Mécanique',
          fields: [
            {
              name: 'titre',
              title: 'Titre',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'texte',
              title: 'Texte',
              type: 'array',
              of: [
                {
                  type: 'block',
                  marks: {
                    decorators: [
                      { title: 'Gras', value: 'strong' },
                      { title: 'Italique', value: 'em' },
                      { title: 'Souligné', value: 'underline' },
                      {
                        title: 'Texte rouge',
                        value: 'redText',
                      },
                      {
                        title: 'Texte bleu',
                        value: 'blueText',
                      },
                      {
                        title: 'Texte vert',
                        value: 'greenText',
                      },
                    ],
                  },
                  // lists: [
                  //   { title: 'Liste à points', value: 'bullet' },
                  //   { title: 'Liste numérotée', value: 'number' }
                  // ],
                },
              ],
              validation: (rule) => rule.required(),
            },
            {
              name: 'images',
              title: 'Images',
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
            },
            {
              name: 'categorie',
              title: 'Catégorie',
              type: 'string',
              options: {
                list: [
                  { title: 'Base', value: 'base' },
                  { title: 'Avancé', value: 'advanced' },
                ],
              },
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              options: {
                list: [
                  { title: 'Gauche', value: 'left' },
                  { title: 'Droite', value: 'right' },
                ],
              },
            },
            {
              name: 'center',
              title: 'Center',
              type: 'boolean',
              initialValue: false,
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'mapping',
      title: 'Mapping',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'map',
          title: 'Map',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'number',
              validation: (rule) => rule.required(),
            },
            {
              name: 'titre',
              title: 'Titre',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'texte',
              title: 'Texte',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
              validation: (rule) => rule.required(),
            },
            {
              name: 'images',
              title: 'Images',
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
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'inspirations',
      title: 'Inspirations',
      type: 'array',
      of: [
        {
          name: 'inspiration',
          title: 'Inspiration',
          type: 'object',
          fields: [
            {
              name: 'titre',
              title: 'Titre',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'resume',
              title: 'Résumé',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
              validation: (rule) => rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
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
              ]
            },
          ]
        },
      ]
    },
  ],
})
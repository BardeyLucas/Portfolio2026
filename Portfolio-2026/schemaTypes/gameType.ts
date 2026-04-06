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
      name: 'state',
      title: 'Etat du projet',
      type: 'string',
      options: {
        list: [
          { title: 'Annulé', value: 'cancelled' },
          { title: 'En attente', value: 'on-hold' },
          { title: 'En cours', value: 'in-progress' },
          { title: 'Terminé (1.0)', value: 'completed' },
          { title: 'Fini', value: 'finished' },
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'downloadLink',
      title: 'Lien de téléchargement',
      type: 'array',
      of: [
        {
          name: 'version',
          title: 'Version',
          type: 'object',
          fields: [
            {
              name: 'versionName',
              title: 'Nom de la version',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'versionNumber',
              title: 'Numéro de la version',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'versionActuelle',
              title: 'Version actuelle ?',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'operatingSystem',
              title: 'Moteur d\'exploitation',
              type: 'string',
              options: {
                list: [
                  { title: 'Windows', value: 'windows' },
                  { title: 'MacOS', value: 'macos' },
                  { title: 'Linux', value: 'linux' },
                ],
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            },
          ]
        },
      ]
    },
    {
      name: 'details',
      title: 'Détails',
      type: 'object',
      fields: [
        {
          name: 'playerNumber',
          title: 'Nombre de joueurs',
          type: 'string',
          options: {
            list: [
              { title: 'Solo', value: 'solo' },
              { title: 'Multijoueur', value: 'multiplayer' },
            ],
          },
          validation: (rule) => rule.required(),
        },
        {
          name: 'langue',
          title: 'Langue',
          type: 'array',
          of: [{
            type: 'string',
            options: {
              list: [
                { title: 'Français', value: 'fr' },
                { title: 'Anglais', value: 'en' },
              ],
            },
          }],
          validation: (rule) => rule.required().unique(),
        },
        {
          name: 'genre',
          title: 'Genre',
          type: 'array',
          of: [{
            type: 'string',
            options: {
              list: [
                { title: 'Action platformer', value: 'action-platformer' },
                { title: 'Aventure narrative', value: 'narrative-adventure' },
                { title: 'RPG', value: 'rpg' },
                { title: 'Simulation', value: 'simulation' },
                { title: 'Stratégie', value: 'strategy' },
                { title: 'Puzzle', value: 'puzzle' },
                { title: 'Collectathon', value: 'collectathon' },
                { title: 'Autre', value: 'other' },
              ],
            },
          }],
          validation: (rule) => rule.required().unique(),
        },
        {
          name: 'dateDeSortieLastUpdate',
          title: 'Date de sortie / dernière mise à jour',
          type: 'date',
        },
        {
          name: 'dateDeSortie',
          title: 'Date de sortie',
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Beta', value: 'beta' },
                  { title: 'Véritable', value: 'exact' },
                ],
              },
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date',
            },
          ],
        },
      ],
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
    {
      name: 'ajouts',
      title: 'Ajouts à venir',
      type: 'object',
      fields: [
        {
          name: 'firstTexte',
          title: 'Premier texte',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'liste',
          title: 'Liste d\'ajout',
          type: 'array',
          of: [
            {
              name: 'ajout',
              title: 'Ajout',
              type: 'object',
              fields: [
                {
                  name: 'texte',
                  title: 'Texte',
                  type: 'string',
                  validation: (rule) => rule.required(),
                },
                {
                  name: 'cote',
                  title: 'Coté',
                  type: 'boolean',
                  initialValue: false,
                  validation: (rule) => rule.required(),
                }
              ]
            }
          ]
        },
        {
          name: 'endTexte',
          title: 'Dernier texte',
          type: 'string',
        },
      ]
    },
    {
      name: 'conclusion',
      title: 'Conclusion',
      type: 'object',
      fields: [
        {
          name: 'conclusionGlobal',
          title: 'Conclusion globale',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'retenu',
          title: 'Ce que j\'en retient',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        }
      ]
    },
  ],
})
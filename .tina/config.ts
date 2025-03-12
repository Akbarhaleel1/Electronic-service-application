import { defineConfig } from '@tinacms/cli';

export default defineConfig({
  schema: {
    collections: [
      {
        label: 'Blog Posts',
        name: 'posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
          },
          {
            type: 'datetime',
            label: 'Date',
            name: 'date',
          },
          {
            type: 'string',
            label: 'Tags',
            name: 'tags',
            list: true,
          },
          {
            type: 'string',
            label: 'Image URL',
            name: 'imageUrl',
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
import {CollectionConfig} from 'payload/types';

const Faq: CollectionConfig = {
    slug: 'faq',
    auth: {
        useAPIKey: true
    },
    admin: {
        useAsTitle: 'id',
    },
    fields: [
        {
            name: 'id',
            type: 'text'
        },
        {
            name: 'title_tag',
            localized: true,
            type: 'text',
        },
        {
            name: 'meta_description',
            localized: true,
            type: 'text',
        },
        {
            name: 'meta_keywords',
            localized: true,
            type: 'text',
        },
        {
            name: 'Q1',
            localized: true,
            type: 'text',
        },
        {
            name: 'A1',
            localized: true,
            type: 'code',
        },
    ],
};

export default Faq;

import {CollectionConfig} from 'payload/types';

const OldShopContent: CollectionConfig = {
    slug: 'OldShopContent',
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
            name: 'CONTENT_HEADING',
            localized: true,
            type: 'text',
        },
        {
            name: 'CONTENT_TITLE',
            localized: true,
            type: 'text',
        },
        {
            name: 'content_text',
            localized: true,
            type: 'code',
        },
    ],
};

export default OldShopContent;

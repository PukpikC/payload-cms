import {CollectionConfig} from 'payload/types';

const OldShopContentV1: CollectionConfig = {
    slug: 'old-shop-content-v1',
    admin: {
        useAsTitle: 'id',
    },
    access: {
        read: (): boolean => true
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

export default OldShopContentV1;

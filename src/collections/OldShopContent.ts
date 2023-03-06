import {CollectionConfig} from 'payload/types';

const OldShopContent: CollectionConfig = {
    slug: 'OldShopContent',
    admin: {
        useAsTitle: 'id',
    },
    access: {
        read: ({ req: { user } }) => {
            return true;
        },
    },
    fields: [
        {
            name: 'id',
            type: 'text'
        },
        {
            type: 'ui', // required
            admin: {
                components: {
                    Field: MyCustomUIField,
                    Cell: MyCustomUICell,
                }
            }
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

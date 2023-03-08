import {CollectionConfig} from 'payload/types';
import {
    CodeBlockV1,
    QABlockV1,
    QuoteBlockV1,
    RecommendationsBlockV1,
    LargeSliderBlockV1,
    FooterMenuV1, QABlockV2,
    collections
} from "../blocks";

const NewShopContentV1: CollectionConfig = {
    slug: 'new-shop-content-v1',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: (): boolean => true
    },
    fields: [
        {
            label: 'Page ID',
            name: 'id',
            type: 'text',
            admin: {
                position: "sidebar"
            }
        },
        {
            label: 'Page Name',
            name: 'name',
            type: 'text',
            admin: {
                position: "sidebar"
            }
        },
        {
            name: 'title_tag',
            localized: true,
            type: 'text',
            admin: {
                position: "sidebar"
            }
        },
        {
            name: 'meta_description',
            localized: true,
            type: 'text',
            admin: {
                position: "sidebar"
            }
        },
        {
            name: 'meta_keywords',
            localized: true,
            type: 'text',
            admin: {
                position: "sidebar"
            }
        },
        // https://github.com/payloadcms/nextjs-custom-server/blob/master/components/RenderBlocks/index.tsx
        {
            name: 'layout', // required
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks: [ // required
                QuoteBlockV1,
                QABlockV1,
                QABlockV2,
                LargeSliderBlockV1,
                CodeBlockV1,
                RecommendationsBlockV1,
                FooterMenuV1,
                collections.textFormat.Header,
                collections.textFormat.textBody,
                collections.textFormat.headerAndDescription,
            ]
        },
    ],
};

export default NewShopContentV1;

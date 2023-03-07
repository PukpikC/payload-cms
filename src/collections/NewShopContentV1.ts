import {CollectionConfig} from 'payload/types';
import {
    CodeBlockV1,
    QABlockV1,
    QuoteBlockV1,
    RecommendationsBlockV1,
    LargeSliderBlockV1,
    FooterMenuV1, QABlockV2
} from "../blocks";

const NewShopContentV1: CollectionConfig = {
    slug: 'new-shop-content-v1',
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
                FooterMenuV1
            ]
        },
    ],
};

export default NewShopContentV1;

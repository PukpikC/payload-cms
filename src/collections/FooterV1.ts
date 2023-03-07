import {CollectionConfig} from 'payload/types';
import {
    CodeBlockV1,
    QABlockV1,
    QuoteBlockV1,
    RecommendationsBlockV1,
    LargeSliderBlockV1,
    FooterMenuV1
} from "../blocks";

const NewShopContent: CollectionConfig = {
    slug: 'footer-v1',
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
            name: 'layout',
            type: 'blocks',
            minRows: 1,
            maxRows: 20,
            blocks: [
                QuoteBlockV1,
                QABlockV1,
                LargeSliderBlockV1,
                CodeBlockV1,
                RecommendationsBlockV1,
                FooterMenuV1
            ]
        },
    ],
};

export default NewShopContent;

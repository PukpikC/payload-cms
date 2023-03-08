import {Block} from "payload/types";
import {textFormat} from "../blocks/TextFormat";

export const QuoteBlockV1: Block = {
    slug: 'QuoteV1', // required
    imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    fields: [ // required
        {
            name: 'quoteHeader',
            type: 'text',
            required: true,
        },
        {
            name: 'quoteText',
            type: 'text',
        },
    ]
};

export const QABlockV1: Block = {
    slug: 'QAV1', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    // imageAltText: 'A nice thumbnail image to show what this block looks like',
    fields: [ // required
        {
            name: 'QA', // required
            type: 'array', // required
            label: 'Questions and Answers',
            minRows: 2,
            maxRows: 10,
            labels: {
                singular: 'Question and Answer',
                plural: 'Questions and Answers',
            },
            fields: [ // required
                {
                    name: 'question',
                    localized: true,
                    type: 'text',
                },
                {
                    name: 'answer',
                    localized: true,
                    type: 'text',
                }
            ],
        },
    ]
};

export const QABlockV2: Block = {
    slug: 'QAV2', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    // imageAltText: 'A nice thumbnail image to show what this block looks like',
    fields: [ // required
        {
            name: 'QA', // required
            type: 'array', // required
            label: 'QA Block',
            fields: [ // required
                {
                    name: 'header',
                    localized: true,
                    type: 'text'
                },
                {
                    name: 'QA', // required
                    type: 'array', // required
                    label: 'Questions and Answers',
                    minRows: 2,
                    maxRows: 10,
                    labels: {
                        singular: 'Question and Answer',
                        plural: 'Questions and Answers',
                    },
                    fields: [ // required
                        {
                            name: 'question',
                            localized: true,
                            type: 'text',
                        },
                        {
                            name: 'answer',
                            localized: true,
                            type: 'text',
                        }
                    ],
                },
            ],
        },
    ]
};

export const LargeSliderBlockV1: Block = {
    slug: 'LargeSliderV1', // required
    fields: [ // required
        {
            name: 'LargeSlider', // required
            type: 'array', // required
            label: 'Large Slider',
            minRows: 2,
            maxRows: 10,
            labels: {
                singular: 'Large Slider',
                plural: 'Large Slider Images',
            },
            fields: [ // required
                {
                    name: 'imageSrc',
                    localized: true,
                    type: 'text',
                },
                {
                    name: 'altText',
                    localized: true,
                    type: 'text',
                }
            ],
        },
    ]
};

export const RecommendationsBlockV1: Block = {
    slug: 'RecommendationsBlockV1',
    fields: [
        {
            name: 'Recommendations', // required
            type: 'array', // required
            label: 'Recommendations',
            minRows: 2,
            maxRows: 10,
            labels: {
                singular: 'Recommendation',
                plural: 'Recommendations',
            },
            fields: [
                {
                    name: 'imageSrc',
                    localized: true,
                    type: 'text',
                },
                {
                    name: 'name',
                    localized: true,
                    type: 'text',
                },
                {
                    name: 'stars',
                    localized: true,
                    type: 'text',
                },
                {
                    name: 'text',
                    localized: true,
                    type: 'text',
                },
            ]
        }
    ]
}

export const CodeBlockV1: Block = {
    slug: 'CodeBlockV1',
    fields: [
        {
            name: 'CodeBlock', // required
            type: 'array', // required
            label: 'Code Block',
            minRows: 1,
            maxRows: 10,
            labels: {
                singular: 'Code Block',
                plural: 'Code Blocks',
            },
            fields: [
                {
                    name: 'codeBlock',
                    localized: true,
                    type: 'code',
                },
            ]
        }
    ]
}

export const FooterMenuV1: Block = {
    slug: 'FooterMenuV1', // required
    fields: [
        {
            name: 'FooterMenuColumn', // required
            type: 'array', // required
            minRows: 3,
            maxRows: 6,
            labels: {
                singular: 'Footer Menu Column',
                plural: 'Footer Menu Columns',
            },
            fields: [
                {
                    name: 'subHeader',
                    type: 'text',
                    localized: true
                },

                {
                    name: 'FooterMenuItem', // required
                    type: 'array', // required
                    minRows: 3,
                    maxRows: 6,
                    labels: {
                        singular: 'Footer Menu Item',
                        plural: 'Footer Menu Items',
                    },
                    fields: [
                        {
                            name: 'href',
                            localized: true,
                            type: 'text',
                        },
                        {
                            name: 'text',
                            localized: true,
                            type: 'text',
                        },
                    ],
                },
            ],
        },
    ]
};

export const collections = {
    textFormat
};

// export const components = {
//     cta,
// };

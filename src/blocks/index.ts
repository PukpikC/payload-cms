import {Block} from "payload/types";

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

export const SliderBlockV1: Block = {
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
                    name: 'href',
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

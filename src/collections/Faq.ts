import {CollectionConfig} from 'payload/types';

const Faq: CollectionConfig = {
    slug: 'faq',
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
            name: 'time', // required
            type: 'date', // required
            label: 'Event Start Time',
            admin: {
                date: {
                    // All config options above should be placed here
                    pickerAppearance: 'timeOnly',
                }
            }
        },
        {
            name: 'something',
            localized: true,
            type: 'code',
        },
        {
            name: 'questions_and_answers', // required
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
                    type: 'code',
                }
            ],
        },
    ],
};

export default Faq;

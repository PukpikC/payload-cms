import {buildConfig} from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import NewShopContent from "./collections/NewShopContent";
import Examples from "./collections/Examples";
import OldShopContent from "./collections/OldShopContent";

export default buildConfig({
    serverURL: 'http://localhost:3000',
    admin: {
        user: Users.slug,
    },
    collections: [
        Users,
        OldShopContent,
        // Add Collections here
        // Examples,
        NewShopContent
    ],
    localization: {
        locales: [
            'en-GB',
            'de',
        ],
        defaultLocale: 'en-GB',
        fallback: true,
    },
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});

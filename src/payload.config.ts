import {buildConfig} from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import FooterV1 from "./collections/FooterV1";
import OldShopContentV1 from "./collections/OldShopContentV1";
import NewShopContentV1 from "./collections/NewShopContentV1";

export default buildConfig({
    serverURL: 'http://localhost:3000',
    admin: {
        user: Users.slug,
    },
    collections: [
        Users,
        OldShopContentV1,
        NewShopContentV1,
        FooterV1
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

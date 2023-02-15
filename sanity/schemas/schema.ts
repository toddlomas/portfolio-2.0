import { createSchema } from "sanity";
import { schemaTypes } from ".";

import pageInfo from "./pageInfo";
import experience from "./experience";
import skill from "./skill";
import social from "./social";
import project from "./project";



export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        pageInfo,
        experience,
        skill,
        social,
        project,
    ])
})
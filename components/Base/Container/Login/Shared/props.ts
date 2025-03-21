import type { Header } from "~/types/Header";
import type { TitleTag } from "~/types/TitleTag";


export const propsContainer = {
    header: {
        type: Object as () => Header,
        default: () => {},
    },
    titleTag: {
        type: String as () => TitleTag,
        default: "h2",
    },
};
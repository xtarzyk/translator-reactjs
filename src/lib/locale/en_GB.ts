import { Dictionary } from "lib/types";

export const en_GB: Dictionary = {
    common: {
        autoTranslate: 'Auto translate',
        companyName: 'Codemask Academy'
    },
    components: {
        app: {
            loading: 'Fetching supported languages...',
            error: 'No supported language',
            empty: 'Something went wrong...'
        },
        header: {
            title: 'Translator ReactJS',
            github: 'Github',
            discord: 'Discord'
        },
        footer: {
            flatIcon: 'FlatIcon',
            libreTranslate: 'LibreTranslate'
        },
        message: {
            tryAgain: 'Try Again'
        }
    },
    screens: {
        translator: {
            sourceInputPlaceholder: "Type text here..."
        }
    }
}
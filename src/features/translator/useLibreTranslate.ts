import { AutoDetectedLanguage, LanguageCode } from "lib/models"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { useAutoDetectLanguage, useTranslateText } from "./actions"
import { SelectedLanguages } from "./types"

export const useLibreTranslate = () => {
    const [translatedText, setTranslatedText] = useState<string>('')
    const [query, setQuery] = useState<string>('')
    const [autoDetectedLanguage, setAutoDetectedLanguage] = useState<AutoDetectedLanguage>()
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
        source: LanguageCode.Auto,
        target: LanguageCode.Chinese
    })
    const {
        isLoading: isDetectingLanguage,
        hasError: hasErrorDetectingLanguage,
        fetch: autoDetectLanguage
    } = useAutoDetectLanguage(setAutoDetectedLanguage)
    const {
        isLoading: isTranslatingText,
        hasError: hasErrorTranslatingText,
        fetch: translateText
    } = useTranslateText(setTranslatedText)
    const debouncedAction = useDebouncedCallback(
        debouncedQuery => {
            if (debouncedQuery.length < 5) {
                return
            }

            selectedLanguages.source === LanguageCode.Auto
                ? autoDetectLanguage(debouncedQuery)
                : translateText({
                    q: debouncedQuery,
                    source: selectedLanguages.source,
                    target: selectedLanguages.target,
                    format: 'text'
                })
        },
        1000
    )

    return {
        query,
        setQuery,
        selectedLanguages,
        setSelectedLanguages,
        debouncedAction,
        isDetectingLanguage,
        hasErrorDetectingLanguage,
        isTranslatingText,
        hasErrorTranslatingText,
        autoDetectedLanguage,
        translatedText,
        setAutoDetectedLanguage
    }
}
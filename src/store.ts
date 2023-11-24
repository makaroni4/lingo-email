import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface TopicVerifications {
  [key: string]: {
    grade: number
    comment: string
  }
}

interface AppStore {
  openAIAPIKey: string | undefined
  setOpenAIAPIKey: (key: string | undefined) => void
  userLanguage: string
  setUserLanguage: (key: string) => void
  emailLanguage: string
  setEmailLanguage: (key: string) => void
  settingsVisible: boolean
  setSettingsVisible: (key: boolean) => void
  letter: string
  setLetter: (key: string) => void
  incomingEmail: string
  setIncomingEmail: (key: string) => void
  responseTopics: string[]
  setResponseTopics: (key: string[]) => void
  originalSentences: string[]
  setOriginalSentences: (key: string[]) => void
  verifiedSentences: string[]
  setVerifiedSentences: (key: string[]) => void
  topicsVerification: TopicVerifications
  setTopicsVerification: (obj: TopicVerifications) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      openAIAPIKey: "",
      setOpenAIAPIKey: (key) => set({ openAIAPIKey: key }),
      userLanguage: "en",
      setUserLanguage: (key) => set({ userLanguage: key }),
      emailLanguage: "de",
      setEmailLanguage: (key) => set({ emailLanguage: key }),
      settingsVisible: false,
      setSettingsVisible: (key) => set({ settingsVisible: key }),
      letter: "",
      setLetter: (text) => set({ letter: text }),
      incomingEmail: "",
      setIncomingEmail: (text) => set({ incomingEmail: text }),
      responseTopics: [],
      setResponseTopics: (arr) => set({ responseTopics: arr }),
      originalSentences: [],
      setOriginalSentences: (key) => set({ originalSentences: key }),
      verifiedSentences: [],
      setVerifiedSentences: (key) => set({ verifiedSentences: key }),
      topicsVerification: {},
      setTopicsVerification: (obj) => set({ topicsVerification: obj})
    }),
    {
      name: 'email-writing-exam-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

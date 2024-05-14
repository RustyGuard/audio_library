import {reactive} from "vue";

interface User {
    name: string
    nickname: string
    register_date: Date
    email: string
    likedAudioIds: number[]
}

interface AudioFile {
    id: number
    name: string
    durationSeconds: number
    loadDate: Date
    genre: string
    authorEmail: string
}

interface DataStorage {
    users: User[]
    audioFiles: AudioFile[]
    currentUserEmail: string | null
}

export const databaseStorage: DataStorage = reactive({
    users: [
        // {
        //     email: "golovin.artem.2004@yandex.ru",
        //     name: "Артём",
        //     nickname: "Rusty",
        //     register_date: Date(),
        //     likedAudioIds: [],
        // }
    ],
    audioFiles: [
        // {
        //     id: 1,
        //     name: "Rick roll",
        //     durationSeconds: 350,
        //     loadDate: Date(),
        //     genre: "Rock",
        //     authorEmail: "golovin.artem.2004@yandex.ru",
        // },
    ],
    // currentUserEmail: "golovin.artem.2004@yandex.ru",
    currentUserEmail: null,
})

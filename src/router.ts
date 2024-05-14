import {createMemoryHistory, createRouter, RouteRecordRaw} from "vue-router";
import HomeView from "./HomeView.vue";
import AddUserView from "./AddUserView.vue";
import LikedAudioView from "./LikedAudioView.vue";
import AddAudioView from "./AddAudioView.vue";

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomeView},
    { path: '/user', component: AddUserView},
    { path: '/liked', component: LikedAudioView},
    { path: '/add_audio', component: AddAudioView},
]


export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
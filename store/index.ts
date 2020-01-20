
import { MutationTree } from 'vuex';


export const state = () => ({
    downloadModalStatus: false
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
    TOGGLE_DOWNLOAD_MODAL: (state, status: boolean) => {
        state.downloadModalStatus = status;
    }
}
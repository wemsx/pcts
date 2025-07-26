<template>
    <div style="display: flex;gap:3vw;">
        <buttonPlus @click="() => openModal('setting')">设置</buttonPlus>
        <Teleport to="#app">
            <Modal :isOpen="modalIsOpen.setting" @close="() => closeModal('setting')">
                <h2>用户设置</h2>
                <div v-for="(value, key) in settingStoreRef.settings">
                    <span>{{ key }}</span> <input v-model="settingStoreRef.settings[key]">
                </div>
            </Modal>
        </Teleport>

        <buttonPlus @click="() => openModal('pcts')">设定百分比</buttonPlus>
        <Teleport to="#app">
            <Modal :isOpen="modalIsOpen.pcts" @close="() => { closeModal('pcts'), pctsIsOpen.fill(false) }">
                <h2>设定百分比</h2>
                <div v-for="(item, index) of pctsStoreRef.pcts">
                    <collapsePlus v-model="pctsIsOpen[index]" :title="item.title" width="var(--collapse-width)">
                        <div>{{ item }}</div>
                    </collapsePlus>
                </div>
            </Modal>
        </Teleport>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import Modal from './Modal.vue';
import buttonPlus from './kits/buttonPlus.vue';
import collapsePlus from './kits/collapsePlus.vue'
import { settingStore } from "@/stores/settingStore";
const settingStoreRef = settingStore();
import { pctsStore } from "@/stores/pctsStore";
const pctsStoreRef = pctsStore();

const modalIsOpen = ref({ setting: false, pcts: false });
const openModal = (key) => {
    modalIsOpen.value[key] = true;
};
const closeModal = (key) => {
    modalIsOpen.value[key] = false;
};

const pctsIsOpen = ref(Array(pctsStoreRef.pcts.length).fill(false));
</script>
<style scoped></style>
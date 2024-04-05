<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import Navbar from '@/Pages/partial/Navbar.vue';
import Sidebar from '@/Pages/partial/Sidebar.vue';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>

    <Navbar></Navbar>
    <Sidebar></Sidebar>

    <!-- Page Heading -->
    <header class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <slot name="header" />
        </div>
    </header>

    <!-- Page Content -->

    <main>
        <slot />
    </main>

    </div>
</template>

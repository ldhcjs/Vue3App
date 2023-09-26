import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import DrawerPlugin from '@nativescript-community/ui-drawer/vue3';
import { install } from '@nativescript-community/ui-drawer';
install();

createApp(Home)
.use(DrawerPlugin)
.start();

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Alert from './components/Alert.vue'

const app = createApp(App)

// Register global component for use as MDC
app.component('Alert', Alert)

app.mount("#app");

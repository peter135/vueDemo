import {  createApp  } from "vue";
import toast from "../components/Toast.vue";

const app = createApp(toast);
const dom = document.createElement("div");
const instant = app.mount(dom); 
document.body.appendChild(dom)
class Toast {
  constructor(mes="暂无"){
    this.info(mes)
  }
  info(mes) {
    console.log("toast",instant);
    instant.setLoading(mes)
  }
}

export default new Toast();
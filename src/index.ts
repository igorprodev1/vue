import Vue from "vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <hello-decorator-component />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloDecoratorComponent
    }
});

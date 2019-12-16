<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
  <div class="container centered-content">
    <div class="form-wrap card">
      <div class="mode-warp">
        <div class="mode-name">View</div>
        <label class="switch">
          <input type="checkbox" v-model.lazy="edit" />
          <span class="slider round"></span>
        </label>
        <div class="mode-name">Edit</div>
      </div>
      <ul id="example-1">
        <input class="list-item input" v-if="edit" v-model.lazy="newItem" v-on:keyup.enter="add()" />
        <li class="list-item" v-for="(item, index) in getItemsList" v-bind:key="item">
          <span v-if="!edit">{{ item }}</span>
          <input class="input" v-if="edit" v-model.lazy="getItemsList[index]" v-on:keyup.delete="remove(i)" />
        </li>
      </ul>
      <!-- <div class="df jc-e">
        <button class="primary" @click="edit = !edit">{{edit ? "Save" : "Edit"}}</button>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  items = ["item 1", "item 2", "item 3"];

  newItem = "";

  edit = true;

  add() {
    this.items.unshift(this.newItem);
    this.newItem = "";
  }

  remove(i: number) {
    this.items.splice(i, 1);
  }

  get getItemsList(): string[] {
    return this.items;
  }
}
</script>

<style>
* {
  font-family: sans-serif;
}
.greeting {
  font-size: 20px;
}
.container {
  min-height: 100vh;
}
.container.centered-content {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  padding: 10px;
  background: white;
  box-shadow: 2px 2px 4px #0000008a;
  border-radius: 2px;
}
.form-wrap {
  width: 100%;
  max-width: 400px;
  position: relative;
}
.form-wrap ul {
  padding-left: 0;
  list-style: none;
  margin-top: 0;
}
.list-item {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.list-item:last-child {
  margin-bottom: 0;
}
.input {
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px solid #949494;
  width: 100%;
  font-size: 16px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.mode-warp {
  display: flex;
  align-items: center;
  position: absolute;
  padding: 4px;
  right: 0;
  top: -50px;
}
.mode-warp .mode-name {
  margin: 5px;
}
button {
  border: none;
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px #545454;
  transition: all 0.3s;
  min-width: 80px;
  cursor: pointer;
}
button:active {
  box-shadow: 2px 2px 2px #545454;
}
button.primary {
  background: #2196f3;
  color: white;
}
.df {
  display: flex;
}
.jc-e {
  justify-content: flex-end;
}
</style>

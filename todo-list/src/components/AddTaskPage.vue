<template>
  <div class="container-holder">
    <div class="container">
      <header class="header">
        <div class="logo-svg">
          <img src="@/assets/Group 12.svg" alt="Logo" class="logo-svg"/>
          <h1 class="logo">necms.net</h1>
        </div>
        <div class="header-right">
          <button class="save-button">Сохранить</button>
          <button class="reload-btn" @click="reloadPage">
          <img src="@/assets/Vector.svg" alt="Vector" class="vector"/>
          </button>
          <img src="@/assets/telegram 1.svg" alt="Logo" class="logo-svg"/>
          <a href="#" class="header-link">admin</a>
          <a href="#" class="header-link">Выйти</a>
        </div>
      </header>
      <div class="body-content-task">
        <h1 class="tasks-heading">Задачи</h1>
        </div>
      <div class="add-task-holder">
        <p class="add-task-title">Название</p>
        <input type="text" class="task-input" placeholder="Введите тему задачи">
        <span class="state-text">Состояние</span>
        <select class="state-select">
          <option value="Открыто">Открыто</option>
          <option value="На рассмотрении">На рассмотрении</option>
          <option value="В процессе">В процессе</option>
          <option value="Приостоновлено">Приостоновлено</option>
        </select>
      </div>
      <div class="block-description">
        <p class="title-description">Описание</p>
        <vue2-tinymce-editor class="description-text" v-model="content" :width="700" :height="250"></vue2-tinymce-editor>

      </div>
      </div>
    </div>
</template>

<script>

import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
  name: 'AddTaskPage',

  components: {
    Vue2TinymceEditor,
  },

  data() {
    return {
      content: "",
    };
  },

  methods: {
    reloadPage() {
      window.location.reload();
    },
  }

};
</script>

<style>
body {
  margin: 0;
}

.container-holder {
  background: #101221;
  height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
}

.header {
  background: #20234B;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
  margin: 0;
  color: #B3B6C4;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
}

.logo-svg {
  display: flex;
  margin-right: 20px;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-link {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
}

.header-link:last-child {
  margin-right: 0;
}

.body-content-task {
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  background-color: #101221;
  padding: 20px;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.tasks-heading {
  align-self: flex-start;
  margin-right: 40px;
  color: #fff;
  font-weight: 800;
  font-size: 36px;
  line-height: 5px;
  margin-left: 20px;
}

.add-task-title{
  color: #FFFFFF;
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.state-text{
  display: flex;
  align-items: center;
  color: #FFFFFF;
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.add-task-holder{
  display: flex;
  margin-bottom: 20px;
}
.task-input::placeholder {
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-left: 20px;
}
.task-input:focus::placeholder {
  color: transparent;
}
.task-input {
  padding: 0 20px;
  color: #FFFFFF;
  width: 100%;
  height: 40px;
  border: none;
  background: #20234B;
  border-radius: 100px;
  margin-right: 20px;
}
.state-select{
  padding: 0 17px;
  width: 170px;
  height: 40px;
  background: #FFFDFD;
  border-radius: 8px;
  color: #6D6D6D;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}
.save-button {
  background-color: #FF4B58;;
  color: #FFFFFF;
  border-radius: 23.5px;
  border: none;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  margin-right: 10px;
}
.reload-btn{
  margin-right: 100px;
  background: none;
  border: none;
  cursor: pointer;
}
.block-description{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: #20234B;
  border-radius: 10px;
}
.title-description{
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}

</style>

<template>
  <div class="container-holder">
    <div class="container">
      <header class="header">
        <div class="logo-svg">
          <img src="@/assets/Group 12.svg" alt="Logo" class="logo-svg"/>
          <h1 class="logo">necms.net</h1>
        </div>
        <div class="header-right">
          <img src="@/assets/telegram 1.svg" alt="Logo" class="logo-svg"/>
          <a href="#" class="header-link">admin</a>
          <a href="#" class="header-link">Выйти</a>
        </div>
      </header>
      <div class="body-content">
        <h1 class="tasks-heading">Задачи</h1>
        <router-link to="/add-task" class="add-task">
          <img src="@/assets/plus.svg" alt="Plus" class="plus-svg"/>
          <span class="add-task-label">ДОБАВИТЬ ЗАДАЧУ</span>
        </router-link>
      </div>
      <div class="task-block-holder">
        <div class="task-column">
          <h3 class="title-column">Открыта</h3>
          <div class="custom-block">
            <div class="custom-header">
              <div class="card">
                <h4 class="card-title">Заголовок задачи</h4>
                <p class="card-description">Описание задачи</p>
                <div class="user-name">Имя пользователя</div>
              </div>
            </div>
          </div>
        </div>
        <div class="task-column">
          <h3 class="title-column">В процессе</h3>
          <div class="custom-block">
            <div class="custom-header">
              <div class="card">
                <h4 class="card-title">Заголовок задачи</h4>
                <p class="card-description">Описание задачи</p>
                <div class="user-name">Имя пользователя</div>
              </div>
            </div>
          </div>
        </div>
        <div class="task-column">
          <h3 class="title-column">Приостановлена</h3>
          <div class="custom-block">
            <div class="custom-header">
              <div class="card">
                <h4 class="card-title">Заголовок задачи</h4>
                <p class="card-description">Описание задачи</p>
                <div class="user-name">Имя пользователя</div>
              </div>
            </div>
          </div>
        </div>
        <div class="task-column">
          <h3 class="title-column">На рассмотрении</h3>
          <div class="custom-block">
            <div class="custom-header">
              <div class="card">
                <h4 class="card-title">Заголовок задачи</h4>
                <p class="card-description">Описание задачи</p>
                <div class="user-name">Имя пользователя</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  methods: {

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

.body-content {
  display: flex;
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

.add-task {
  display: flex;
  align-items: center;
  align-self: flex-start;
  background: none;
  border: none;
  color: #fff;
  font-weight: 600  ;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  text-decoration: none;
}

.add-task:hover {
  text-decoration: underline;
}

.task-block-holder {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 35px;
}

.task-column {
  position: relative;
  flex: 1;
  background-color: #3E438D;
  margin-right: 20px;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
}

.task-column h3 {
  margin-top: 0;
}

.title-column {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 10px;
}

.custom-block {
  background: #20234B;
  border-radius: 0px 0px 8px 8px;
  max-width: 100%;
  height: 300px;
}

.custom-block:last-child {
  margin-right: 0;
}

.custom-header {
  position: absolute;
  background-color: #6F73A3;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 12px;
  margin-top: 8px;
}

.card {
  position: relative;
  background: #3E438D;
  padding: 10px;
  border-radius: 4px;
  margin-top: 12px;
}

.card .user-name {
  position: absolute;
  bottom: 4px;
  right: 2px;
  background-color: #6F73A3;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
}

.card-title {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
}

.card-description {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 20px;
}


</style>

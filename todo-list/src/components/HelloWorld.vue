<template>
  <div class="container-holder">
    <div class="container">
      <header class="header">
        <div class="logo-svg">
          <img src="@/assets/Group 12.svg" alt="Logo" class="logo-svg" />
          <h1 class="logo">necms.net</h1>
        </div>
          <div class="header-right">
            <img src="@/assets/telegram 1.svg" alt="Logo" class="logo-svg" />
            <a href="#" class="header-link">admin</a>
            <a href="#" class="header-link">Выйти</a>
          </div>
        </header>
          <div class="body-content">
          <h1>Задачи</h1>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style>
body{
  margin: 0;
}

.container-holder{
  background: #0c0e2e;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.header{
  background: #20234B;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.logo{
  display: flex;
  align-items: center;
  margin: 0;
  color: #B3B6C4;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;;
}
.logo-svg{
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
  background-color: #101221;
  padding: 20px;
  color: #fff;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;}
</style>

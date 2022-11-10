<template>
    <button class="add_task_button">
        <slot />
    </button>
</template>

<style>
.add_task{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.add_task_button{
  font-size: 40px;
  padding: 10px 200px;
  border: 2px solid rgb(136, 136, 136);
  border-radius: 30px;
  color: black;
  box-shadow: 2px 0px 20px rgb(202, 202, 202);
}
.add_task_button:disabled{
  font-size: 40px;
  padding: 10px 200px;
  border: 2px solid rgb(136, 136, 136);
  border-radius: 30px;
  color: black;
  box-shadow: 2px 0px 20px rgb(202, 202, 202);
  background-color: #acacac;
}
.add_task_button:hover:enabled{
  color: black;
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(182, 182, 182);
}
.add_task_button:active:enabled{
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  font-size: 35px;
  padding: 10px 180px;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  box-shadow: 2px 0px 20px rgb(37, 37, 37);
}
</style>
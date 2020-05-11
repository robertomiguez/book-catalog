<template>
  <div id="menu">
    <div id="header">
      <div id="nav">
        <router-link :to="{name: 'Book'}">Book</router-link>
        <router-link :to="{name: 'Author'}">Author</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Menu`  
}
</script>

<style scoped>
#menu {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #606cee;
}

#header {
  margin: 0px auto;
  padding: 15px;
  background-color: #606cee;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  position: fixed;
  z-index: 999;
}

#header #nav {
  max-width: 100%;
  min-width: 250px;
  box-sizing: border-box;
  margin: 0px auto;
}

#header #nav a {
  margin-right: 1.9em;
  color: dimgrey;
  text-decoration: none;
  letter-spacing: .070em;
  font-size: 12px;
}

#header #nav a.router-link-exact-active {
  color: #fff; 
}

</style>

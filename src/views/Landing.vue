<template>
    <div class="leading">
        <div class="leading-text">{{ leadingText }}</div>
        <Button to='Book' text='Start here'/>
    </div>
</template>

<script>
import Button from '../components/Button'
export default {
  name: `Landing`,
  components: {
    Button
  },
  data: 
    function () {
      return {
        leadingText: `A website about book catalogs.`
      }
    }
}
</script>

<style scoped>
.leading {
  position:fixed;
  bottom:0;
  left:0;  
  width:100%;
  height: 100%;
  color: white;
  background: url('../assets/img/books.jpg') center #333 no-repeat;
  background-size: cover;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 800px) {
 .leading {
    display: flex;
    align-items: center;
  }
}

.leading-text {
  max-width: 250px;
  font-size: 1.3em;
  line-height: 1.5em;
  text-shadow: 1px 1px 3px #000;
  padding-bottom: 30px; 
}

@media (min-width: 800px) {
  .leading-text {
    max-width: 600px;
    font-size: 2em;
  }

}

</style>
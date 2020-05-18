<template>
  <div id="app">
    <h1>Author</h1>
    <ul>
      <li v-for="author in authors" :key="author.id">
        <Card 
          :title="author.fields.Name" 
          :img="author.fields.Photos[0].thumbnails.large.url" 
          :description="author.fields.Bio"
          :field1="author.fields.BooksName.toString()"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../components/Card"
import { getAuthors } from '../services/authorService'


export default {
  name: `Author`,
  components: {
    Card
  },  
  data: function() {
    return {
      authors: []
    }
  },
  mounted: function() {
    this.loadAuthors()
  },
  methods: {
    loadAuthors: async function () {
      try {
        const res = await getAuthors()
        this.authors = res.data.records
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
h1 {  
    text-align: center; 
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
li {
    width: 250px;
    background: #e6e6e6;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    margin: 50px;
}
</style>

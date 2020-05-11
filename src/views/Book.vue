<template>
  <div id="app">
    <h1>Books</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <Card 
          :title="book.fields.Name" 
          :img="book.fields['Cover Photo'][0].thumbnails.large.url" 
          :description="book.fields.Synopsis"  />
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios"
import Card from "../components/Card"
import { getBooks } from '../services/bookService'

export default {
  name: `Book`,
  components: {
    Card
  },  
  data: function() {
    return {
      books: []
    }
  },
  mounted: function() {
    this.loadBooks()
  },
  methods: {
    loadBooks: async function () {
      try {
        const res = await getBooks()
        this.books = res.data.records
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

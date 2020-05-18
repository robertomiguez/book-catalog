<template>
    <div>
        <div class=title>{{ title }}</div>
        <img
          :src="img"
          alt=""
          v-if="img"
          width=150
          height=200
        />
        <div class=description>{{ description }}</div>
        <div class=field1>{{ field1 }}</div>
    </div>
</template>

<script>
export default {
  name: `Card`,
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    field1: {
      type: String,
      required: true
    }
  }  
}
</script>

<style>
.title {
    font-style: italic;
    font-family: fantasy;
    font-weight: 1000;
    height: 45px;
}
.description {
    height: 130px;
    padding-top: 10px;
    font-style: italic;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.field1 {
    height: 30px;
    padding-top: 3px;
}

</style>
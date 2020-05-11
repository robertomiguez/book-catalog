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
}

</style>
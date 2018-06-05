<template>
  <section>
    <h2>Products</h2>
    <ul :style="{display: 'flex', padding: '0'}">
      <li :key="product" v-for="product in products" :style="{ padding: '30px', listStyle: 'none ', border: '1px solid #000', margin: '5px' }">
        <b>{{product}}</b> <br /> $ {{(Math.random() * 100).toFixed(2)}} <br />
        <button>Buy</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      products: ['Rice', 'Beans', 'Fries', 'Steak']
    }
  }
}
</script>

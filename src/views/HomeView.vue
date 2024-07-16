<template>
  <div class="">
    <NavbarTwo/>
    <Section1 />
    <ProductContent />
    <FrequentProduct/>
    <Section3/>
    <Section4/>
    <section5/>
    <Help/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import NavbarTwo from '../components/NavbarTwo.vue'
import Section1 from '../components/Section1.vue'
import ProductContent from '../components/ProductContent.vue'
import FrequentProduct from '../components/FrequentProduct.vue'
import Section3 from '../components/Section3.vue'
import Section4 from '../components/Section4.vue'
import Section5 from '../components/Section5.vue'
import Footeri from '../components/Footeri.vue'
import Help from '../components/Help.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    NavbarTwo,
    Section1,
    ProductContent,
    FrequentProduct,
    Section3,
    Section4,
    Section5,
    Footeri,
    Help,
  }
}
</script>

<template>
   <div>
 <Header></Header>
<router-view/>
 <Footer></Footer>
   </div>
</template>

<script>
import Header from "@components/public/header";
import Footer from "@components/public/footer";
export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>


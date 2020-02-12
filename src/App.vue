<template>
  <main>
    <sx-header />
    <SxAssetsTable />
  </main>
</template>

<script>
import SxHeader from "@/components/SxHeader";
import SxAssetsTable from "@/components/SxAssetsTable";

export default {
  name: "App",
  components: {
    SxHeader,
    SxAssetsTable
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

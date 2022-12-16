<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Latest Updates</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ContactTable />
    </v-main>
  </v-app>
</template>

<script>
import ContactTable from "./components/Dashboard";

export default {
  name: "App",

  components: {
    ContactTable,
  },
};
</script>

<template>
  <v-container>
    <h2>All Contact details</h2>
    <v-card>
      <v-card-title gap="10px">
        <v-select
          :items="professions"
          v-model="profession"
          label="Filter By Profession"
          solo
          clearable
          @change="filterByProfession"
        ></v-select>
        <v-select
          :items="allLocalities"
          v-model="locality"
          label="Locality"
          solo
          clearable
          @change="filterByLocality"
        ></v-select>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="filteredRecords"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import records from "../data/AllContacts.ts";
export default {
  name: "DashboardComponent",

  data: () => ({
    search: "",
    headers: [
      { text: "Prefix", value: "prefix" },
      {
        text: "Name",
        align: "start",
        value: "name",
      },
      { text: "Profession", value: "profession" },
      { text: "Phone", value: "phone_number", sortable: false },
      { text: "Locality", value: "area" },
      { text: "Address", value: "address", sortable: false },
    ],
    allRecords: [],
    allLocalities: ["Airport Road", "Bengali Square", "Palasia", "Vijay Nagar"],
    filteredRecords: [],
    desserts: [],
    locality: null,
    profession: null,
    professions: [
      "Architect",
      "Doctor",
      "Engineer",
      "Homemaker",
      "Musician",
      "Writer",
    ],
  }),
  created() {
    this.allRecords = records;
    this.filteredRecords = records;
  },
  methods: {
    filterByProfession() {
      const records =
        this.profession == "" && this.locality == ""
          ? this.allRecords
          : this.filteredRecords;
      this.filteredRecords = records.filter(
        (des) => des.profession == this.profession
      );
    },
    resetProfession() {
      this.profession = null;
      this.filteredRecords = this.allRecords;
    },
    filterByLocality() {
      const records =
        this.profession == "" && this.locality == ""
          ? this.allRecords
          : this.filteredRecords;
      this.filteredRecords = records.filter((des) =>
        des.area.toLowerCase().includes(this.locality.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.v-card__title div.v-text-field {
  margin: 0 10px;
}
</style>

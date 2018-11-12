<template>
<v-container class="mainContain">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75">
        </v-img>
        <v-card-title primary-title> 
          <div>
            <h3 class="headline mb-0">Login</h3>
          </div>
        </v-card-title>
          <v-container>
            <v-form v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Name"
                required> 
              </v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required>
              </v-text-field>
            </v-form>
          </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<style>
.container {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 20px;
    font-weight: bold;
}
.mainContain {
  background-image: radial-gradient(orange, white);
}

</style>

<template>
    <v-app>
        <v-container>
            <v-form class = 'form'>
                <v-text-field 
                    name= "newName"
                    label="Pick a Username">
                </v-text-field>
                <v-text-field
                    name= "newPassword"
                    label="Create a Password">
                </v-text-field>
                <v-text-field 
                    name= "newEmail"
                    label="Enter in your email address">
                </v-text-field>
                <v-text-field
                    name= "image"
                    label="Maybe upload your image here too idk Max totally has a video">
                </v-text-field>
                    <v-btn @click='' id="btn">Sign Up</v-btn>
            </v-form>
        </v-container>
    </v-app>
</template>

<style scoped>
    .fontify {
        font-family: 'Orbitron', sans-serif;
        text-align: center;
    }
    	#btn {
        font-family: 'Orbitron', sans-serif;
        text-align: center;
		background-image: radial-gradient(gainsboro,skyblue,gainsboro);
		color: white
    }
</style>
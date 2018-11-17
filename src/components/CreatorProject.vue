<template>
    <div>
    <p>kjljhkjhgkjhg</p>
        <v-app>
            <v-content>
                <v-container>
                    <label>Test
                        <input type="file" id="projectImg" ref="file" v-on:change="handleFileUpload()" />
                    </label>
                    <v-btn v-on:click="submitFile()">Submit</v-btn>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    export default {

    }
</script>
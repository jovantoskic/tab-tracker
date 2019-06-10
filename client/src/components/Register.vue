<template>
    <v-container>
        <v-layout column>
            <v-flex xs6>
                <div class="white elevation-2">
                    <v-toolbar flat dense class="cyan" dark>
                        <v-toolbar-title>Register</v-toolbar-title>
                    </v-toolbar>
                    <form class="text-xs-center pl-4 pr-4 pt-2 pb-2">
                        <div class="email">
                            <!--<input placeholder="Email" type="text" name="email" v-model="user.email">-->
                            <v-text-field
                                    v-model="user.email"
                                    label="Email"
                                    single-line
                            ></v-text-field>
                        </div>
                        <div class="password">
                            <!--<input placeholder="Password" type="password" name="password" v-model="user.password">-->
                            <v-text-field
                                    label="Password"
                                    v-model="user.password"
                                    single-line
                            ></v-text-field>
                        </div>
                        <div v-html="error"></div>
                        <v-btn class="cyan" @click="register">Register</v-btn>
                    </form>
                </div>
            </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
    import AuthenticationService from '../services/AuthenticationService'
    export default {
        name:'Register',
        data() {
            return {
                user: {
                    email:'',
                    password:''
                },
                error:null
            }
        },
        methods: {
            async register(event) {
                event.preventDefault()
                try {
                    const response = await AuthenticationService.register(this.user)
                    console.log('email:::',this.email)
                } catch(error) {
                    this.error = error.response.data.error
                }
            }
        }
    }
</script>

<style scoped>
    form {
        max-width:23rem;
        margin:0 auto;
    }
</style>
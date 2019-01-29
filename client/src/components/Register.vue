<template>
    <div class="register-container">
        <form @submit.prevent="register">
            <h2>Register</h2>
            <div class="email">
                <label for="email">Email</label>
                <input id="email" type="text" name="email" v-model="email">
            </div>

            <div class="password">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" v-model="password">
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
    import AuthenticationService from '../services/AuthenticationService'
    // import axios from 'axios'
    export default {
        name:'Register',
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods: {
            async register() {
                const response = await AuthenticationService.register({
                    email:this.email,
                    password:this.password
                })
                console.log('response::',response.data)
            }
        }
    }
</script>


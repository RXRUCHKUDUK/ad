<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registration form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>mdi-git</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" v-on="on">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation >

                  <v-text-field 
                  prepend-icon="mdi-account" 
                  name="email" 
                  label="E-mail" 
                  type="email"
                  v-model="email" 
                  :rules="emailRules"
                  >
                  </v-text-field>
                  <v-text-field 
                  id="password" 
                  prepend-icon="mdi-lock" 
                  name="password" 
                  label="Password" 
                  type="password" 
                  v-model="password" 
                  :counter="10" 
                  :rules="passwordRules"
                  >
                  </v-text-field>
                  <v-text-field 
                  id="password" 
                  prepend-icon="mdi-lock" 
                  name="confirm-password" 
                  label="Confirm password" 
                  type="password" 
                  v-model="confirmPassword" 
                  :counter="10" 
                  :rules="confirmPasswordRules"
                  >
                  </v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="primary" 
                :loading="loading"
                @click="onSubmit" 
                :disabled="!valid || loading"
                >Create Account!
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Name is required',
                v => (v && v.length >= 6) || 'Password must be equal or more'
            ],
            confirmPasswordRules: [
                v => !!v || 'Name is required',
                v => v === this.password || 'Password should match'
            ]
        }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    mehtods: {
        onSubmit () {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password
                }

                this.$store.dispatch('registerUser', user)
                  .then(() => {
                    this.$router.push('/')
                  })
                  .catch(() => {})
            }
        }
    }
  }
</script>


<style>

</style>
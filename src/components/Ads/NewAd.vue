<template>
  <v-container>
      <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
             <h1 class="text--secondary mb-3">Create new add</h1>
             <v-form v-model="valid" ref="form" validation class="mb-3">

                  <v-text-field 
                  prepend-icon="mdi-account" 
                  name="title" 
                  label="Ad title" 
                  type="text"
                  v-model="title"
                  required 
                  :rules="[v => !!v || 'Title is required']"
                  >
                  </v-text-field>

                  <v-text-field 
                  prepend-icon="mdi-lock" 
                  name="description" 
                  label="Ad description" 
                  type="text" 
                  v-model="description"
                  multi-line
                  :rules="[v => !!v || 'Description is required']"
                  >
                  </v-text-field>
                </v-form>

                <v-layout row ml-2>
                    <v-flex xs12>
                        <v-btn 
                        class="warning" @click="triggerUpload">
                            Upload
                            <v-icon right dark>mdi-upload</v-icon>
                        </v-btn>
                        <input 
                        ref="fileInput" 
                        type="text" 
                        style="display: none;" 
                        accept="image/**"
                        @change="onFileChange">
                    </v-flex>
                </v-layout>

                <v-layout row ml-2>
                    <v-flex xs12>
                        <img :src="imageSrc" height="100" v-if="imageSrc">
                    </v-flex>
                </v-layout>
                
                <v-layout row ml-2>
                    <v-flex xs12>
                        <v-switch
                        label="Ad to promo?"
                        v-model="promo"
                        >
                        </v-switch>
                    </v-flex>
                </v-layout>

                <v-layout row ml-2>
                    <v-flex xs12>
                        <v-spacer>

                        </v-spacer>
                        <v-btn
                        :loading="loading"
                        :disabled="!valid || !image || loading"
                        class="success"
                        @click="createAd"
                        >
                            Create Ad
                        </v-btn>
                    </v-flex>
                </v-layout>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: '',
            description: '',
            promo: false,
            valid: false,
            image: null,
            imageSrc: ''
        }
    },
    computed: {
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        createAd () {
            if (this.$refs.form.validate() && this.image) {
                //logic
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    image: this.image
                }

                this.$store.dispatch('createAd', ad)
                .then(() => {
                    this.$route.push('/list')
                })
                .catch(() => {})
            }  
        },
        triggerUpload () {
            this.$refs.fileInput.click()
        },  
        onFlieChange (event) {
            const file = event.target.files[0]

            const reader = new FileReader()
            reader.onload = e => {
                this.imageSrc = reader.result
            }
            reader.reader.readAsDataURL(file)
            this.image = file
        }
    }
}
</script>

<style>

</style>
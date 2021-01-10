<template>
  <v-app>
  <v-navigation-drawer 
  app 
  v-model="drawer"
  temporary
  absolute>
    <!-- -->

      <v-list-item @click="drawer = !drawer" class="text-accent-4">
        <v-list-item-icon>
          <v-icon>mdi-text</v-icon>
        </v-list-item-icon>
        <v-list-item-title>App</v-list-item-title>
      </v-list-item>
      
      <v-btn text flat
      v-for="link of links"
      :key="link.title"
      :to="link.url"
      >
        <v-icon left>
          {{ link.icon }}
        </v-icon>
        {{ link.title }}
      </v-btn>
  </v-navigation-drawer>
<!--Nav drawer-->

<!--Toolbar-->
  <v-card
    flat
    tile
  >
    <v-toolbar dark color="primary" class="elevation-5">
      <v-app-bar-nav-icon 
      @click="drawer = !drawer"
      class="hidden-md-and-up"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" tag="sapn" class="pointer">Ad aplication</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items dark color="blue" class="hidden-sm-and-down">
      <v-btn text flat
      v-for="link of links"
      :key="link.title"
      :to="link.url"
      >
        <v-icon left>
          {{ link.icon }}
        </v-icon>
        {{ link.title }}
      </v-btn>
      </v-toolbar-items>

    </v-toolbar>
  </v-card>
    <!--Toolbar-->



  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>



  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      links: [
        {title:'Login', icon:'mdi-lock', url:'/login'},
        {title:'Registration', icon:'mdi-account', url:'/registration'},
        {title:'Orders', icon:'mdi-bookmark', url:'/orders'},
        {title:'New add', icon:'mdi-note', url:'/new'},
        {title:'My adds', icon:'mdi-book', url:'/list'},
      ]
    }
  }
 
  }

</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
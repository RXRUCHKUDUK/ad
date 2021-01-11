<template>
  <v-container>
      <v-layout row>
          <v-flex xs12 sm6 offset-sm-3>
            <h1 class="text--secondary mb-3">Orders</h1>
            <v-list
            subheader
            two-line
            flat
            >

            <v-list-item-group
                v-model="settings"
                multiple
            >
                <v-list-item
                    avatar
                    v-for="order in orders"
                    :key="order.id"
                >
                
                    <v-list-item-action>
                    <v-checkbox
                        :input-value="order.done"
                        @change="markDone(order)"
                        color="success"
                    ></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content >
                    <v-list-item-title>{{order.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-actio>
                        <v-btn 
                        :to="'/ad/' + order.adId"
                        class="primary"
                        >OPEN</v-btn>
                    </v-list-item-actio>
                
                </v-list-item>

               
            </v-list-item-group>
            </v-list>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            orders: [
                {
                    id: 'fds3',
                    name: 'Vladilen',
                    phone: '566-11-98',
                    adId: '123',
                    done: false
                }
            ]
        }
    },
    methods: {
        markDone (order) {
            order.done = true
        }
    }
}
</script>

<style>

</style>
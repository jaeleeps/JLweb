<template>
    <v-footer
      fixed
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        height="60px"
        width="100%"
        class="lighten-1"
      >

      </v-card>
    </v-footer>

</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>